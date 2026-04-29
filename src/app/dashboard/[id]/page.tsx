 import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import { aggiornaStatoRisposta } from '@/app/actions/risposte'
import { inviaMessaggio } from '@/app/actions/chat'

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: caso, error } = await supabase
   .from('casi')
   .select('*, risposte_ai(*), chat_messaggi(*)')
   .eq('id', params.id)
   .maybeSingle()

  if (error || !caso) return notFound()

  const risposta = caso.risposte_ai?.[0]
  const messaggi = (caso.chat_messaggi || []).sort((a: any, b: any) => 
  new Date(a.data_invio).getTime() - new Date(b.data_invio).getTime()
)
  const inviaMessaggioConId = inviaMessaggio.bind(null, params.id)

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Risposta per Caso {caso.id}</h1>
      
      <div className="mb-8 bg-gray-50 p-4 rounded border">
        <p className="font-semibold mb-2">Post originale:</p>
        <p>{caso.descrizione_post}</p>
      </div>

      {risposta? (
        <>
          <div className="mb-6">
            <textarea defaultValue={risposta.risposta} className="w-full h-40 p-3 border rounded mb-4" readOnly />
            <div className="flex gap-3">
              <form action={aggiornaStatoRisposta.bind(null, risposta.id, 'accettata')}>
                <button className="px-4 py-2 rounded bg-green-100 text-green-700">
                  {risposta.stato_pubblicazione === 'accettata'? 'Accettata ✓' : 'Accetta'}
                </button>
              </form>
              <form action={aggiornaStatoRisposta.bind(null, risposta.id, 'pubblicata')}>
                <button className="px-4 py-2 rounded bg-blue-100 text-blue-700">
                  {risposta.stato_pubblicazione === 'pubblicata'? 'Pubblicata ✓' : 'Segna Pubblicata'}
                </button>
              </form>
              <form action={aggiornaStatoRisposta.bind(null, risposta.id, 'rifiutata')}>
                <button className="px-4 py-2 rounded bg-red-100 text-red-700">
                  {risposta.stato_pubblicazione === 'rifiutata'? 'Rifiutata ✓' : 'Segna Rifiutata'}
                </button>
              </form>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Chat con Cliente</h2>
            <div className="bg-gray-50 p-4 rounded h-80 overflow-y-auto mb-4 space-y-3">
              {messaggi.length > 0? messaggi.map((msg) => (
                <div key={msg.id} className={`flex ${msg.mittente === 'umano'? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] p-3 rounded-lg ${msg.mittente === 'umano'? 'bg-blue-600 text-white' : 'bg-white border'}`}>
                    <div className="text-xs mb-1">{msg.mittente === 'umano'? 'Tu' : 'Cliente'}</div>
                    <div className="text-sm">{msg.testo}</div>
                  </div>
                </div>
              )) : <p className="text-gray-500 text-sm text-center py-8">Nessun messaggio ancora.</p>}
            </div>
            <form action={inviaMessaggioConId} className="flex gap-2">
              <input name="testo" type="text" placeholder="Scrivi un messaggio..." className="flex-1 border rounded px-3 py-2" required />
              <button type="submit" className="bg-black text-white px-6 py-2 rounded">Invia</button>
            </form>
          </div>
        </>
      ) : <div>Nessuna risposta AI per questo caso.</div>}
    </div>
  )
}