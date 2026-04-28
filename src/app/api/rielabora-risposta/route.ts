 import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const { risposta_id } = await req.json()
    if (!risposta_id) return NextResponse.json({ error: 'ID mancante' }, { status: 400 })

    // Recupera risposta rifiutata
    const { data: vecchia, error: fetchError } = await supabase
    .from('risposte_ai')
    .select('*')
    .eq('id', risposta_id)
    .single()

    if (fetchError) throw fetchError
    if (vecchia.stato_pubblicazione!== 'rifiutata_gruppo') {
      return NextResponse.json({ error: 'Risposta non rifiutata' }, { status: 400 })
    }

    const systemPrompt = `Sei un tecnico Sistema 90G. La tua risposta precedente è stata RIFIUTATA dal gruppo Facebook.

RISPOSTA PRECEDENTE:
${vecchia.risposta}

MOTIVO RIFIUTO:
${vecchia.motivo_rifiuto || 'Non specificato. Probabile: tono sbagliato, troppo tecnica, non pertinente.'}

COMPITO: Rielabora la risposta evitando l'errore precedente.

REGOLE RIELABORAZIONE:
1. Se rifiutata per "troppo tecnica" → Semplifica, usa più empatia, meno norme esplicite
2. Se rifiutata per "tono freddo" → Aggiungi più "capisco", "ci sta", "rischio"
3. Se rifiutata per "non pertinente" → Cambia conseguenza, usa solo ambiente citato
4. Mantieni precisione normativa ma spiega meglio
5. Stessa struttura: Empatia → Validazione → Vincolo+Norma → Domanda

Max 480 caratteri.
Rispondi JSON: {"titolo": "max 5 parole", "risposta": "max 480 caratteri", "esito_tecnico": "dati_mancanti|confermato|rifiutato"}`

    const userPrompt = `POST ORIGINALE:\n${vecchia.post_originale}\n\nRielabora tenendo conto del rifiuto.`

    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.4, // Più creatività per rielaborare
        max_tokens: 600,
        response_format: { type: "json_object" }
      })
    })

    const data = await aiResponse.json()
    const parsed = JSON.parse(data.choices[0].message.content)

    // Salva nuova versione
    const { data: nuova, error: insertError } = await supabase
    .from('risposte_ai')
    .insert({
        post_originale: vecchia.post_originale,
        post_id_fb: vecchia.post_id_fb,
        titolo: parsed.titolo,
        risposta: parsed.risposta,
        esito_tecnico: parsed.esito_tecnico,
        stato_pubblicazione: 'bozza',
        versione: vecchia.versione + 1,
        id_risposta_precedente: vecchia.id
      })
    .select()
    .single()

    if (insertError) throw insertError

    return NextResponse.json({
      id: nuova.id,
      titolo: parsed.titolo,
      risposta: parsed.risposta,
      esito_tecnico: parsed.esito_tecnico,
      versione: nuova.versione,
      messaggio: `Rielaborazione v${nuova.versione} creata`
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}