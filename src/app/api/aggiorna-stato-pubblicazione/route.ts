 import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { risposta_id, stato, motivo_rifiuto } = await req.json()
    
    if (!risposta_id || !stato) {
      return NextResponse.json({ error: 'Dati mancanti' }, { status: 400 })
    }

    const updateData: any = { stato_pubblicazione: stato }
    if (stato === 'pubblicata') updateData.data_pubblicazione = new Date().toISOString()
    if (stato === 'rifiutata_gruppo' && motivo_rifiuto) updateData.motivo_rifiuto = motivo_rifiuto

    const { data, error } = await supabase
      .from('risposte_ai')
      .update(updateData)
      .eq('id', risposta_id)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ messaggio: `Risposta segnata come ${stato}`, data })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}