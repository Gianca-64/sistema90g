 import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="bg-gray-50 py-24 text-center">
        <h1 className="text-6xl font-serif mb-4">Analisi Tecniche</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Consulenze tecniche indipendenti per evitare errori costosi nella progettazione della cucina
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center border-b">
        <h2 className="text-2xl font-serif mb-6">Cosa faccio</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sono Gian Carlo Primo, tecnico indipendente. 
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Analizzo progetti cucina prima che inizino i lavori. Verifico impianti, misure, scarichi, 
          prese e vincoli tecnici che il 90% dei mobilieri ignora.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Il mio lavoro ti fa risparmiare 5.000-15.000€ evitando modifiche in cantiere, 
          ritardi e contenziosi. Ricevi una relazione tecnica che puoi usare con qualsiasi fornitore.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <article className="grid md:grid-cols-2 gap-12 mb-16 pb-16 border-b items-center">
          <div className="max-h- overflow-hidden rounded-lg">
            <img 
              src="/distribuzione-hero.jpeg"
              alt="Open space: errori di distribuzione"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-4">
              Open space: 5 errori di distribuzione
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Leggi la distribuzione degli spazi e i trucchi tecnici che ti fanno risparmiare 
              fino a 15.000€ evitando ristrutturazioni inutili.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/blog/open-space-errori" className="text-green-700 hover:underline">
                Leggi
              </Link>
              <Link href="/servizi/analisi-distribuzione" className="text-green-700 hover:underline">
                Analisi Distribuzione
              </Link>
              <span>97€</span>
            </div>
          </div>
        </article>

        <article className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-h- overflow-hidden rounded-lg">
            <img 
              src="/progetto-zero-hero.jpeg"
              alt="7 Verifiche tecniche prima di progettare"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-4">
              7 Verifiche tecniche prima di progettare la cucina
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Prima di cucine, elettrodomestici e ante: le verifiche tecniche che 
              anticipano i problemi e bloccano le richieste di modifica costose.
            </p>
            <Link href="/blog/verifiche-tecniche" className="text-green-700 text-sm hover:underline">
              Leggi l'articolo
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}