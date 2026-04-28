 'use server'
import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function creaCaso(formData: FormData) {
  const nome_cliente = formData.get('nome_cliente') as string
  const descrizione_post = formData.get('descrizione_post') as string
  
  const { data, error } = await supabase
    .from('casi')
    .insert({ nome_cliente, descrizione_post, stato: 'bozza' })
    .select()
    .single()
    
  if (error) throw new Error(error.message)
  revalidatePath('/dashboard')
  return data
}

export async function inviaMessaggioChat(casoId: number, testo: string, mittente: string) {
  console.log('SALVO MESSAGGIO:', { casoId, testo, mittente })
  
  const { error } = await supabase
    .from('chat_messaggi')
    .insert({ caso_id: casoId, testo, mittente })
    
  if (error) {
    console.error('ERRORE SUPABASE:', error)
    throw new Error(error.message)
  }
  revalidatePath('/dashboard')
}

export async function aggiornaStatoCaso(casoId: number, stato: string) {
  const { error } = await supabase
    .from('casi')
    .update({ stato })
    .eq('id', casoId)
    
  if (error) throw new Error(error.message)
  revalidatePath('/dashboard')
}

export async function getCasoCompleto(casoId: number) {
  const { data, error } = await supabase
    .from('casi')
    .select(`
      *,
      chat_messaggi(*)
    `)
    .eq('id', casoId)
    .single()
    
  if (error) {
    console.error('ERRORE getCasoCompleto:', error)
    return { chat_messaggi: [] }
  }
  return data
}