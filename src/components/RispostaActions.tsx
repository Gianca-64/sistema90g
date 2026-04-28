 'use client'

import { useState, useTransition } from 'react'
import { aggiornaStatoRisposta } from '@/app/actions/risposte'

type StatoPubblicazione = 'bozza' | 'accettata' | 'pubblicata' | 'rifiutata'

interface Props {
  rispostaId: string
  statoAttuale: StatoPubblicazione
}

export default function RispostaActions({ rispostaId, statoAttuale }: Props) {
  const [stato, setStato] = useState<StatoPubblicazione>(statoAttuale)
  const [isPending, startTransition] = useTransition()

  const cambiaStato = (nuovoStato: StatoPubblicazione) => {
    const statoPrecedente = stato
    setStato(nuovoStato)
    
    startTransition(async () => {
      try {
        await aggiornaStatoRisposta(rispostaId, nuovoStato)
      } catch (e) {
        setStato(statoPrecedente)
        alert('Errore durante il salvataggio')
      }
    })
  }

  const btn = "px-4 py-2 rounded font-medium transition-colors disabled:opacity-50"
  
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => cambiaStato('accettata')}
        disabled={isPending || stato === 'accettata'}
        className={`${btn} ${stato === 'accettata' ? 'bg-green-700' : 'bg-green-600 hover:bg-green-700'} text-white`}
      >
        {stato === 'accettata' ? 'Accettata ✓' : 'Accetta'}
      </button>

      <button
        onClick={() => cambiaStato('pubblicata')}
        disabled={isPending || stato === 'pubblicata'}
        className={`${btn} ${stato === 'pubblicata' ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
      >
        {stato === 'pubblicata' ? 'Pubblicata ✓' : 'Segna Pubblicata'}
      </button>

      <button
        onClick={() => cambiaStato('rifiutata')}
        disabled={isPending || stato === 'rifiutata'}
        className={`${btn} ${stato === 'rifiutata' ? 'bg-red-700' : 'bg-red-600 hover:bg-red-700'} text-white`}
      >
        {stato === 'rifiutata' ? 'Rifiutata ✗' : 'Segna Rifiutata'}
      </button>

      {isPending && <span className="text-sm text-gray-500 self-center">Salvataggio...</span>}
    </div>
  )
}