 import Link from 'next/link'

export const metadata = {
  title: 'Progetto da Zero - Cucina chiavi in mano con 3D',
  description: 'Partiamo da zero: rilievo, layout, impianti, capitolato tecnico, render 3D. Progetto completo da piantina vuota a capitolato blindato.'
}

export default function ProgettoDaZero() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">SERVIZIO COMPLETO</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Progetto da Zero</h1>
          <p className="text-xl text-gray-600 mb-8">
            Progetto completo: da piantina vuota a capitolato blindato con render 3D.
          </p>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Richiedi Progetto da Zero 890€ →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100">
          <img 
            src="/hero-progetto-zero-800.jpeg"
            alt="Progetto da Zero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Cosa include</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Rilievo misure in cantiere o da video+foto
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Layout funzionale: 2 proposte diverse
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Render 3D fotorealistico della soluzione scelta
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Capitolato tecnico: materiali, ferramenta, spessori
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Distinta elettrodomestici: modelli, nicchie, prese
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dossier completo 15-20 pagine PDF: planimetrie quotate, prospetti, render, capitolato, lista spesa. 
            Con questo vai da 3 mobilifici e chiedi preventivo per fare esattamente questo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Consegna dossier finale in 10 giorni lavorativi dalla call iniziale.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Parti da zero con progetto indipendente</h2>
        <Link 
          href="/contatti" 
          className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
        >
          Richiedi Progetto da Zero 890€ →
        </Link>
      </section>
    </main>
  )
}