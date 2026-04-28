 import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const { cliente, gruppo, immagini, conversazione, rispondi_come } = await req.json()

    const systemPrompt = `
Sei un esperto di arredamento cucine di Sistema90G.
Stai rispondendo in un gruppo Facebook "${gruppo}".

REGOLA 1: Leggi tutta la conversazione prima di rispondere.
REGOLA 2: Se rispondi_come = "autore_post" parli come se fossi il cliente ${cliente} che ringrazia e fa domande.
Se rispondi_come = "te" parli come Sistema90G, dai consigli tecnici professionali ma con tono social, non da venditore.

REGOLA 3: Analizza le immagini se presenti: layout, ergonomia, difetti, pregi.
REGOLA 4: Tono: amichevole, competente, utile. Usa emoji con moderazione. Max 600 caratteri.
REGOLA 5: Chiudi sempre invitando a continuare la discussione o con una domanda.

Rispondi solo con il testo da copiare su Facebook, senza spiegazioni.
`

    const userPrompt = `
Conversazione completa:
${conversazione || 'Post iniziale del cliente'}

${immagini?.length > 0? `Il cliente ha allegato ${immagini.length} immagini del progetto cucina.` : ''}

Ora rispondi_come: ${rispondi_come === 'autore_post'? 'cliente ' + cliente : 'Sistema90G'}
`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.8,
      max_tokens: 400
    })

    const risposta = completion.choices[0].message.content

    return NextResponse.json({ risposta })
  } catch (error: any) {
    console.error('Errore OpenAI:', error)
    return NextResponse.json(
      { error: error.message || 'Errore generazione AI' },
      { status: 500 }
    )
  }
}