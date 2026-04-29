import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="bg-gray-50 py-24 text-center">
        <h1 className="text-6xl font-serif mb-4">Analisi Tecniche</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Consulenze tecniche indipendenti per evitare errori di progetto nella cucina e nella distribuzione
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center border-b">
        <h2 className="text-2xl font-serif mb-6">Cosa faccio</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sono Gian Carlo Primo, tecnico indipendente. Non vendo cucine.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Analizzo progetti cucina prima che inizino i lavori. Verifico quote impianti, scarichi, 
          prese, ventilazione e vincoli tecnici che i mobilieri non controllano. Analizzo anche 
          la distribuzione interna di appartamenti e ville per ottimizzare flussi e funzionalità.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Individuo le criticità tecniche prima della firma. Così eviti modifiche edili, 
          ritardi di cantiere e contenziosi. Ricevi una relazione tecnica che giri al fornitore.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <article className="grid md:grid-cols-2 gap-12 mb-16 pb-16 border-b items-center">
          <div className="max-h-96 overflow-hidden rounded-lg">
            <img 
              src="/hero-distribuzione-800.jpeg"
              alt="Open space: errori di distribuzione"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-4">
              Open space: 5 errori di distribuzione da evitare prima del cantiere
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Isola che blocca il passaggio, triangolo di lavoro interrotto, flussi incrociati. 
              I 5 errori tecnici che compromettono la funzionalità e richiedono modifiche murarie dopo.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/blog/open-space-errori" className="text-green-700 hover:underline">
                Leggi l'articolo
              </Link>
              <Link href="/servizi/analisi-distribuzione" className="text-green-700 hover:underline">
                Analisi Distribuzione
              </Link>
            </div>
          </div>
        </article>

        <article className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-h-96 overflow-hidden rounded-lg">
            <img 
              src="/hero-verifica-cucina-800.jpeg"
              alt="7 Verifiche tecniche prima di progettare"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-4">
              7 Verifiche tecniche prima di progettare la cucina
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Scarichi, prese, fori cappa, ventilazione frigo. Le 7 quote che il mobiliere 
              non controlla e che ti obbligano a interventi edili dopo la firma del contratto.
            </p>
            <Link href="/blog/verifiche-misure-progetto-cucina" className="text-green-700 text-sm hover:underline">
              Leggi l'articolo
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}