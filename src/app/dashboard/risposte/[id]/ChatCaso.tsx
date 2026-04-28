 'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type TipoAutore = 'TU' | 'AUTORE' | 'ALTRO'

export default function ChatCaso({ casoId, nomeAutore }: { casoId: number, nomeAutore: string }) {
  const [messaggi, setMessaggi] = useState<any[]>([])
  const [nuovoMsg, setNuovoMsg] = useState('')
  const [tipoAutore, setTipoAutore] = useState<TipoAutore>('TU')
  const [nomeAltro, setNomeAltro] = useState('')
  const [canale, setCanale] = useState<'COMMENTO' | 'DM'>('COMMENTO')
  const [dmCon, setDmCon] = useState<'AUTORE' | 'ALTRO'>('AUTORE')

  useEffect(() => {
    caricaMessaggi()
  }, [casoId])

  async function caricaMessaggi() {
    const { data } = await supabase
   .from('casi_chat_autore')
   .select('*')
   .eq('caso_id', casoId)
   .order('data_invio', { ascending: true })

    if (data) setMessaggi(data)
  }

  async function inviaMessaggio() {
    if (!nuovoMsg.trim()) return

    let nomeFinale = 'Io'
    if (tipoAutore === 'AUTORE') nomeFinale = nomeAutore || 'Autore'
    if (tipoAutore === 'ALTRO') nomeFinale = nomeAltro || 'Altro membro'
    if (canale === 'DM') {
      nomeFinale = dmCon === 'AUTORE'? `DM - ${nomeAutore}` : `DM - ${nomeAltro || 'Altro'}`
    }

    const { error } = await supabase
   .from('casi_chat_autore')
   .insert({
        caso_id: casoId,
        autore: nomeFinale,
        testo: nuovoMsg,
        canale: canale
      })

    if (!error) {
      setNuovoMsg('')
      caricaMessaggi()
    } else {
      alert('Errore: ' + error.message)
    }
  }

  function passaADm(con: 'AUTORE' | 'ALTRO') {
    setCanale('DM')
    setDmCon(con)
    if (con === 'AUTORE') setTipoAutore('AUTORE')
    if (con === 'ALTRO') setTipoAutore('ALTRO')
  }

  return (
    <div className="mt-8 border-t pt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">Chat Operativa</h2>
        {canale === 'COMMENTO'? (
          <div className="flex gap-2">
            <button onClick={() => passaADm('AUTORE')} className="bg-purple-600 text-white px-3 py-2 rounded text-sm font-bold">
              DM Autore →
            </button>
            <button onClick={() => passaADm('ALTRO')} className="bg-purple-500 text-white px-3 py-2 rounded text-sm font-bold">
              DM Altro →
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded text-sm font-bold">
              DM con {dmCon === 'AUTORE'? nomeAutore : nomeAltro || 'Altro'}
            </span>
            <button onClick={() => {setCanale('COMMENTO'); setTipoAutore('TU')}} className="bg-gray-300 px-3 py-1 rounded text-sm">
              Torna a Commenti
            </button>
          </div>
        )}
      </div>

      {/* Cronologia messaggi */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4 h-96 overflow-y-auto">
        {messaggi.length === 0? (
          <p className="text-gray-500 text-sm">Nessun messaggio. Inizia la conversazione.</p>
        ) : (
          messaggi.map(msg => {
            const isMio = msg.autore === 'Io' || msg.autore === 'team' || msg.autore.startsWith('DM - Io') || msg.autore.startsWith('DM - DM')
            return (
              <div key={msg.id} className={`mb-3 ${isMio? 'text-right' : ''}`}>
                <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
                  msg.canale === 'DM'? 'bg-purple-600 text-white' :
                  isMio? 'bg-blue-600 text-white' :
                  msg.autore === nomeAutore? 'bg-green-200' : 'bg-gray-200'
                }`}>
                  <p className="text-xs font-bold mb-1">
                    {msg.autore} · {msg.canale} · {new Date(msg.data_invio).toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'})}
                  </p>
                  <p className="whitespace-pre-wrap">{msg.testo}</p>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Input nuovo messaggio */}
      <div className="bg-white border rounded-lg p-4">
        {canale === 'COMMENTO' && (
          <div className="flex gap-2 mb-3 flex-wrap">
            <button onClick={() => setTipoAutore('TU')}
              className={`px-3 py-1 rounded text-sm ${tipoAutore==='TU'? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              TU - Commento
            </button>
            <button onClick={() => setTipoAutore('AUTORE')}
              className={`px-3 py-1 rounded text-sm ${tipoAutore==='AUTORE'? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              {nomeAutore || 'AUTORE'}
            </button>
            <button onClick={() => setTipoAutore('ALTRO')}
              className={`px-3 py-1 rounded text-sm ${tipoAutore==='ALTRO'? 'bg-gray-600 text-white' : 'bg-gray-200'}`}>
              ALTRO membro
            </button>
          </div>
        )}

        {(tipoAutore === 'ALTRO' || (canale === 'DM' && dmCon === 'ALTRO')) && (
          <input
            className="w-full border p-2 mb-2 rounded text-sm"
            placeholder="Nome membro gruppo..."
            value={nomeAltro}
            onChange={e => setNomeAltro(e.target.value)} />
        )}

        <textarea
          className="w-full border p-2 rounded mb-2"
          rows={3}
          placeholder={canale === 'DM'? 'Scrivi messaggio privato...' : 'Scrivi commento pubblico...'}
          value={nuovoMsg}
          onChange={e => setNuovoMsg(e.target.value)}
          onKeyDown={e => e.key === 'Enter' &&!e.shiftKey && (e.preventDefault(), inviaMessaggio())}
        />

        <div className="flex justify-between">
          <button onClick={inviaMessaggio} className="bg-blue-600 text-white px-6 py-2 rounded font-bold">
            INVIA
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(nuovoMsg)}
            className="bg-gray-300 px-4 py-2 rounded text-sm">
            Copia per FB
          </button>
        </div>
      </div>
    </div>
  )
}