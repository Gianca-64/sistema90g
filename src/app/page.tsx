 import Link from 'next/link'

const articoli = [
  {
    slug: 'open-space-errori',
    categoria: 'DISTRIBUZIONE',
    titolo: 'Open space: 5 errori di distribuzione da evitare prima del cantiere',
    descrizione: 'Isola che blocca il passaggio, triangolo di lavoro interrotto, flussi incrociati. I 5 errori tecnici che richiedono modifiche murarie dopo.',
    immagine: '/hero-distribuzione-800.jpeg'
  },
  {
    slug: 'verifiche-misure-progetto-cucina',
    categoria: 'VERIFICA PROGETTO',
    titolo: '7 Verifiche tecniche prima di progettare la cucina',
    descrizione: 'Scarichi, prese, fori cappa, ventilazione frigo. Le 7 quote che il mobiliere non controlla e che ti obbligano a interventi edili dopo la firma.',
    immagine: '/hero-verifica-cucina-800.jpeg'
  },
  {
    slug: 'capitolato-cucina-cosa-controllare',
    categoria: 'CAPITOLATO',
    titolo: 'Capitolato cucina: cosa controllare prima di firmare',
    descrizione: 'Tempi di consegna, penali, tolleranze di montaggio. Le clausole che proteggono te e che mancano nel 90% dei preventivi.',
    immagine: '/hero-capitolato-800.jpeg'
  },
  {
    slug: 'induzione-vs-gas-verifiche-impianti',
    categoria: 'IMPIANTI',
    titolo: 'Induzione vs Gas: verifiche impianti obbligatorie',
    descrizione: 'Linee dedicate, potenze, prese d\'aria. Cosa serve davvero per non rifare l\'impianto elettrico o del gas dopo.',
    immagine: '/hero-induzione-800.jpeg'
  },
  {
    slug: 'progetto-cucina-da-zero-come-fare',
    categoria: 'PROGETTO',
    titolo: 'Progetto cucina da zero: come si fa senza errori',
    descrizione: 'Ordine corretto delle fasi: prima gli impianti, poi i muri, poi i mobili. La sequenza che evita cantieri infiniti.',
    immagine: '/hero-progetto-zero-800.jpeg'
  },
  {
    slug: 'revisione-contratto-cucina-clausole-da-controllare',
    categoria: 'CONTRATTO',
    titolo: 'Revisione contratto cucina: clausole da controllare',
    descrizione: 'Variazioni di prezzo, consegna ritardata, difformità. I 3 punti che devi far scrivere nero su bianco prima di firmare.',
    immagine: '/hero-contratto-800.jpeg'
  }
]

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
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-serif font-bold">Guide Tecniche</h2>
          <Link href="/blog" className="text-green-700 font-semibold hover:underline">
            Vedi tutte →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {articoli.map((articolo, index) => (
            <article key={articolo.slug} className={index < articoli.length - 1 ? 'pb-12 border-b' : ''}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="max-h-80 overflow-hidden rounded-lg">
                  <img 
                    src={articolo.immagine}
                    alt={articolo.titolo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs text-green-700 font-semibold mb-2 uppercase">
                    {articolo.categoria}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">
                    {articolo.titolo}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {articolo.descrizione}
                  </p>
                  <div className="flex gap-6 text-sm">
                    <Link 
                      href={`/blog/${articolo.slug}`} 
                      className="text-green-700 font-semibold hover:underline"
                    >
                      Leggi l'articolo →
                    </Link>
                    <Link 
                      href="/servizi/check-up-progetto" 
                      className="text-gray-600 hover:underline"
                    >
                      Check-up Progetto
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}