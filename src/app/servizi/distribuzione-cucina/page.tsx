 import Link from 'next/link'

export const metadata = {
  title: 'Analisi Distribuzione - Verifica pianta appartamento',
  description: 'Analizzo la pianta del tuo open space prima del cantiere. Verifico flussi, passaggi e funzionalità per evitare interventi edili correttivi.'
}

export default function DistribuzioneCucina() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">SERVIZIO TECNICO</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Analisi Distribuzione</h1>
          <p className="text-xl text-gray-600 mb-8">
            Verifico flussi, passaggi e funzionalità della pianta prima del cantiere.
          </p>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Richiedi Analisi Distribuzione 97€ →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100">
          <img 
            src="/hero-distribuzione-800.jpeg"
            alt="Analisi Distribuzione"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Cosa verifico</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Percorsi cucina-soggiorno e incroci di flusso
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Distanze minime tra arredi per passaggi funzionali
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Posizione impianti rispetto alla distribuzione arredi
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Ingombri porte, finestre e aperture
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Orientamento zone funzionali e triangoli di lavoro
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elaborato grafico quotato con analisi della distribuzione e correzioni da apportare al progetto.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Consegna in 24 ore lavorative via email in PDF.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Evita interventi edili correttivi</h2>
        <Link 
          href="/contatti" 
          className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
        >
          Richiedi Analisi Distribuzione 97€ →
        </Link>
      </section>
    </main>
  )
}