'use client'
export const dynamic = "force-dynamic"
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'

export default function VerificaProgetto() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    
    const { error } = await supabase.from('leads').insert({
      nome: form.get('nome'),
      telefono: form.get('telefono'),
      email: form.get('email'),
      citta: form.get('citta'),
      fase: 'PRE-CONFERMA',
      fonte: 'blog_form',
      stato: 'nuovo',
      punteggio: 85
    })

    setLoading(false)
    if (!error) setSent(true)
    else alert('Errore: ' + error.message)
  }

  if (sent) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="text-center max-w-md px-4">
        <Image src="/logo-90g.jpg" alt="Sistema 90G" width={80} height={80} className="mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-[#4A4A4A] mb-4">Richiesta ricevuta</h1>
        <p className="text-[#65676B]">Ti contatto su WhatsApp entro 24h per la verifica PRE-conferma ordine gratuita.</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16 px-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Image src="/logo-90g.jpg" alt="Sistema 90G" width={60} height={60} className="mb-6" />
        <h1 className="text-2xl font-bold text-[#4A4A4A] mb-2">
          Verifica PRE-Conferma Ordine Gratuita
        </h1>
        <p className="text-[#65676B] mb-6">
          Controllo il progetto prima che tu firmi l'ordine. Evita errori da 800€.
        </p>
        
        <input 
          name="nome" 
          placeholder="Nome e Cognome" 
          required 
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A6937C] focus:border-transparent" 
        />
        <input 
          name="telefono" 
          type="tel"
          placeholder="Telefono / WhatsApp" 
          required 
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A6937C] focus:border-transparent" 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          required 
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A6937C] focus:border-transparent" 
        />
        <input 
          name="citta" 
          placeholder="Città" 
          required 
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A6937C] focus:border-transparent" 
        />
        
        <button 
          disabled={loading} 
          className="w-full bg-[#A6937C] hover:bg-[#9A856E] text-white font-bold py-3 rounded-lg disabled:opacity-50 transition">
          {loading ? 'Invio...' : 'Richiedi Verifica Gratuita'}
        </button>
        
        <p className="text-xs text-[#65676B] mt-4 text-center">
          Risposta entro 24h. Zero spam.
        </p>
      </form>
    </div>
  )
}