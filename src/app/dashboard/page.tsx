 'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import Image from 'next/image'

export default function Dashboard() {
  const [tab, setTab] = useState<'casi' | 'leads'>('leads') // parte su leads
  const [casi, setCasi] = useState<any[]>([])
  const [leads, setLeads] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    caricaCasi()
    caricaLeadsBlog()
  }, [])

  async function caricaCasi() {
    const { data } = await supabase
      .from('casi_facebook')
      .select('*, contatti(*)')
      .order('created_at', { ascending: false })
    if (data) setCasi(data)
  }

  async function caricaLeadsBlog() {
    const { data } = await supabase
      .from('leads')
      .select('*')
      .eq('fase', 'PRE-CONFERMA')
      .in('fonte', ['blog_form', 'blog_whatsapp'])
      .order('created_at', { ascending: false })
    if (data) setLeads(data)
  }

  async function convertiInProgetto(lead: any) {
    // 1. Crea progetto
    await supabase.from('progetti').insert({
      cliente_nome: lead.nome,
      telefono: lead.telefono,
      email: lead.email,
      citta: lead.citta,
      fase: 'PRE-CONFERMA',
      stato: 'preventivo_da_fare',
      lead_id: lead.id,
      note: `Lead da blog. Fonte: ${lead.fonte}`
    })

    // 2. Aggiorna lead
    await supabase.from('leads').update({ stato: 'convertito' }).eq('id', lead.id)
    
    caricaLeadsBlog() // refresh
    alert('Convertito in progetto!')
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Image src="/logo-90g.png" alt="Sistema 90G" width={50} height={50} />
          <h1 className="text-3xl font-bold text-[#4A4A4A]">Dashboard Sistema 90G</h1>
        </div>

        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => setTab('leads')}
            className={`px-6 py-3 rounded-lg font-bold ${tab === 'leads' ? 'bg-[#A6937C] text-white' : 'bg-white text-[#4A4A4A]'}`}>
            Lead PRE-Conferma ({leads.length})
          </button>
          <button 
            onClick={() => setTab('casi')}
            className={`px-6 py-3 rounded-lg font-bold ${tab === 'casi' ? 'bg-[#A6937C] text-white' : 'bg-white text-[#4A4A4A]'}`}>
            Casi Facebook/DM ({casi.length})
          </button>
        </div>

        {tab === 'leads' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#4A4A4A] text-white">
                <tr>
                  <th className="p-4 text-left">Nome</th>
                  <th className="p-4 text-left">Telefono</th>
                  <th className="p-4 text-left">Città</th>
                  <th className="p-4 text-left">Fonte</th>
                  <th className="p-4 text-left">Stato</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id} className="border-b">
                    <td className="p-4 font-bold text-[#4A4A4A]">{lead.nome}</td>
                    <td className="p-4 text-[#65676B]">{lead.telefono}</td>
                    <td className="p-4 text-[#65676B]">{lead.citta}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-[#A6937C] text-white text-xs rounded-full">
                        {lead.fonte === 'blog_whatsapp' ? 'WA' : 'Form'}
                      </span>
                    </td>
                    <td className="p-4 text-[#65676B]">{lead.stato}</td>
                    <td className="p-4">
                      {lead.stato !== 'convertito' && (
                        <button 
                          onClick={() => convertiInProgetto(lead)}
                          className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold">
                          Converti in Progetto
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'casi' && (
          // ... la tua tabella casi_facebook esistente
        )}
      </div>
    </div>
  )
}