 'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function aggiornaStatoRisposta(rispostaId: string, nuovoStato: string) {
  await supabase
    .from('risposte_ai')
    .update({ 
      stato_pubblicazione: nuovoStato,
      data_aggiornamento: new Date().toISOString()
    })
    .eq('id', rispostaId)

  revalidatePath('/dashboard')
}