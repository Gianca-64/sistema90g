 'use client'
export const dynamic = "force-dynamic"
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function FormCaso() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [titoloCaso, setTitoloCaso] = useState('')
  const [descrizione, setDescrizione] = useState('')
  const [loading, setLoading] = useState(false)
  const [successo, setSuccesso] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const { data: contatto, error: errorContatto } = await supabase
      .from('contatti')
      .insert({
        nome: nome,
        email: email,
        telefono: telefono,
        tipo_origine: 'caso_facebook'
      })
      .select()
      .single()

    if (errorContatto || !contatto) {
      alert('Errore creazione contatto: ' + errorContatto?.message)
      setLoading(false)
      return
    }

    const { error: errorCaso } = await supabase
      .from('casi_facebook')
      .insert({
        contatto_id: contatto.id,
        titolo_caso: titoloCaso,
        descrizione: descrizione,
        stato: 'aperto'
      })

    if (errorCaso) {
      alert('Errore creazione caso: ' + errorCaso.message)
      setLoading(false)
      return
    }

    setLoading(false)
    setSuccesso(true)
    setNome('')
    setEmail('')
    setTelefono('')
    setTitoloCaso('')
    setDescrizione('')
  }

  if (successo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Richiesta inviata!</h1>
          <p className="text-gray-600 mb-6">Ti ricontatteremo al più presto.</p>
          <button 
            onClick={() => setSuccesso(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Invia un'altra richiesta
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Apri un nuovo caso</h1>
        <p className="text-gray-600 mb-8">Compila il form e ti ricontatteremo per gestire la tua richiesta.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nome e Cognome *</label>
              <input 
                type="text" 
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Mario Rossi"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="mario@esempio.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Telefono</label>
            <input 
              type="tel" 
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="333 1234567"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Titolo del caso *</label>
            <input 
              type="text" 
              required
              value={titoloCaso}
              onChange={(e) => setTitoloCaso(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Es: Problema con campagne Facebook Ads"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Descrivi il problema *</label>
            <textarea 
              required
              rows={5}
              value={descrizione}
              onChange={(e) => setDescrizione(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Spiega nel dettaglio cosa ti serve..."
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Invio in corso...' : 'Invia Richiesta'}
          </button>
        </form>
      </div>
    </div>
  )
}