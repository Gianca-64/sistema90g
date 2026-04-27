 import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { createClient } from '@supabase/supabase-js'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  const { message, casoId, channel } = await request.json()

  const promptSistema = `
Sei un progettista tecnico di cucine. Obiettivo: intercettare clienti PRE-montaggio e far capire che senza progetto tecnico corretto butta soldi dopo.

PRIMA DI RISPONDERE, ANALIZZA:

1. FASE: PRE-montaggio o POST-montaggio?
   - PRE = "sto scegliendo", "consiglio", "dubbio", "devo fare", "progetto", "sto valutando"
   - POST = "si è rotto", "non chiude", "ammuffito", "scheggiato", "ho montato da X mesi"

2. INTENTO: Vuole evitare errore o vuole riparazione gratis?
   - EVITARE = dubbio tecnico, scelta materiali, distanze, quote
   - RIPARAZIONE = "come sistemo", "come pulisco", "posso aggiustare"

VERDETTO:
Se FASE=PRE + INTENTO=EVITARE → "VERDETTO: RISPONDI" + risposta.
Se FASE=POST o INTENTO=RIPARAZIONE → "VERDETTO: LASCIA" e stop.

---

SE RISPONDI, usa questo formato:

Se [azione pre-montaggio] senza [dettaglio tecnico], succede [conseguenza]. Danno evitato: [cifra]€. [Misura chiave progetto]. Stai per [azione]? Visto a [Città]: cliente buttato [cifra]€ per progetto senza [dettaglio].

REGOLE ASSOLUTE:
1. PARLA AL FUTURO: "Se monti senza..." "Se scegli senza...". MAI "Si è rotto perché..."
2. DANNO EVITATO: solo cifra del disastro futuro. Min 800€. MAI nominare costo progetto/perizia/consulenza.
3. MISURA: numero tecnico da inserire in progetto esecutivo. Smusso 2mm, Fuga 3mm, Distanza 5cm.
4. DOMANDA: 'Stai per...?' 'Hai verificato...?' 'Il progetto prevede...?' Scopri se sei in tempo.
5. MICRO-CASO: colpa del progetto mancante/errato. Mai colpa del montatore.
6. DIVIETO: Non scrivere prezzi, non scrivere "costa", non scrivere "preventivo", non scrivere "ti faccio io".
7. TONO: tecnico neutro che salva da errore. Non venditore.
8. Max 350 caratteri.

ESEMPIO RISPONDI:
VERDETTO: RISPONDI
Se monti top quarzo senza smusso 2mm, lo spigolo vivo si scheggia alla prima pentola. Danno evitato: 800€. Stai scegliendo il materiale? Visto a Roma: cliente buttato 1.2k dopo 2 mesi per progetto senza quota smusso.

ESEMPIO LASCIA:
VERDETTO: LASCIA
`

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: promptSistema },
        { role: "user", content: message }
      ],
      temperature: 0.1,
      max_tokens: 200,
    })

    const fullReply = completion.choices[0].message.content || ""
    const verdetto = fullReply.includes("VERDETTO: RISPONDI")? "RISPONDI" : "LASCIA"
    const reply = fullReply.replace(/VERDETTO: RISPONDI|VERDETTO: LASCIA/, '').trim()

    // Salva sempre il messaggio dell'utente
    await supabase.from('messaggi_chat').insert({
      caso_id: casoId,
      ruolo: 'user',
      contenuto: message,
      channel
    })

    // Salva la risposta AI SOLO se è un caso da aggredire
    if (verdetto === "RISPONDI" && reply.length > 0) {
      await supabase.from('messaggi_chat').insert({
        caso_id: casoId,
        ruolo: 'assistant',
        contenuto: reply,
        channel
      })
    }

    // Aggiorna sempre il verdetto sul caso per poter filtrare in dashboard
    await supabase.from('casi_facebook').update({
      verdetto: verdetto
    }).eq('id', casoId)

    return NextResponse.json({ reply, verdetto })

  } catch (e) {
    console.log('Errore OpenAI:', e)
    return NextResponse.json({ reply: "", verdetto: "ERRORE" })
  }
}