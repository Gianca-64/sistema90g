 export default function Home() {
  return (
    <main>
      <section className="bg-gray-50 py-24 text-center">
        <h1 className="text-6xl font-serif mb-4">Analisi Tecniche</h1>
        <p className="text-gray-600">
          Consulenze tecniche indipendenti per la tua cucina
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <article className="grid md:grid-cols-2 gap-12 mb-16 pb-16 border-b">
          <img 
            src="/distribuzione-hero.jpeg"
            alt="Open space: errori di distribuzione"
            className="w-full h-auto rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-serif mb-4">
              Open space: 5 errori di distribuzione
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Leggi la distribuzione degli spazi e i trucchi tecnici che ti fanno risparmiare 
              fino a 15.000€ evitando ristrutturazioni inutili.
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-green-700">Leggi</span>
              <span className="text-green-700">Analisi Distribuzione</span>
              <span>97€</span>
            </div>
          </div>
        </article>

        <article className="grid md:grid-cols-2 gap-12">
          <img 
            src="/progetto-zero-hero.jpeg"
            alt="7 Verifiche tecniche prima di progettare"
            className="w-full h-auto rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-serif mb-4">
              7 Verifiche tecniche prima di progettare la cucina
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Prima di cucine, elettrodomestici e ante: le verifiche tecniche che 
              anticipano i problemi e bloccano le richieste di modifica costose.
            </p>
            <span className="text-green-700 text-sm">Leggi l'articolo</span>
          </div>
        </article>
      </section>
    </main>
  )
}