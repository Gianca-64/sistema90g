'use client'

import { useState, useEffect } from 'react'
import { Wallet, TrendingUp, Plus, X, Calculator, ArrowUpCircle, ArrowDownCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

type Entrata = {
  id: string
  descrizione: string
  importo: number
  esentasse: boolean
  data_incasso: string
}

type Spesa = {
  id: string
  descrizione: string
  importo: number
  categoria: string
  data_spesa: string
}

export default function Finanza() {
  const [entrate, setEntrate] = useState<Entrata[]>([])
  const [spese, setSpese] = useState<Spesa[]>([])
  const [modalEntrata, setModalEntrata] = useState(false)
  const [modalSpesa, setModalSpesa] = useState(false)
  const [formEntrata, setFormEntrata] = useState({ descrizione: '', importo: '', esentasse: false })
  const [formSpesa, setFormSpesa] = useState({ descrizione: '', importo: '', categoria: 'software' })

  useEffect(() => {
    caricaDati()
  }, [])

  const caricaDati = async () => {
    const { data: entrateData } = await supabase
      .from('entrate')
      .select('*')
      .order('data_incasso', { ascending: false })
    
    const { data: speseData } = await supabase
      .from('spese')
      .select('*')
      .order('data_spesa', { ascending: false })
    
    if (entrateData) setEntrate(entrateData)
    if (speseData) setSpese(speseData)
  }

  const aggiungiEntrata = async () => {
    const { error } = await supabase.from('entrate').insert([{
      descrizione: formEntrata.descrizione,
      importo: parseFloat(formEntrata.importo),
      esentasse: formEntrata.esentasse,
      data_incasso: new Date().toISOString()
    }])
    if (!error) {
      setModalEntrata(false)
      setFormEntrata({ descrizione: '', importo: '', esentasse: false })
      caricaDati()
    }
  }

  const aggiungiSpesa = async () => {
    const { error } = await supabase.from('spese').insert([{
      descrizione: formSpesa.descrizione,
      importo: parseFloat(formSpesa.importo),
      categoria: formSpesa.categoria,
      data_spesa: new Date().toISOString()
    }])
    if (!error) {
      setModalSpesa(false)
      setFormSpesa({ descrizione: '', importo: '', categoria: 'software' })
      caricaDati()
    }
  }

  // === CALCOLI FISCALI LIVE ===
  const imponibile = entrate.filter(e => !e.esentasse).reduce((sum, e) => sum + e.importo, 0)
  const entrateEsentasse = entrate.filter(e => e.esentasse).reduce((sum, e) => sum + e.importo, 0)
  const totaleSpese = spese.reduce((sum, s) => sum + s.importo, 0)
  
  // Forfettario: base imponibile 78%
  const baseTasse = imponibile * 0.78
  const tasse = baseTasse * 0.25 // 25% su 78%
  const contributi = imponibile * 0.2606 // 26.06% su 100%
  
  const netto = imponibile - tasse - contributi - totaleSpese + entrateEsentasse
  const risparmio25 = netto * 0.25
  const disponibile = netto - risparmio25

  // Dati per grafico: raggruppa per mese
  const datiMensili = entrate.reduce((acc: any[], e) => {
    const mese = new Date(e.data_incasso).toLocaleDateString('it-IT', { month: 'short' })
    const found = acc.find(a => a.mese === mese)
    if (found) {
      found.entrate += e.importo
    } else {
      acc.push({ mese, entrate: e.importo, uscite: 0 })
    }
    return acc
  }, [])

  spese.forEach(s => {
    const mese = new Date(s.data_spesa).toLocaleDateString('it-IT', { month: 'short' })
    const found = datiMensili.find(a => a.mese === mese)
    if (found) {
      found.uscite += s.importo
    } else {
      datiMensili.push({ mese, entrate: 0, uscite: s.importo })
    }
  })

  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Finanza</h2>
          <p className="text-slate-600 mt-1">Forfettario 78% - Esente IVA - Dati live da Supabase</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setModalEntrata(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-700"
          >
            <Plus className="w-4 h-4" /> Entrata
          </button>
          <button 
            onClick={() => setModalSpesa(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700"
          >
            <Plus className="w-4 h-4" /> Spesa
          </button>
        </div>
      </div>

      {/* Calcolatore Fiscale Live */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-slate-700" />
          <h3 className="text-lg font-bold text-slate-900">Calcolo Accantonamento Live</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-sm text-slate-600 mb-1">Imponibile Progetti</p>
            <p className="text-2xl font-bold text-slate-900">€{imponibile.toLocaleString('it-IT')}</p>
            <p className="text-xs text-slate-500">{entrate.filter(e => !e.esentasse).length} fatture</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">Entrate Esentasse</p>
            <p className="text-2xl font-bold text-green-600">€{entrateEsentasse.toLocaleString('it-IT')}</p>
            <p className="text-xs text-slate-500">{entrate.filter(e => e.esentasse).length} bonus</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">Totale Spese</p>
            <p className="text-2xl font-bold text-red-600">-€{totaleSpese.toLocaleString('it-IT')}</p>
            <p className="text-xs text-slate-500">{spese.length} movimenti</p>
          </div>
        </div>

        <div className="border-t border-slate-200 my-6"></div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-xs text-slate-600 mb-1">Base Tasse 78%</p>
            <p className="text-lg font-bold text-slate-900">€{baseTasse.toLocaleString('it-IT', {maximumFractionDigits:0})}</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-xs text-red-600 mb-1">Tasse 25%</p>
            <p className="text-lg font-bold text-red-700">-€{tasse.toLocaleString('it-IT', {maximumFractionDigits:0})}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-xs text-orange-600 mb-1">Contributi 26,06%</p>
            <p className="text-lg font-bold text-orange-700">-€{contributi.toLocaleString('it-IT', {maximumFractionDigits:0})}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-xs text-green-600 mb-1">Netto</p>
            <p className="text-lg font-bold text-green-700">€{netto.toLocaleString('it-IT', {maximumFractionDigits:0})}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600 mb-1">Risparmio 25% sul Netto</p>
            <p className="text-2xl font-bold text-blue-700">€{risparmio25.toLocaleString('it-IT', {maximumFractionDigits:0})}</p>
            <p className="text-xs text-blue-600 mt-1">Da accantonare</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-sm text-emerald-600 mb-1">Disponibile Spese</p>
            <p className="text-2xl font-bold text-emerald-700">€{disponibile.toLocaleString('it-IT', {maximumFractionDigits:0})}</p>
            <p className="text-xs text-emerald-600 mt-1">Dopo risparmio</p>
          </div>
        </div>
      </div>

      {/* Grafico */}
      {datiMensili.length > 0 && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Andamento Mensile</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={datiMensili}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="mese" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Bar dataKey="entrate" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="uscite" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Tabelle Dettaglio */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <ArrowUpCircle className="w-5 h-5 text-green-600" /> Entrate
          </h3>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {entrate.map(e => (
              <div key={e.id} className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <div>
                  <p className="text-sm font-medium">{e.descrizione}</p>
                  <p className="text-xs text-slate-500">{new Date(e.data_incasso).toLocaleDateString('it-IT')}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">€{e.importo.toLocaleString('it-IT')}</p>
                  {e.esentasse && <span className="text-xs bg-green-100 text-green-700 px-1 rounded">esentasse</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <ArrowDownCircle className="w-5 h-5 text-red-600" /> Spese
          </h3>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {spese.map(s => (
              <div key={s.id} className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <div>
                  <p className="text-sm font-medium">{s.descrizione}</p>
                  <p className="text-xs text-slate-500">{s.categoria} - {new Date(s.data_spesa).toLocaleDateString('it-IT')}</p>
                </div>
                <p className="font-bold text-red-600">-€{s.importo.toLocaleString('it-IT')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Entrata */}
      {modalEntrata && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Nuova Entrata</h3>
              <button onClick={() => setModalEntrata(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4">
              <input placeholder="Descrizione progetto" value={formEntrata.descrizione} onChange={(e) => setFormEntrata({...formEntrata, descrizione: e.target.value})} className="w-full px-3 py-2 border rounded" />
              <input type="number" placeholder="Importo €" value={formEntrata.importo} onChange={(e) => setFormEntrata({...formEntrata, importo: e.target.value})} className="w-full px-3 py-2 border rounded" />
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={formEntrata.esentasse} onChange={(e) => setFormEntrata({...formEntrata, esentasse: e.target.checked})} />
                <span className="text-sm">Esentasse - bonus</span>
              </label>
              <button onClick={aggiungiEntrata} className="w-full px-4 py-2 bg-green-600 text-white rounded-lg">Salva Entrata</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Spesa */}
      {modalSpesa && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Nuova Spesa</h3>
              <button onClick={() => setModalSpesa(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4">
              <input placeholder="Descrizione" value={formSpesa.descrizione} onChange={(e) => setFormSpesa({...formSpesa, descrizione: e.target.value})} className="w-full px-3 py-2 border rounded" />
              <input type="number" placeholder="Importo €" value={formSpesa.importo} onChange={(e) => setFormSpesa({...formSpesa, importo: e.target.value})} className="w-full px-3 py-2 border rounded" />
              <select value={formSpesa.categoria} onChange={(e) => setFormSpesa({...formSpesa, categoria: e.target.value})} className="w-full px-3 py-2 border rounded">
                <option value="software">Software</option>
                <option value="consulenze">Consulenze</option>
                <option value="ufficio">Ufficio</option>
                <option value="formazione">Formazione</option>
                <option value="altro">Altro</option>
              </select>
              <button onClick={aggiungiSpesa} className="w-full px-4 py-2 bg-red-600 text-white rounded-lg">Salva Spesa</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}