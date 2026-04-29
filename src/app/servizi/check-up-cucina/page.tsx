 import Link from 'next/link'

export const metadata = {
  title: 'Check-up Progetto Cucina - Analisi tecnica indipendente',
  description: 'Verifico quote impianti, scarichi e vincoli del progetto cucina prima della firma. Report tecnico per evitare modifiche edili.'
}

export default function CheckUpCucina() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">SERVIZIO TECNICO</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Check-up Progetto Cucina</h1>
          <p className="text-xl text-gray-600 mb-8">
            Analisi tecnica del progetto prima della firma. Verifico quote impianti, scarichi e vincoli.
          </p>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Richiedi Check-up Progetto 147€ →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100">
          <img 
            src="/hero-verifica-cucina-800.jpeg"
            alt="Check-up Progetto Cucina"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Cosa verifico</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Quote scarichi e attacchi acqua sotto lavello e lavastoviglie
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Posizione prese elettriche per piano induzione, forno, cappa
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Foro cappa e ventilazione frigorifero incasso
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Ingombri ante, cassetti, aperture finestre
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Coerenza tra progetto cucina e impianto esistente
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Relazione tecnica in PDF con criticità rilevate e soluzioni. 
            Documento da girare al mobiliere per correzioni prima della firma.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Consegna in 3 giorni lavorativi dall'invio del progetto completo.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Evita modifiche edili dopo la firma</h2>
        <Link 
          href="/contatti" 
          className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
        >
          Richiedi Check-up Progetto 147€ →
        </Link>
      </section>
    </main>
  )
}