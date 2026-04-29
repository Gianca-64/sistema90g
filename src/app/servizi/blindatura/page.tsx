 import Link from 'next/link'

export const metadata = {
  title: 'Blindatura Contratto - Revisione clausole tecniche',
  description: 'Revisione contratto cucina: controllo penali, tempi di consegna, esclusioni e modifiche in corso d\'opera. Analisi tecnica delle clausole.'
}

export default function Blindatura() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">SERVIZIO TECNICO</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Blindatura Contratto</h1>
          <p className="text-xl text-gray-600 mb-8">
            Revisione contratto cucina: controllo penali, tempi e clausole tecniche prima della firma.
          </p>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Richiedi Blindatura 297€ →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100">
          <img 
            src="/hero-contratto-800.jpeg"
            alt="Blindatura Contratto"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Cosa verifico</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Clausola esclusioni: cosa è incluso nel prezzo
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Penali per ritardo: reciproche e proporzionate
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Tempi di consegna e definizioni contrattuali
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Clausola modifiche tecniche in corso d'opera
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Garanzie su mobili e montaggio
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Report di revisione con clausole critiche evidenziate e suggerimenti di modifica. 
            Include Check-up Progetto completo + 2 call di supporto fino alla firma.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Consegna in 72 ore lavorative dall'invio del contratto.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Firma con clausole chiare</h2>
        <Link 
          href="/contatti" 
          className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
        >
          Richiedi Blindatura 297€ →
        </Link>
      </section>
    </main>
  )
}