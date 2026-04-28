 'use client'

import { useState, useEffect } from 'react'
import { Plus, X, Link as LinkIcon, MapPin, MessageSquare, Sparkles, Copy, Send } from 'lucide-react'
import { supabase } from '@/lib/supabase'

type Collaboratore = {
  id: number
  nome: string
  cognome: string
  ruolo: string
  telefono: string
  email: string
  citta: string
  tipo_collaborazione: string
  note_profilo: string
  link_linkedin: string
  created_at: string
}

type MessaggioChat = {
  id: number
  collaborazione_id: number
  messaggio: string
  tipo: string
  autore: string
  created_at: string
}

export default function CollaborazioniPage() {
  const [collaboratori, setCollaboratori] = useState<Collaboratore[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [detailModal, setDetailModal] = useState<Collaboratore | null>(null)
  const [generatingAI, setGeneratingAI] = useState(false)
  const [chatMessages, setChatMessages] = useState<MessaggioChat[]>([])
  const [nuovoMessaggio, setNuovoMessaggio] = useState('')
  const [tipoMessaggioAI, setTipoMessaggioAI] = useState<'primo_contatto' | 'proposta_partnership' | 'follow_up' | 'risposta_chat'>('primo_contatto')

  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    ruolo: '',
    telefono: '',
    email: '',
    citta: '',
    tipo_collaborazione: '',
    note_profilo: '',
    link_linkedin: ''
  })

  useEffect(() => {
    caricaCollaboratori()
  }, [])

  useEffect(() => {
    if (detailModal) {
      caricaChat(detailModal.id)
    }
  }, [detailModal])

  const caricaCollaboratori = async () => {
    const { data } = await supabase
 .from('collaborazioni')
 .select('*')
 .order('created_at', { ascending: false })

    if (data) setCollaboratori(data)
  }

  const caricaChat = async (collaborazioneId: number) => {
    const { data } = await supabase
 .from('collaborazioni_messaggi')
 .select('*')
 .eq('collaborazione_id', collaborazioneId)
 .order('created_at', { ascending: true })

    if (data) setChatMessages(data)
  }

  const handleSubmit = async () => {
    if (!formData.nome ||!formData.cognome) return

    const { error } = await supabase.from('collaborazioni').insert({
      nome: formData.nome,
      cognome: formData.cognome,
      ruolo: formData.ruolo,
      telefono: formData.telefono,
      email: formData.email,
      citta: formData.citta,
      tipo_collaborazione: formData.tipo_collaborazione,
      note_profilo: formData.note_profilo,
      link_linkedin: formData.link_linkedin
    })

    if (error) {
      alert('Errore: ' + error.message)
    } else {
      setModalOpen(false)
      setFormData({ nome: '', cognome: '', ruolo: '', telefono: '', email: '', citta: '', tipo_collaborazione: '', note_profilo: '', link_linkedin: '' })
      caricaCollaboratori()
    }
  }

  const generaMessaggioAI = async () => {
    if (!detailModal) return
    setGeneratingAI(true)

    try {
      const res = await fetch('/api/genera-messaggio-collaboratore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: detailModal.nome,
          cognome: detailModal.cognome,
          ruolo: detailModal.ruolo,
          tipo_collaborazione: detailModal.tipo_collaborazione,
          note_profilo: detailModal.note_profilo,
          tipo_messaggio: tipoMessaggioAI,
          chat_history: chatMessages.map(m => `${m.autore}: ${m.messaggio}`).join('\n')
        })
      })

      const data = await res.json()
      if (data.messaggio) {
        await supabase.from('collaborazioni_messaggi').insert({
          collaborazione_id: detailModal.id,
          messaggio: data.messaggio,
          tipo: 'ai_generata',
          autore: `AI Sistema90G`
        })
        caricaChat(detailModal.id)
      } else {
        alert('Errore AI: ' + data.error)
      }
    } catch (err) {
      alert('Errore connessione AI')
    }

    setGeneratingAI(false)
  }

  const inviaMessaggio = async () => {
    if (!nuovoMessaggio ||!detailModal) return

    await supabase.from('collaborazioni_messaggi').insert({
      collaborazione_id: detailModal.id,
      messaggio: nuovoMessaggio,
      tipo: 'nota',
      autore: 'Admin'
    })

    setNuovoMessaggio('')
    caricaChat(detailModal.id)
  }

  const copiaTesto = (testo: string) => {
    navigator.clipboard.writeText(testo)
    alert('Copiato!')
  }

  const getBadgeColor = (tipo: string) => {
    switch(tipo) {
      case 'architetto': return 'bg-purple-100 text-purple-800'
      case 'geometra': return 'bg-blue-100 text-blue-800'
      case 'impresa': return 'bg-orange-100 text-orange-800'
      case 'agenzia_immobiliare': return 'bg-green-100 text-green-800'
      case 'admin_gruppo': return 'bg-pink-100 text-pink-800'
      case 'showroom': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-slate-100 text-slate-800'
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Collaborazioni</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2.5 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-800"
        >
          <Plus className="w-4 h-4" />
          Nuovo Collaboratore
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {collaboratori.map(c => (
          <div key={c.id} onClick={() => setDetailModal(c)} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg cursor-pointer transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{c.nome} {c.cognome}</h3>
                <p className="text-sm text-slate-600">{c.ruolo}</p>
              </div>
              {c.tipo_collaborazione && (
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${getBadgeColor(c.tipo_collaborazione)}`}>
                  {c.tipo_collaborazione}
                </span>
              )}
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <MessageSquare className="w-4 h-4" />
                {c.telefono}
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <LinkIcon className="w-4 h-4" />
                {c.email}
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4" />
                {c.citta}
              </div>
            </div>
          </div>
        ))}
        {collaboratori.length === 0 && (
          <div className="col-span-3 p-8 text-center text-slate-400 text-sm bg-white rounded-xl border border-slate-200">
            Nessun collaboratore. Clicca "Nuovo Collaboratore" per iniziare.
          </div>
        )}
      </div>

      {/* MODAL NUOVO */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl my-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Nuovo Collaboratore</h2>
              <button onClick={() => setModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Nome</label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={e => setFormData({...formData, nome: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Cognome</label>
                  <input
                    type="text"
                    value={formData.cognome}
                    onChange={e => setFormData({...formData, cognome: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Ruolo / Professione</label>
                  <input
                    type="text"
                    value={formData.ruolo}
                    onChange={e => setFormData({...formData, ruolo: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg"
                    placeholder="Architetto, Geometra..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Tipo Collaborazione</label>
                  <select
                    value={formData.tipo_collaborazione}
                    onChange={e => setFormData({...formData, tipo_collaborazione: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="">Seleziona...</option>
                    <option value="architetto">Architetto</option>
                    <option value="geometra">Geometra</option>
                    <option value="impresa">Impresa Costruzioni</option>
                    <option value="agenzia_immobiliare">Agenzia Immobiliare</option>
                    <option value="admin_gruppo">Admin Gruppo FB</option>
                    <option value="showroom">Showroom Partner</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Telefono</label>
                  <input
                    type="text"
                    value={formData.telefono}
                    onChange={e => setFormData({...formData, telefono: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Città</label>
                <input
                  type="text"
                  value={formData.citta}
                  onChange={e => setFormData({...formData, citta: e.target.value})}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Link LinkedIn</label>
                <input
                  type="text"
                  value={formData.link_linkedin}
                  onChange={e => setFormData({...formData, link_linkedin: e.target.value})}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Note Profilo / Bio LinkedIn</label>
                <textarea
                  value={formData.note_profilo}
                  onChange={e => setFormData({...formData, note_profilo: e.target.value})}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg"
                  rows={4}
                  placeholder={`Esempio architetto:\nStudio Rossi Architetti, Milano\nSpecializzato ristrutturazioni lusso, ville Lago di Como\nPubblica su AD Italia, 15 anni esperienza\n\nEsempio impresa:\nImpresa Edile Colombo, Brescia\nCantieri residenziali, 20 dipendenti\nForniture complete chiavi in mano`}
                />
                <p className="text-xs text-slate-500 mt-1">
                  Incolla 2-3 info chiave dal profilo LinkedIn. Più dettagli = messaggio AI più personalizzato.
                </p>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!formData.nome ||!formData.cognome}
                className="w-full py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 disabled:bg-slate-300"
              >
                Salva Collaboratore
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DETTAGLIO + CHAT AI */}
      {detailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto" onClick={() => setDetailModal(null)}>
          <div className="bg-white rounded-xl p-6 w-full max-w-4xl my-8 max-h- flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{detailModal.nome} {detailModal.cognome}</h2>
                <div className="flex gap-2 mt-2">
                  <span className="text-sm text-slate-600">{detailModal.ruolo}</span>
                  {detailModal.tipo_collaborazione && (
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${getBadgeColor(detailModal.tipo_collaborazione)}`}>
                      {detailModal.tipo_collaborazione}
                    </span>
                  )}
                </div>
              </div>
              <button onClick={() => setDetailModal(null)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div><span className="font-medium">Telefono:</span> {detailModal.telefono}</div>
              <div><span className="font-medium">Email:</span> {detailModal.email}</div>
              <div><span className="font-medium">Città:</span> {detailModal.citta}</div>
              <div>
                <span className="font-medium">LinkedIn:</span>
                {detailModal.link_linkedin? (
                  <a href={detailModal.link_linkedin} target="_blank" className="text-blue-600 hover:underline ml-1">Apri</a>
                ) : 'N/A'}
              </div>
            </div>

            {detailModal.note_profilo && (
              <div className="mb-6 p-3 bg-slate-50 rounded-lg text-sm">
                <div className="font-medium mb-1">Note Profilo:</div>
                <p className="text-slate-700 whitespace-pre-wrap">{detailModal.note_profilo}</p>
              </div>
            )}

            {/* CHAT CON AI */}
            <div className="flex-1 flex flex-col border border-slate-200 rounded-lg overflow-hidden">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Chat Collaborazione</span>
                <div className="flex gap-2">
                  <select
                    value={tipoMessaggioAI}
                    onChange={e => setTipoMessaggioAI(e.target.value as any)}
                    className="px-2 py-1 border border-slate-300 rounded text-xs bg-white"
                  >
                    <option value="primo_contatto">Primo contatto</option>
                    <option value="proposta_partnership">Proposta partnership</option>
                    <option value="follow_up">Follow-up</option>
                    <option value="risposta_chat">Rispondi alla chat</option>
                  </select>
                  <button
                    onClick={generaMessaggioAI}
                    disabled={generatingAI}
                    className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-xs hover:opacity-90 disabled:opacity-50 flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" />
                    {generatingAI? 'Generando...' : 'AI'}
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
                {chatMessages.map(msg => (
                  <div key={msg.id} className={`p-3 rounded-lg text-sm ${msg.tipo === 'ai_generata'? 'bg-purple-50 border border-purple-200' : 'bg-slate-50'}`}>
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-700">{msg.autore}</span>
                      <button onClick={() => copiaTesto(msg.messaggio)} className="text-xs text-slate-500 hover:text-slate-700">
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-slate-600 whitespace-pre-wrap">{msg.messaggio}</p>
                  </div>
                ))}
                {chatMessages.length === 0 && (
                  <p className="text-sm text-slate-400 text-center py-8">Nessun messaggio. Genera il primo contatto con AI.</p>
                )}
              </div>

              <div className="p-3 border-t border-slate-200 bg-slate-50 flex gap-2">
                <input
                  type="text"
                  value={nuovoMessaggio}
                  onChange={e => setNuovoMessaggio(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && inviaMessaggio()}
                  placeholder="Scrivi nota o messaggio..."
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
                <button
                  onClick={inviaMessaggio}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}