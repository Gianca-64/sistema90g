 'use client'
export const dynamic = "force-dynamic"

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function FormPage() {
  const [supabase, setSupabase] = useState<any>(null)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    setSupabase(client)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase) return
    
    setLoading(true)
    
    const { error } = await supabase
      .from('leads')
      .insert([{ nome, email }])
    
    setLoading(false)
    
    if (!error) {
      setSuccess(true)
      setNome('')
      setEmail('')
    }
  }

  if (!supabase) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Caricamento...</div>

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Richiedi verifica progetto</h1>
        
        {success ? (
          <p className="text-green-400">Richiesta inviata. Ti contattiamo entro 24h.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-3 bg-zinc-900 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-zinc-900 rounded"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black p-3 rounded font-bold disabled:opacity-50"
            >
              {loading ? 'Invio...' : 'Invia richiesta'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}