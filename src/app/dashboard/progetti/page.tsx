'use client'

import { useState, useEffect } from 'react'
import { Plus, X, Upload, CheckCircle, Clock, Euro } from 'lucide-react'
import { supabase } from '@/lib/supabase'

type Progetto = {
  id: string
  nome_cliente: string
  localita: string
  provincia: string
  cap: string
  email: string
  cellulare: string
  livello: 'checkup_147' | 'blindatura_297' | 'progetto_zero_890'
  importo: number
  stato: string
  pagamento_ricevuto: boolean
  richieste_cliente: string
}

const LIVELLI = {
  checkup_147: { nome: 'Check-up', prezzo: 147 },
  blindatura_297: { nome: 'Blindatura', prezzo: 297 },
  progetto_zero_890: { nome: 'Progetto da Zero', prezzo: 890 }
}

export default function Progetti() {
  const [progetti, setProgetti] = useState<Progetto[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({
    nome_cliente: '', localita: '', provincia: '', cap: '', indirizzo: '',
    cellulare: '', email: '', codice_fiscale: '', livello: 'checkup_147',
    richieste_cliente: '', pagamento_ricevuto: false
  })
  const [files, setFiles] = useState<{immagini: File[], documenti: File[]}>({ immagini: [], documenti: [] })

  useEffect(() => { caricaProgetti() }, [])

  const caricaProgetti = async () => {
    const { data } = await supabase.from('progetti').select('*').order('created_at', { ascending: false })
    if (data) setProgetti(data)
  }

  const uploadFiles = async (progettoId: string, files: File[], tipo: string) => {
    const paths = []
    for (const file of files) {
      const path = `${progettoId}/${tipo}/${Date.now()}_${file.name}`
      const { error } = await supabase.storage.from('progetti').upload(path, file)
      if (!error) paths.push(path)
    }
    return paths
  }

  const creaProgetto = async () => {
    const importo = LIVELLI[form.livello as keyof typeof LIVELLI].prezzo
    
    const { data: progetto, error } = await supabase.from('progetti').insert([{
     ...form,
      importo,
      stato: form.pagamento_ricevuto? 'pagato' : 'attesa_pagamento'
    }]).select().single()

    if (progetto &&!error) {
      // Upload file
      if (files.immagini.length) {
        const paths = await uploadFiles(progetto.id, files.immagini, 'immagini')
        await supabase.from('progetti').update({ immagini_paths: paths }).eq('id', progetto.id)
      }
      if (files.documenti.length) {
        const paths = await uploadFiles(progetto.id, files.documenti, 'documenti')
        await supabase.from('progetti').update({ documenti_cliente_paths: paths }).eq('id', progetto.id)
      }

      // Se pagato, crea entrata in Finanza
      if (form.pagamento_ricevuto) {
        await supabase.from('entrate').insert([{
          descrizione: `${LIVELLI[form.livello as keyof typeof LIVELLI].nome} - ${form.nome_cliente}`,
          importo,
          esentasse: false,
          progetto_id: progetto.id
        }])
      }

      setModalOpen(false)
      setForm({ nome_cliente: '', localita: '', provincia: '', cap: '', indirizzo: '', cellulare: '', email: '', codice_fiscale: '', livello: 'checkup_147', richieste_cliente: '', pagamento_ricevuto: false })
      setFiles({ immagini: [], documenti: [] })
      caricaProgetti()
    }
  }

  const confermaPagamento = async (id: string, importo: number, nome: string, livello: string) => {
    await supabase.from('progetti').update({ 
      pagamento_ricevuto: true, 
      stato: 'pagato',
      data_pagamento: new Date().toISOString()
    }).eq('id', id)
    
    // Crea entrata
    await supabase.from('entrate').insert([{
      descrizione: `${LIVELLI[livello as keyof typeof LIVELLI].nome} - ${nome}`,
      importo,
      esentasse: false,
      progetto_id: id
    }])
    
    caricaProgetti()
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Progetti</h2>
          <p className="text-slate-600 mt-1">Consulenza errori - Check-up, Blindatura, Progetto da Zero</p>
        </div>
        <button onClick={() => setModalOpen(true)} className="px-4 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-800">
          <Plus className="w-4 h-4" /> Nuovo Progetto
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-slate-600 text-sm mb-1">Totale Progetti</p>
          <p className="text-3xl font-bold text-slate-900">{progetti.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-slate-600 text-sm mb-1">In Attesa Pagamento</p>
          <p className="text-3xl font-bold text-orange-600">{progetti.filter(p =>!p.pagamento_ricevuto).length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-slate-600 text-sm mb-1">In Lavorazione</p>
          <p className="text-3xl font-bold text-blue-600">{progetti.filter(p => p.stato === 'in_lavorazione').length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-slate-600 text-sm mb-1">Incassato</p>
          <p className="text-3xl font-bold text-green-600">€{progetti.filter(p => p.pagamento_ricevuto).reduce((s,p) => s+p.importo, 0).toLocaleString('it-IT')}</p>
        </div>
      </div>

      {/* Tabella Progetti */}
      <div className="bg-white rounded-xl border border-slate-200">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">CLIENTE</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">LIVELLO</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">IMPORTO</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">STATO</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">PAGAMENTO</th>
            </tr>
          </thead>
          <tbody>
            {progetti.map((p) => (
              <tr key={p.id} className="border-t border-slate-200">
                <td className="p-4">
                  <p className="font-medium text-slate-900">{p.nome_cliente}</p>
                  <p className="text-sm text-slate-600">{p.localita} {p.provincia}</p>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                    {LIVELLI[p.livello].nome}
                  </span>
                </td>
                <td className="p-4 font-bold text-slate-900">€{p.importo}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    p.stato === 'completato'? 'bg-green-100 text-green-700' :
                    p.stato === 'in_lavorazione'? 'bg-blue-100 text-blue-700' :
                    p.stato === 'pagato'? 'bg-purple-100 text-purple-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {p.stato.replace('_', ' ')}
                  </span>
                </td>
                <td className="p-4">
                  {p.pagamento_ricevuto? (
                    <span className="flex items-center gap-1 text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4" /> Ricevuto
                    </span>
                  ) : (
                    <button 
                      onClick={() => confermaPagamento(p.id, p.importo, p.nome_cliente, p.livello)}
                      className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                    >
                      Conferma
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Nuovo Progetto */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h- overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Nuovo Progetto</h3>
              <button onClick={() => setModalOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Nome Cliente *" value={form.nome_cliente} onChange={(e) => setForm({...form, nome_cliente: e.target.value})} className="px-3 py-2 border rounded" />
                <input placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="px-3 py-2 border rounded" />
                <input placeholder="Località" value={form.localita} onChange={(e) => setForm({...form, localita: e.target.value})} className="px-3 py-2 border rounded" />
                <input placeholder="Provincia" value={form.provincia} onChange={(e) => setForm({...form, provincia: e.target.value})} className="px-3 py-2 border rounded" />
                <input placeholder="CAP" value={form.cap} onChange={(e) => setForm({...form, cap: e.target.value})} className="px-3 py-2 border rounded" />
                <input placeholder="Cellulare" value={form.cellulare} onChange={(e) => setForm({...form, cellulare: e.target.value})} className="px-3 py-2 border rounded" />
              </div>
              
              <input placeholder="Indirizzo" value={form.indirizzo} onChange={(e) => setForm({...form, indirizzo: e.target.value})} className="w-full px-3 py-2 border rounded" />
              <input placeholder="Codice Fiscale" value={form.codice_fiscale} onChange={(e) => setForm({...form, codice_fiscale: e.target.value})} className="w-full px-3 py-2 border rounded" />
              
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Livello Progetto</label>
                <select value={form.livello} onChange={(e) => setForm({...form, livello: e.target.value})} className="w-full px-3 py-2 border rounded">
                  <option value="checkup_147">Check-up 147€ - Analisi progetto</option>
                  <option value="blindatura_297">Blindatura 297€ - Progetto + Contratto</option>
                  <option value="progetto_zero_890">Progetto da Zero 890€ - Completo</option>
                </select>
                <p className="text-sm text-slate-600 mt-1">Importo: €{LIVELLI[form.livello as keyof typeof LIVELLI].prezzo}</p>
              </div>

              <textarea 
                placeholder="Richieste del cliente per lo sviluppo" 
                value={form.richieste_cliente} 
                onChange={(e) => setForm({...form, richieste_cliente: e.target.value})} 
                className="w-full px-3 py-2 border rounded" 
                rows={3}
              />

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Immagini progetto</label>
                <input type="file" multiple accept="image/*" onChange={(e) => setFiles({...files, immagini: Array.from(e.target.files || [])})} className="w-full" />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Documentazione cliente</label>
                <input type="file" multiple onChange={(e) => setFiles({...files, documenti: Array.from(e.target.files || [])})} className="w-full" />
              </div>

              <label className="flex items-center gap-2 p-3 bg-green-50 rounded">
                <input type="checkbox" checked={form.pagamento_ricevuto} onChange={(e) => setForm({...form, pagamento_ricevuto: e.target.checked})} />
                <span className="text-sm font-medium text-green-700">Pagamento già ricevuto - Avvia subito</span>
              </label>

              <button onClick={creaProgetto} className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg font-medium">
                Crea Progetto
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}