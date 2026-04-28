 import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const { testo, post_id_fb } = await req.json()
    if (!testo) return NextResponse.json({ error: 'Testo mancante' }, { status: 400 })

    const [elettrodomestici, materialiTop, altezze] = await Promise.all([
      supabase.from('elettrodomestici_90g').select('tipologia, kw_standard'),
      supabase.from('materiali_cucina_90g').select('materiale, spessore_standard_mm').eq('categoria', 'top'),
      supabase.from('altezze_isola_90g').select('*')
    ])

    const mobileBase = altezze.data?.find(a => a.tipologia === 'mobile_base')?.h_standard_cm || 76
    const zoccolo = altezze.data?.find(a => a.tipologia === 'zoccolo')?.h_standard_cm || 12

    const contextData = `
SISTEMA 90G:
- Altezza base+zoccolo: ${mobileBase + zoccolo}cm
- kW: Induzione 7.4, Forno 3.6

NORME CUCINA:
- Superficie min: 9mq DM 5/7/1975
- Corsia lavoro: 120cm min tra fronti

NORME ALTRI AMBIENTI:
- Corridoio: 100cm min DM 236/89
- Disimpegno bagno: 1,20mq min, vietato accesso diretto da cucina DM 1975
`

    const systemPrompt = `Sei un tecnico Sistema 90G su Facebook. Tono: umano, alleato. Dai verdetti chiari.

SCENARIO A - DATO MANCANTE:
esito_tecnico: "dati_mancanti"
risposta: "Capisco che vuoi la cucina [richiesta], ci sta. L'idea di [proposta] ha senso. Però occhio a [ambiente]: per legge deve restare minimo [misura] ([norma]). Se scende sotto, rischi [conseguenza pertinente]. Il 3D è bello ma non verifica se resti a norma. Prima verifichiamo le misure reali. Quanto misura ora [ambiente] da muro a muro?"

SCENARIO B - DATO PRESENTE E OK:
esito_tecnico: "confermato"
risposta: "Capisco che vuoi la cucina [richiesta]. Con [ambiente] attuale [misura] e modifica di [X]cm, arrivi a [finale]cm. Ci stai. Resti a norma [norma] e la cucina 3m si può fare."

SCENARIO C - DATO PRESENTE E KO:
esito_tecnico: "rifiutato"
risposta: "Capisco che vuoi la cucina [richiesta]. Con [ambiente] attuale [misura] e modifica di [X]cm, arrivi a [finale]cm. Non ci stai. Scendi sotto i 100cm, fuori norma [norma] . Rischi problemi se vendi casa. Serve altra soluzione."

Max 480 caratteri.
Rispondi SOLO in JSON: {"titolo": "max 5 parole", "risposta": "max 480 caratteri", "esito_tecnico": "dati_mancanti|confermato|rifiutato"}`

    const userPrompt = `POST CLIENTE:\n${testo}\n\nDATABASE NORMATIVO:\n${contextData}`

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
        temperature: 0.3,
        max_tokens: 600,
        response_format: { type: "json_object" }
      })
    })

    const data = await aiResponse.json()
    const parsed = JSON.parse(data.choices[0].message.content)

    const { data: bozza, error } = await supabase
    .from('risposte_ai')
    .insert({
        post_originale: testo,
        post_id_fb: post_id_fb || null,
        titolo: parsed.titolo,
        risposta: parsed.risposta,
        esito_tecnico: parsed.esito_tecnico,
        stato_pubblicazione: 'bozza',
        versione: 1
      })
    .select()
    .single()

    if (error) throw error

    return NextResponse.json({
      id: bozza.id,
      titolo: parsed.titolo,
      risposta: parsed.risposta,
      esito_tecnico: parsed.esito_tecnico,
      stato: 'bozza'
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}