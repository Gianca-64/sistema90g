 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Blindatura Contratto - Revisione clausole tecniche',
  description: 'Revisione contratto cucina: clausole, penali, esclusioni, tempi. Include Check-up Progetto + 2 call. Firma senza rischi.'
}

export default function Blindatura() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">SERVIZIO COMPLETO</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Blindatura Contratto</h1>
          <p className="text-xl text-gray-600 mb-8">
            Revisione completa progetto + contratto + clausole tecniche. Include 2 call fino alla firma.
          </p>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Richiedi Blindatura Contratto →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100 relative">
          <Image 
            src="/hero-contratto-800.jpeg"
            alt="Blindatura Contratto"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Cosa include</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Check-up Progetto completo</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Tutte le verifiche del Check-up: misure, impianti, ergonomia, quote tecniche. 
              Report PDF con correzioni da girare al mobiliere prima dell'ordine.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Revisione clausole contrattuali</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Controllo penali per ritardo, clausole di esclusione, tempi di consegna, modalità pagamento. 
              Verifico che penali siano reciproche e che le esclusioni siano esplicite.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Verifica capitolato e allegati</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Controllo che spessori, ferramenta, maniglie, zoccolo e finiture siano specificati. 
              Evidenzio voci mancanti da integrare prima della firma.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>2 call di supporto fino alla firma</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Prima call per discutere il report. Seconda call per revisionare il contratto modificato. 
              Ti accompagno fino alla firma senza sorprese.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Report Check-up</strong> completo con correzioni tecniche</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Revisione contratto</strong> con clausole da modificare</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Checklist capitolato</strong> con voci da integrare</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>2 call di supporto</strong> fino alla firma</div></li>
            </ul>
            <p className="text-gray-600 mt-6 text-sm">Consegna report in 48h. Call su appuntamento.</p>
          </div>
        </div>
      </section>
    </main>
  )
}