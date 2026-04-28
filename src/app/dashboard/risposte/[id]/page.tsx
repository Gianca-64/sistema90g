 'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import RispostaActions from '@/components/RispostaActions'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function PaginaRisposta() {
  const params = useParams()
  const id = params.id as string
  const [risposta, setRisposta] = useState<any>(null)
  const [errore, setErrore] = useState('')

  useEffect(() => {
    if (!id) return
    
    const carica = async () => {
      console.log('ID dalla URL:', id)
      const { data, error } = await supabase
     .from('risposte_ai')
     .select('*')
     .eq('id', id)
     .maybeSingle()
      
      console.log('Data:', data, 'Error:', error)
      if (error) setErrore(error.message)
      if (!data) setErrore('Nessun record trovato con questo ID')
      setRisposta(data)
    }
    carica()
  }, [id])

  if (errore) return <div className="p-6 text-red-600">Errore: {errore}</div>
  if (!risposta) return <div className="p-6">Caricamento...</div>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{risposta.titolo}</h1>
      
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h3 className="font-semibold text-sm mb-2">Post originale:</h3>
        <p className="text-sm whitespace-pre-wrap">{risposta.post_originale}</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex gap-2 mb-4">
          <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
            v{risposta.versione} · {risposta.tentativo_stile}
          </span>
          <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
            {risposta.esito_tecnico}
          </span>
        </div>
        
        <textarea 
          className="w-full h-64 p-4 border rounded"
          value={risposta.risposta}
          readOnly
        />
      </div>

      <RispostaActions 
        rispostaId={risposta.id}
        statoAttuale={risposta.stato_pubblicazione}
        onStatoAggiornato={() => window.location.reload()}
      />
    </div>
  )
}