 'use client'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function ChatPage() {
  const { id } = useParams()
  const router = useRouter()
  const [messages, setMessages] = useState<{role: string, content: string}[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [canale, setCanale] = useState('safe') // <-- AGGIUNTO

  async function sendMessage() {
    if (!input) return
    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        message: input, 
        casoId: id,
        canale: canale // <-- AGGIUNTO
      })
    })
    const data = await res.json()
    
    setMessages([...newMessages, { role: 'assistant', content: data.reply }])
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => router.push('/dashboard')}
          className="text-gray-400 hover:text-white mb-6 flex items-center gap-2"
        >
          ← Torna alla Dashboard
        </button>
        
        <h1 className="text-3xl font-bold text-white mb-8">Chat AI - Caso #{id}</h1>

        {/* SELECT CANALE - AGGIUNTO */}
        <div className="mb-4">
          <select 
            value={canale} 
            onChange={(e) => setCanale(e.target.value)}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-800"
          >
            <option value="safe">Commento Gruppo FB - Safe</option>
            <option value="preventivo">Risposta Preventivo</option>
            <option value="saggezza">Saggezza Umile</option>
          </select>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6 mb-4 h-96 overflow-y-auto border border-gray-800">
          {messages.length === 0 && (
            <p className="text-gray-500 text-center mt-20">Inizia la conversazione con l'AI per risolvere questo caso</p>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`mb-4 ${m.role === 'user'? 'text-right' : 'text-left'}`}>
              <div className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${
                m.role === 'user'? 'bg-[#0A66C2] text-white' : 'bg-gray-800 text-gray-200'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <p className="text-gray-400">L'AI sta pensando...</p>}
        </div>

        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-800"
            placeholder="Scrivi come vuoi risolvere il caso..."
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-[#0A66C2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004182] disabled:opacity-50"
          >
            Invia
          </button>
        </div>
      </div>
    </div>
  )
}