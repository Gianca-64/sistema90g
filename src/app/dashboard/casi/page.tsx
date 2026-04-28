 'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

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
  count_messaggi?: number
}

type MessaggioInterno = {
  id: number
  caso_id: number
  messaggio: string
  tipo: string
  autore: string
  created_at: string
}

type MessaggioFB = {
  id: number
  caso_id: number
  autore_nome: string
  autore_ruolo: 'autore_post' | 'membro' | 'te'
  messaggio: string
  created_at: string
}

export default function CasiPage() {
  const [casi, setCasi] = useState<Caso[]>([])
  const [casiFiltrati, setCasiFiltrati] = useState<Caso[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filtroStato, setFiltroStato] = useState<string>('tutti')
  const [modalOpen, setModalOpen] = useState(false)
  const [detailModal, setDetailModal] = useState<Caso | null>(null)
  const [uploading, setUploading] = useState(false)
  const [generatingAI, setGeneratingAI] = useState(false)

  // Chat interna team
  const [messaggiInterni, setMessaggiInterni] = useState<MessaggioInterno[]>([])
  const [nuovoMessaggioInterno, setNuovoMessaggioInterno] = useState('')

  // Conversazione FB
  const [conversazioneFB, setConversazioneFB] = useState<MessaggioFB[]>([])
  const [nuovoMsgFB, setNuovoMsgFB] = useState('')
  const [autoreFB, setAutoreFB] = useState('')
  const [ruoloFB, setRuoloFB] = useState<'autore_post' | 'membro' | 'te'>('membro')
  const [rispondiCome, setRispondiCome] = useState<'autore_post' | 'te'>('te')

  const [formData, setFormData] = useState({
    nome_cliente: '',
    telefono: '',
    gruppo_facebook: '',
    testo_richiesta: ''
  })
  const [files, setFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  useEffect(() => {
    caricaCasi()
  }, [])

  useEffect(() => {
    if (detailModal) {
      caricaMessaggiInterni(detailModal.id)
      caricaConversazioneFB(detailModal.id)
    }
  }, [detailModal])

  useEffect(() => {
    filtraCasi()
  }, [searchTerm, filtroStato, casi])

  const filtraCasi = () => {
    let risultati = casi

    // Filtro per stato
    if (filtroStato!== 'tutti') {
      risultati = risultati.filter(c => c.stato === filtroStato)
    }

    // Filtro per ricerca testo
    if (searchTerm!== '') {
      const term = searchTerm.toLowerCase()
      risultati = risultati.filter(caso =>
        caso.nome_cliente?.toLowerCase().includes(term) ||
        caso.telefono?.toLowerCase().includes(term) ||
        caso.gruppo_facebook?.toLowerCase().includes(term) ||
        caso.numero_pratica?.toLowerCase().includes(term) ||
        caso.testo_richiesta?.toLowerCase().includes(term)
      )
    }

    setCasiFiltrati(risultati)
  }

  const caricaCasi = async () => {
    if (!supabase) return

    // Carica casi + conteggio messaggi FB
    const { data: casiData } = await supabase
     .from('casi')
     .select('*')
     .order('created_at', { ascending: false })

    if (casiData) {
      // Per ogni caso conta i messaggi nel thread
      const casiConCount = await Promise.all(
        casiData.map(async (caso) => {
          const { count } = await supabase
           .from('caso_conversazione')
           .select('*', { count: 'exact', head: true })
           .eq('caso_id', caso.id)

          return {...caso, count_messaggi: count || 0 }
        })
      )

      setCasi(casiConCount)
      setCasiFiltrati(casiConCount)
    }
  }

  const caricaMessaggiInterni = async (casoId: number) => {
    const { data } = await supabase.from('caso_messaggi').select('*').eq('caso_id', casoId).order('created_at', { ascending: true })
    if (data) setMessaggiInterni(data)
  }

  const caricaConversazioneFB = async (casoId: number) => {
    const { data } = await supabase.from('caso_conversazione').select('*').eq('caso_id', casoId).order('created_at', { ascending: true })
    if (data) setConversazioneFB(data)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    setFiles(selectedFiles)
    const urls = selectedFiles.map(file => URL.createObjectURL(file))
    setPreviewUrls(urls)
  }

  const handleUpload = async () => {
    if (!formData.nome_cliente ||!supabase) return
    setUploading(true)

    const imageUrls: string[] = []
    for (const file of files) {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`
      const { data, error } = await supabase.storage.from('casi-immagini').upload(fileName, file)
      if (error) {
        alert('Errore upload: ' + error.message)
        setUploading(false)
        return
      }
      const { data: { publicUrl } } = supabase.storage.from('casi-immagini').getPublicUrl(data.path)
      imageUrls.push(publicUrl)
    }

    const numeroPratica = `L${String(Date.now()).slice(-6)}`

    const { data: nuovoCaso, error: insertError } = await supabase.from('casi').insert({
      numero_pratica: numeroPratica,
      nome_cliente: formData.nome_cliente,
      telefono: formData.telefono,
      gruppo_facebook: formData.gruppo_facebook,
      testo_richiesta: formData.testo_richiesta,
      stato: 'nuovo',
      immagini: imageUrls
    }).select().single()

    if (insertError) {
      alert('Errore: ' + insertError.message)
      setUploading(false)
      return
    }

    if (formData.testo_richiesta && nuovoCaso) {
      await supabase.from('caso_conversazione').insert({
        caso_id: nuovoCaso.id,
        autore_nome: formData.nome_cliente,
        autore_ruolo: 'autore_post',
        messaggio: formData.testo_richiesta
      })
    }

    setModalOpen(false)
    setFormData({ nome_cliente: '', telefono: '', gruppo_facebook: '', testo_richiesta: '' })
    setFiles([])
    setPreviewUrls([])
    caricaCasi()
    setUploading(false)
  }

  const aggiungiMessaggioFB = async () => {
    if (!nuovoMsgFB ||!autoreFB ||!detailModal) return
    await supabase.from('caso_conversazione').insert({
      caso_id: detailModal.id,
      autore_nome: autoreFB,
      autore_ruolo: ruoloFB,
      messaggio: nuovoMsgFB
    })
    setNuovoMsgFB('')
    setAutoreFB('')
    await caricaConversazioneFB(detailModal.id)
    await caricaCasi() // aggiorna il contatore
  }

  const generaRispostaAI = async () => {
    if (!detailModal) return
    setGeneratingAI(true)

    try {
      const res = await fetch('/api/genera-risposta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cliente: detailModal.nome_cliente,
          gruppo: detailModal.gruppo_facebook,
          immagini: detailModal.immagini,
          conversazione: conversazioneFB.map(m => `${m.autore_nome} (${m.autore_ruolo}): ${m.messaggio}`).join('\n'),
          rispondi_come: rispondiCome
        })
      })

      const data = await res.json()

      if (data.risposta) {
        await supabase.from('caso_messaggi').insert({
          caso_id: detailModal.id,
          messaggio: data.risposta,
          tipo: 'ai_generata',
          autore: `AI Sistema90G (${rispondiCome === 'autore_post'? 'come Cliente' : 'come Te'})`
        })
        caricaMessaggiInterni(detailModal.id)
      } else {
        alert('Errore AI: ' + data.error)
      }
    } catch (err) {
      alert('Errore connessione AI')
      console.error(err)
    }

    setGeneratingAI(false)
  }

  const inviaMessaggioInterno = async () => {
    if (!nuovoMessaggioInterno ||!detailModal) return
    await supabase.from('caso_messaggi').insert({
      caso_id: detailModal.id,
      messaggio: nuovoMessaggioInterno,
      tipo: 'nota',
      autore: 'Admin'
    })
    setNuovoMessaggioInterno('')
    caricaMessaggiInterni(detailModal.id)
  }

  const copiaTesto = (testo: string) => {
    navigator.clipboard.writeText(testo)
    alert('Copiato! Incolla su Facebook')
  }

  const aggiornaStato = async (casoId: number, nuovoStato: string) => {
    await supabase.from('casi').update({ stato: nuovoStato }).eq('id', casoId)
    if (detailModal && detailModal.id === casoId) {
      setDetailModal({...detailModal, stato: nuovoStato})
    }
    caricaCasi()
  }

  const contaPerStato = (stato: string) => {
    return casi.filter(c => c.stato === stato).length
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Casi / Lead</h1>
        <button onClick={() => setModalOpen(true)} className="px-4 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800">
          + Nuovo Caso
        </button>
      </div>

      {/* FILTRI STATO */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFiltroStato('tutti')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filtroStato === 'tutti'
             ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Tutti ({casi.length})
        </button>
        <button
          onClick={() => setFiltroStato('nuovo')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filtroStato === 'nuovo'
             ? 'bg-blue-600 text-white'
              : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
          }`}
        >
          Nuovo ({contaPerStato('nuovo')})
        </button>
        <button
          onClick={() => setFiltroStato('in_lavorazione')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filtroStato === 'in_lavorazione'
             ? 'bg-yellow-600 text-white'
              : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
          }`}
        >
          In lavorazione ({contaPerStato('in_lavorazione')})
        </button>
        <button
          onClick={() => setFiltroStato('pubblicata')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filtroStato === 'pubblicata'
             ? 'bg-green-600 text-white'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
        >
          Pubblicata ({contaPerStato('pubblicata')})
        </button>
        <button
          onClick={() => setFiltroStato('chiuso')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filtroStato === 'chiuso'
             ? 'bg-slate-600 text-white'
              : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
          }`}
        >
          Chiuso ({contaPerStato('chiuso')})
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Cerca per nome, telefono, gruppo Facebook, testo o numero pratica..."
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
        {(searchTerm || filtroStato!== 'tutti') && (
          <p className="text-sm text-slate-600 mt-2">
            Mostrati {casiFiltrati.length} di {casi.length} casi
          </p>
        )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Pratica</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Cliente</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Telefono</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Gruppo FB</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Msg</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Stato</th>
            </tr>
          </thead>
          <tbody>
            {casiFiltrati.map(caso => (
              <tr key={caso.id} onClick={() => setDetailModal(caso)} className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer">
                <td className="p-4 text-sm font-medium">{caso.numero_pratica}</td>
                <td className="p-4 text-sm">{caso.nome_cliente}</td>
                <td className="p-4 text-sm">{caso.telefono}</td>
                <td className="p-4 text-sm text-blue-600">{caso.gruppo_facebook}</td>
                <td className="p-4 text-sm">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    {caso.count_messaggi || 0}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    caso.stato === 'nuovo'? 'bg-blue-100 text-blue-800' :
                    caso.stato === 'in_lavorazione'? 'bg-yellow-100 text-yellow-800' :
                    caso.stato === 'pubblicata'? 'bg-green-100 text-green-800' :
                    'bg-slate-100 text-slate-800'
                  }`}>
                    {caso.stato}
                  </span>
                </td>
              </tr>
            ))}
            {casiFiltrati.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-400 text-sm">
                  {searchTerm || filtroStato!== 'tutti'? 'Nessun risultato trovato.' : 'Nessun caso. Clicca "Nuovo Caso" per iniziare.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl my-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Nuovo Lead da Facebook</h2>
              <button onClick={() => setModalOpen(false)} className="text-2xl">×</button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Nome Cliente</label>
                  <input type="text" value={formData.nome_cliente} onChange={e => setFormData({...formData, nome_cliente: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Telefono</label>
                  <input type="text" value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg" placeholder="333 1234567" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Gruppo Facebook</label>
                <input type="text" value={formData.gruppo_facebook} onChange={e => setFormData({...formData, gruppo_facebook: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg" placeholder="Cucine Moderne Italia" />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Testo Richiesta Iniziale</label>
                <textarea value={formData.testo_richiesta} onChange={e => setFormData({...formData, testo_richiesta: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg" rows={4} placeholder="Copia qui il primo post del cliente..." />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Immagini dal Post</label>
                <label className="w-full mt-1 px-3 py-8 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-slate-400">
                  {files.length > 0? (
                    <div className="grid grid-cols-4 gap-2 w-full">
                      {previewUrls.map((url, i) => (
                        <div key={i} className="relative">
                          <img src={url} className="w-full h-20 object-cover rounded" />
                          <button onClick={(e) => { e.preventDefault(); setFiles(files.filter((_, idx) => idx!== i)); setPreviewUrls(previewUrls.filter((_, idx) => idx!== i)) }} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs">×</button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-sm text-slate-600">Carica immagini - multiple</span>
                  )}
                  <input type="file" accept="image/*" multiple onChange={handleFileChange} className="hidden" />
                </label>
              </div>

              <button onClick={handleUpload} disabled={uploading ||!formData.nome_cliente} className="w-full py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed">
                {uploading? 'Salvataggio...' : 'Salva Lead'}
              </button>
            </div>
          </div>
        </div>
      )}

      {detailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto" onClick={() => setDetailModal(null)}>
          <div className="bg-white rounded-xl p-6 w-full max-w-6xl my-8 max-h- overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{detailModal.nome_cliente}</h2>
                <p className="text-sm text-slate-500 mt-1">Pratica: {detailModal.numero_pratica}</p>
              </div>
              <button onClick={() => setDetailModal(null)} className="text-2xl">×</button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* COLONNA 1: DATI + CONVERSAZIONE FB */}
              <div className="col-span-2 space-y-6">
                <div className="grid grid-cols-3 gap-4 text-sm items-center">
                  <div><span className="font-medium">Telefono:</span> {detailModal.telefono || 'N/A'}</div>
                  <div><span className="font-medium">Gruppo:</span> <span className="text-blue-600">{detailModal.gruppo_facebook}</span></div>
                  <div>
                    <span className="font-medium mr-2">Stato:</span>
                    <select
                      value={detailModal.stato}
                      onChange={(e) => aggiornaStato(detailModal.id, e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className={`px-3 py-1 text-xs rounded-full border-0 cursor-pointer font-medium focus:ring-2 focus:ring-slate-900 ${
                        detailModal.stato === 'nuovo'? 'bg-blue-100 text-blue-800' :
                        detailModal.stato === 'in_lavorazione'? 'bg-yellow-100 text-yellow-800' :
                        detailModal.stato === 'pubblicata'? 'bg-green-100 text-green-800' :
                        'bg-slate-100 text-slate-800'
                      }`}
                    >
                      <option value="nuovo">Nuovo</option>
                      <option value="in_lavorazione">In lavorazione</option>
                      <option value="pubblicata">Pubblicata</option>
                      <option value="chiuso">Chiuso</option>
                    </select>
                  </div>
                </div>

                {detailModal.immagini && detailModal.immagini.length > 0 && (
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-2">Immagini Progetto ({detailModal.immagini.length})</div>
                    <div className="grid grid-cols-4 gap-3">
                      {detailModal.immagini.map((url, i) => (
                        <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                          <img src={url} className="w-full h-24 object-cover rounded-lg hover:opacity-80" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* THREAD CONVERSAZIONE FACEBOOK */}
                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="text-sm font-medium text-slate-700 mb-3">Thread Conversazione Facebook ({conversazioneFB.length})</div>
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {conversazioneFB.map(msg => (
                      <div key={msg.id} className={`p-3 rounded-lg text-sm ${msg.autore_ruolo === 'autore_post'? 'bg-blue-50 border-l-4 border-blue-500' : msg.autore_ruolo === 'te'? 'bg-green-50 border-l-4 border-green-500' : 'bg-slate-50'}`}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{msg.autore_nome}</span>
                          <span className="text-xs text-slate-500">{msg.autore_ruolo === 'autore_post'? 'Autore' : msg.autore_ruolo === 'te'? 'Tu' : 'Membro'}</span>
                        </div>
                        <p className="text-slate-700 whitespace-pre-wrap">{msg.messaggio}</p>
                      </div>
                    ))}
                    {conversazioneFB.length === 0 && <p className="text-sm text-slate-400">Nessun messaggio. Aggiungi la conversazione dal gruppo.</p>}
                  </div>

                  <div className="space-y-2 border-t pt-3">
                    <div className="grid grid-cols-3 gap-2">
                      <input type="text" value={autoreFB} onChange={e => setAutoreFB(e.target.value)} placeholder="Nome autore" className="px-2 py-1.5 border border-slate-300 rounded text-sm" />
                      <select value={ruoloFB} onChange={e => setRuoloFB(e.target.value as any)} className="px-2 py-1.5 border border-slate-300 rounded text-sm">
                        <option value="membro">Membro</option>
                        <option value="autore_post">Autore Post</option>
                        <option value="te">Tu</option>
                      </select>
                      <button onClick={aggiungiMessaggioFB} className="px-3 py-1.5 bg-slate-200 text-slate-700 rounded text-sm hover:bg-slate-300">
                        + Aggiungi
                      </button>
                    </div>
                    <textarea value={nuovoMsgFB} onChange={e => setNuovoMsgFB(e.target.value)} placeholder="Incolla messaggio dal gruppo..." className="w-full px-3 py-2 border border-slate-300 rounded text-sm" rows={2} />
                  </div>
                </div>

                {/* GENERAZIONE AI */}
                <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-purple-900">Rispondi con AI</span>
                    <select value={rispondiCome} onChange={e => setRispondiCome(e.target.value as any)} className="px-2 py-1 border border-purple-300 rounded text-sm bg-white">
                      <option value="te">Come Te / Sistema90G</option>
                      <option value="autore_post">Come Autore del Post</option>
                    </select>
                  </div>
                  <button onClick={generaRispostaAI} disabled={generatingAI} className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 disabled:opacity-50 font-medium">
                    {generatingAI? 'AI sta analizzando la conversazione...' : '✨ Genera risposta AI contestuale'}
                  </button>
                  <p className="text-xs text-purple-700 mt-2">L'AI leggerà tutta la conversazione, le immagini e il tono del gruppo prima di rispondere.</p>
                </div>
              </div>

              {/* COLONNA 2: CHAT INTERNA TEAM */}
              <div className="border-l border-slate-200 pl-6">
                <div className="text-sm font-medium text-slate-700 mb-3">Note Team & AI</div>
                <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                  {messaggiInterni.map(msg => (
                    <div key={msg.id} className={`p-3 rounded-lg text-sm ${msg.tipo === 'ai_generata'? 'bg-purple-50 border border-purple-200' : 'bg-slate-50'}`}>
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-slate-700">{msg.autore}</span>
                        {msg.tipo === 'ai_generata' && (
                          <button onClick={() => copiaTesto(msg.messaggio)} className="text-xs text-purple-600 hover:underline">Copia</button>
                        )}
                      </div>
                      <p className="text-slate-600 whitespace-pre-wrap">{msg.messaggio}</p>
                    </div>
                  ))}
                  {messaggiInterni.length === 0 && <p className="text-sm text-slate-400">Nessuna nota. Genera AI o scrivi.</p>}
                </div>
                <div className="flex gap-2">
                  <input type="text" value={nuovoMessaggioInterno} onChange={e => setNuovoMessaggioInterno(e.target.value)} onKeyDown={e => e.key === 'Enter' && inviaMessaggioInterno()} placeholder="Nota interna..." className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                  <button onClick={inviaMessaggioInterno} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm">Invia</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}