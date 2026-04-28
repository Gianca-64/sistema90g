'use client'
import { useState, useEffect } from 'react'

type Props = {
  casoId: string
  descrizionePost: string
  rispostaIniziale: string
  onRispostaUpdate: (risposta: string) => void
  onTitoloUpdate: (titolo: string) => void
}

export default function ChatAI({ casoId, descrizionePost, rispostaIniziale, onRispostaUpdate, onTitoloUpdate }: Props) {
  const [generating, setGenerating] = useState(false)
  const [chatMsg, setChatMsg] = useState('')
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([])

  useEffect(() => {
    if (rispostaIniziale) {
      setChatHistory([{ role: 'assistant', content: rispostaIniziale }])
    }
  }, [rispostaIniziale])

  const rigeneraAI = async () => {
    if (!descrizionePost) {
      alert('Inserisci prima il testo del post')
      return
    }
    
    setGenerating(true)
    try {
      const res = await fetch('/api/analizza-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testo: descrizionePost })
      })
      
      const data = await res.json()
      if (data.risposta && data.titolo) {
        setChatHistory([{ role: 'assistant', content: data.risposta }])
        onRispostaUpdate(data.risposta)
        onTitoloUpdate(data.titolo)
      } else {
        alert('Errore AI: ' + (data.error || 'Risposta non valida'))
      }
    } catch (err) {
      alert('Errore chiamata AI')
    }
    setGenerating(false)
  }

  const inviaChat = async () => {
    if (!chatMsg.trim()) return
    
    const newHistory = [...chatHistory, { role: 'user', content: chatMsg }]
    setChatHistory(newHistory)
    setChatMsg('')
    setGenerating(true)
    
    try {
      const res = await fetch('/api/chat-caso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          history: newHistory,
          contesto: descrizionePost,
          caso_id: casoId
        })
      })
      
      const data = await res.json()
      if (data.risposta) {
        setChatHistory([...newHistory, { role: 'assistant', content: data.risposta }])
        onRispostaUpdate(data.risposta)
      }
    } catch (err) {
      alert('Errore chat AI')
    }
    setGenerating(false)
  }

  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-medium">Risposta AI Sistema 90G</label>
          <button
            type="button"
            onClick={rigeneraAI}
            disabled={generating}
            className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700 disabled:bg-gray-400"
          >
            {generating? 'Generando...' : 'RIGENERA CON AI'}
          </button>
        </div>
        <textarea
          value={chatHistory.find(m => m.role === 'assistant')?.content || ''}
          readOnly
          className="w-full border rounded px-3 py-2 bg-gray-50"
          rows={8}
          placeholder="Clicca RIGENERA CON AI per generare la risposta..."
        />
      </div>

      <div className="border rounded p-4 bg-gray-50">
        <label className="block text-sm font-medium mb-2">Chat con AI - Affina la risposta</label>
        <div className="bg-white border rounded p-3 h-64 overflow-y-auto mb-2 space-y-2">
          {chatHistory.length === 0 && <p className="text-gray-400 text-sm">Genera prima una risposta con AI...</p>}
          {chatHistory.map((msg, idx) => (
            <div key={idx} className={`${msg.role === 'user'? 'text-right' : 'text-left'}`}>
              <div className={`inline-block px-3 py-2 rounded max-w-[80%] text-sm ${
                msg.role === 'user'? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {generating && <p className="text-sm text-gray-500">AI sta scrivendo...</p>}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={chatMsg}
            onChange={(e) => setChatMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && inviaChat()}
            placeholder="Chiedi: 'aggiungi E016', 'più corto', '6kW contatore'..."
            className="flex-1 border rounded px-3 py-2"
            disabled={generating}
          />
          <button
            type="button"
            onClick={inviaChat}
            disabled={generating ||!chatMsg.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            Invia
          </button>
        </div>
      </div>
    </div>
  )
}