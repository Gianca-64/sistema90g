 'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { inviaMessaggioChat, aggiornaStatoCaso, getCasoCompleto } from '../app/actions/casi'

export default function CasoModal({ caso, onClose }: any) {
  const router = useRouter()
  const [tab, setTab] = useState('chat')
  const [messaggio, setMessaggio] = useState('')
  const [mittente, setMittente] = useState('umano')
  const [messaggi, setMessaggi] = useState<any[]>([])
  const [risposteAI, setRisposteAI] = useState<string[]>([])
  const [loadingAI, setLoadingAI] = useState(false)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (caso?.id) caricaChat()
  }, [caso?.id])

  const caricaChat = async () => {
    const data = await getCasoCompleto(caso.id)
    setMessaggi(data.chat_messaggi || [])
  }

  const handleInvia = async () => {
    if (!messaggio.trim()) return
    setLoading(true)
    await inviaMessaggioChat(caso.id, messaggio, mittente)
    setMessaggio('')
    await caricaChat()
    setLoading(false)
  }

  const generaRisposteAI = async () => {
    setLoadingAI(true)
    try {
      const res = await fetch('/api/genera-risposte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postOriginale: caso.descrizione_post })
      })
      const data = await res.json()
      setRisposteAI(data.risposte || [])
    } catch (e) {
      alert('Errore generazione AI. Controlla OPENAI_API_KEY')
    }
    setLoadingAI(false)
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('casoId', caso.id)
    
    try {
      const res = await fetch('/api/upload-media', { 
        method: 'POST', 
        body: formData 
      })
      const data = await res.json()
      
      if (data.url) {
        await inviaMessaggioChat(caso.id, `![immagine](${data.url})`, 'umano')
        await caricaChat()
        setTab('chat')
      } else {
        alert('Errore upload: ' + data.error)
      }
    } catch (e) {
      alert('Errore upload immagine')
    }
    setUploading(false)
    e.target.value = ''
  }

  const usaRispostaAI = async (testo: string) => {
    await inviaMessaggioChat(caso.id, testo, 'ai')
    await caricaChat()
    setTab('chat')
  }

  const cambiaStato = async (nuovoStato: string) => {
    await aggiornaStatoCaso(caso.id, nuovoStato)
    router.refresh()
    onClose()
  }

  if (!caso) return null

  const renderMessaggio = (testo: string) => {
    const imgMatch = testo.match(/!\[immagine\]\((.*?)\)/)
    if (imgMatch) {
      return <img src={imgMatch[1]} alt="upload" className="max-w-full rounded mt-1" />
    }
    return testo
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg w-full max-w-2xl max-h- overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">{caso.nome_cliente}</h2>
              <p className="text-sm text-gray-500">{caso.nome_gruppo || 'Gruppo Cucine Design'}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
          
          <div className="flex gap-4 mt-4 border-b">
            <button 
              onClick={() => setTab('chat')}
              className={`pb-2 text-sm ${tab === 'chat'? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
            >
              Chat
            </button>
            <button 
              onClick={() => setTab('ai')}
              className={`pb-2 text-sm ${tab === 'ai'? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
            >
              AI
            </button>
            <button 
              onClick={() => setTab('media')}
              className={`pb-2 text-sm ${tab === 'media'? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
            >
              Media
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {tab === 'chat' && (
            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">POST ORIGINALE</div>
                <div className="bg-gray-100 p-3 rounded">{caso.descrizione_post}</div>
              </div>

              <div>
                <div className="text-xs text-gray-500 mb-2">CHAT</div>
                <div className="space-y-2 mb-3 max-h-64 overflow-y-auto">
                  {messaggi.length === 0? (
                    <p className="text-sm text-gray-400">Nessun messaggio ancora</p>
                  ) : (
                    messaggi.map((m: any) => (
                      <div key={m.id} className="bg-gray-100 p-2 rounded text-sm">
                        <span className="font-medium text-xs text-gray-600">{m.mittente}:</span>
                        <div>{renderMessaggio(m.testo)}</div>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="flex gap-2">
                  <select value={mittente} onChange={e => setMittente(e.target.value)} className="border rounded px-2 text-sm">
                    <option value="umano">Umano</option>
                    <option value="autore">Autore</option>
                    <option value="membro">Membro</option>
                    <option value="ai">AI</option>
                  </select>
                  <input
                    value={messaggio}
                    onChange={e => setMessaggio(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleInvia()}
                    placeholder="Scrivi un messaggio..."
                    className="flex-1 border rounded px-3 py-2 text-sm"
                    disabled={loading}
                  />
                  <button onClick={handleInvia} disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 disabled:opacity-50">
                    {loading? '...' : 'Invia'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {tab === 'ai' && (
            <div className="space-y-4">
              <button 
                onClick={generaRisposteAI} 
                disabled={loadingAI}
                className="bg-purple-500 text-white px-4 py-2 rounded text-sm hover:bg-purple-600 disabled:opacity-50"
              >
                {loadingAI? 'Genero...' : 'Genera 3 Risposte AI'}
              </button>
              
              {risposteAI.map((r, i) => (
                <div key={i} className="bg-blue-50 p-3 rounded text-sm">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-xs font-medium text-gray-500">Variante {i+1}</div>
                    <button 
                      onClick={() => usaRispostaAI(r)}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Usa in chat
                    </button>
                  </div>
                  {r}
                </div>
              ))}
            </div>
          )}

          {tab === 'media' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Carica immagine</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  disabled={uploading}
                  className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {uploading && <p className="text-xs text-gray-500 mt-2">Caricamento...</p>}
              </div>
              
              <div className="text-xs text-gray-500">
                JPG, PNG, WEBP. Max 5MB. L'immagine viene salvata su Supabase Storage e aggiunta alla chat.
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t bg-gray-50 flex gap-2">
          <button onClick={() => cambiaStato('rifiutata')} className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50">
            Rifiuta
          </button>
          <button onClick={onClose} className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
            Chiudi Caso
          </button>
          <button onClick={() => cambiaStato('pubblicata')} className="ml-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Pubblica
          </button>
        </div>
      </div>
    </div>
  )
}