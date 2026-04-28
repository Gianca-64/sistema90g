import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { history, contesto, caso_id } = await req.json()

    const systemPrompt = `Sei un montatore Sistema 90G. Modifica la risposta precedente seguendo le richieste dell'utente. Mantieni tono tecnico, cita sempre codici E0XX, kW, mm, euro. Massimo 800 caratteri. No vendita.`

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
          { role: 'user', content: `POST ORIGINALE: ${contesto}` },
        ...history
        ],
        temperature: 0.3,
        max_tokens: 700
      })
    })

    const data = await aiResponse.json()
    const risposta = data.choices[0].message.content

    return NextResponse.json({ risposta })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}