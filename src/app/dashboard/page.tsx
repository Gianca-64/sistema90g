 'use client'

import { useState, useEffect } from 'react'
import { FileText, Phone, Plus, Search, X } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

type Caso = {
  id: number
  numero_pratica: string
  nome_cliente: string
  telefono: string
  gruppo_facebook: string
  testo_richiesta: string
  stato: string
  immagini: string[]
  created_at: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [risultati, setRisultati] = useState<Caso[]>([])
  const [detailModal, setDetailModal] = useState<Caso | null>(null)
  const [stats, setStats] = useState({
    casiTotali: 0,
    progettiAttivi: 0,
    fatturato: 0,
    tassoConversione: 0
  })

  useEffect(() => {
    caricaStats()
  }, [])

  useEffect(() => {
    if (searchTerm.length > 2) {
      cercaCasi()
    } else {
      setRisultati([])
    }
  }, [searchTerm])

  const caricaStats = async () => {
    const { data: casi } = await supabase.from('casi').select('*')
    if (casi) {
      setStats({
        casiTotali: casi.length,
        progettiAttivi: 0,
        fatturato: 0,
        tassoConversione: 0
      })
    }
  }

  const cercaCasi = async () => {
    const term = searchTerm.toLowerCase()
    const { data } = await supabase
     .from('casi')
     .select('*')
     .or(`nome_cliente.ilike.%${term}%,telefono.ilike.%${term}%,gruppo_facebook.ilike.%${term}%,testo_richiesta.ilike.%${term}%,numero_pratica.ilike.%${term}%`)
     .limit(10)

    if (data) setRisultati(data)
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Panoramica Sistema90G</p>
        </div>
        <button
          onClick={() => router.push('/dashboard/casi')}
          className="px-4 py-2.5 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-800"
        >
          <Plus className="w-4 h-4" />
          Nuovo Caso
        </button>
      </div>

      {/* RICERCA GLOBALE */}
      <div className="mb-6 relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Cerca lead per nome, telefono, gruppo o testo richiesta..."
            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
          />
        </div>

        {/* RISULTATI DROPDOWN */}
        {risultati.length > 0 && (
          <div className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
            {risultati.map(caso => (
              <div
                key={caso.id}
                onClick={() => {
                  setDetailModal(caso)
                  setSearchTerm('')
                  setRisultati([])
                }}
                className="p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-900">{caso.nome_cliente}</p>
                    <p className="text-sm text-slate-600">{caso.numero_pratica} · {caso.telefono}</p>
                    {caso.gruppo_facebook && (
                      <p className="text-xs text-blue-600 mt-1">{caso.gruppo_facebook}</p>
                    )}
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {caso.stato}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-600">Casi Totali</div>
          <div className="text-3xl font-bold text-slate-900 mt-1">{stats.casiTotali}</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-600">Progetti Attivi</div>
          <div className="text-3xl font-bold text-slate-900 mt-1">{stats.progettiAttivi}</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-600">Fatturato Mese</div>
          <div className="text-3xl font-bold text-slate-900 mt-1">€{stats.fatturato}</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm text-slate-600">Tasso Conversione</div>
          <div className="text-3xl font-bold text-slate-900 mt-1">{stats.tassoConversione}%</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Andamento Casi</h2>
        <div className="h-64 flex items-center justify-center text-slate-400 text-sm">
          Grafico in arrivo - per ora usa i contatori sopra
        </div>
      </div>

      {/* MODAL DETTAGLIO */}
      {detailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto" onClick={() => setDetailModal(null)}>
          <div className="bg-white rounded-xl p-6 w-full max-w-3xl my-8" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{detailModal.nome_cliente}</h2>
                <p className="text-sm text-slate-500 mt-1">Pratica: {detailModal.numero_pratica}</p>
              </div>
              <button onClick={() => setDetailModal(null)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Telefono:</span> {detailModal.telefono || 'N/A'}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">Gruppo:</span> {detailModal.gruppo_facebook || 'N/A'}
                </div>
              </div>
              <div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {detailModal.stato}
                </span>
              </div>
            </div>

            {detailModal.testo_richiesta && (
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                  <FileText className="w-4 h-4" />
                  Testo Richiesta
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700 whitespace-pre-wrap">
                  {detailModal.testo_richiesta}
                </div>
              </div>
            )}

            {detailModal.immagini && detailModal.immagini.length > 0 && (
              <div>
                <div className="text-sm font-medium text-slate-700 mb-2">
                  Immagini ({detailModal.immagini.length})
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {detailModal.immagini.map((url, i) => (
                    <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                      <img src={url} className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}