'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function inviaMessaggio(casoId: string, testo: string, mittente: 'ai' | 'umano') {
  await supabase
    .from('chat_messaggi')
    .insert({
      caso_id: casoId,
      testo,
      mittente,
      data_invio: new Date().toISOString()
    })

  revalidatePath(`/dashboard/${casoId}`)
}