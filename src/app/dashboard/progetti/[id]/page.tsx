 'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, MessageSquare, Upload, Trash2 } from 'lucide-react' // NUOVO: MessageSquare
import { supabase } from '@/lib/supabase'

type Progetto = {
  id: string
  nome_cliente: string
  email: string | null
  cellulare: string | null
  richieste_cliente: string | null
  stato: string
  livello: string
  importo: number
  origine_tipo: string | null
  origine_id: string | null
  created_at: string
}

// NUOVO: Type per caso collegato
type CasoCollegato = {
  id: number
  origine: string
  username_social: string | null
  url_post_riferimento: string | null
  nome_gruppo: string | null
  immagini: any
  note: string | null
}

// NUOVO: Type per messaggi
type Messaggio = {
  id: string
  mittente: string
  messaggio: string
  timestamp_cliente: string | null
  created_at: string
}

export default function DettaglioProgetto() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [progetto, setProgetto] = useState<Progetto | null>(null)
  const [loading, setLoading] = useState(true)

  // NUOVO: State per storico DM
  const [casoCollegato, setCasoCollegato] = useState<CasoCollegato | null>(null)
  const [messaggiCaso, setMessaggiCaso] = useState<Messaggio[]>([])

  useEffect(() => {
    if (id) caricaProgetto()
  }, [id])

  // NUOVO: Carica storico DM quando progetto è caricato
  useEffect(() => {
    if (progetto?.origine_id) {
      caricaStoricoDM()
    }
  }, [progetto])

  const caricaProgetto = async () => {
    setLoading(true)
    const { data, error } = await supabase
   .from('progetti')
   .select('*')
   .eq('id', id)
   .single()

    if (data) setProgetto(data)
    setLoading(false)
  }

  // NUOVO: Funzione per caricare caso e messaggi
  const caricaStoricoDM = async () => {
    if (!progetto?.origine_id) return

    const { data: caso } = await supabase
   .from('casi')
   .select('*')
   .eq('id', parseInt(progetto.origine_id))
   .single()

    if (caso) {
      setCasoCollegato(caso)

      const { data: msgs } = await supabase
     .from('casi_messaggi')
     .select('*')
     .eq('caso_id', caso.id)
     .order('created_at', { ascending: true })

      if (msgs) setMessaggiCaso(msgs)
    }
  }

  if (loading) return <div className="p-8">Caricamento...</div>
  if (!progetto) return <div className="p-8">Progetto non trovato</div>

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <button
        onClick={() => router.push('/dashboard/progetti')}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Torna ai progetti
      </button>

      <div className="grid grid-cols-3 gap-6">
        {/* Colonna sinistra: Info Progetto */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              {progetto.nome_cliente}
            </h1>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600">Email</p>
                <p className="font-medium">{progetto.email || '-'}</p>
              </div>
              <div>
                <p className="text-slate-600">Telefono</p>
                <p className="font-medium">{progetto.cellulare || '-'}</p>
              </div>
              <div>
                <p className="text-slate-600">Stato</p>
                <p className="font-medium">{progetto.stato}</p>
              </div>
              <div>
                <p className="text-slate-600">Importo</p>
                <p className="font-medium">€{progetto.importo}</p>
              </div>
            </div>

            {progetto.richieste_cliente && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-slate-600 text-sm mb-1">Richieste</p>
                <p className="text-slate-900 whitespace-pre-wrap">{progetto.richieste_cliente}</p>
              </div>
            )}
          </div>

          {/* NUOVO: Sezione Storico Conversazioni */}
          {casoCollegato && (
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-bold text-slate-900">Storico Conversazioni</h3>
                <span className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600">
                  {casoCollegato.origine}
                </span>
              </div>

              {casoCollegato.username_social && (
                <p className="text-sm text-slate-600 mb-3">
                  Cliente: <span className="font-medium">{casoCollegato.username_social}</span>
                  {casoCollegato.nome_gruppo && ` · Gruppo: ${casoCollegato.nome_gruppo}`}
                  {casoCollegato.url_post_riferimento && (
                    <> · <a href={casoCollegato.url_post_riferimento} target="_blank" className="text-blue-600 hover:underline">
                      Vedi post originale →
                    </a></>
                  )}
                </p>
              )}

              {casoCollegato.immagini?.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {casoCollegato.immagini.map((url: string, i: number) => (
                    <img key={i} src={url} className="w-full h-24 object-cover rounded border border-slate-200" />
                  ))}
                </div>
              )}

              <div className="space-y-3 max-h-96 overflow-y-auto bg-slate-50 p-4 rounded-lg">
                {messaggiCaso.length === 0? (
                  <p className="text-sm text-slate-400 text-center py-8">Nessun messaggio registrato</p>
                ) : (
                  messaggiCaso.map(m => (
                    <div key={m.id} className={`flex ${m.mittente === 'tu'? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-md p-3 rounded-lg text-sm ${
                        m.mittente === 'tu'
                       ? 'bg-slate-900 text-white'
                          : 'bg-white text-slate-900 border border-slate-200'
                      }`}>
                        <div className="text-xs opacity-60 mb-1">
                          {m.mittente === 'tu'? 'Tu' : 'Cliente'}
                        </div>
                        <p className="whitespace-pre-wrap">{m.messaggio}</p>
                        <p className="text-xs opacity-60 mt-1">
                          {new Date(m.timestamp_cliente || m.created_at).toLocaleString('it-IT', {
                            day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Colonna destra: Azioni - mantieni la tua esistente */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold mb-4">Azioni</h3>
            {/* Qui metti i tuoi bottoni esistenti: cambia stato, upload file, ecc */}
          </div>
        </div>
      </div>
    </div>
  )
}