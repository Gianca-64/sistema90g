 import Link from 'next/link'

const articoli = [
  {
    slug: 'open-space-errori',
    categoria: 'DISTRIBUZIONE INTERNA',
    titolo: 'Open space: 5 errori di distribuzione da evitare prima del cantiere',
    descrizione: 'Isola che blocca, triangolo interrotto, flussi incrociati. I 5 errori tecnici che richiedono modifiche murarie.',
    immagine: '/hero-distribuzione-800.jpeg'
  },
  {
    slug: 'verifiche-misure-progetto-cucina',
    categoria: 'VERIFICA PROGETTO',
    titolo: '7 Verifiche tecniche prima di progettare la cucina',
    descrizione: 'Scarichi, prese, fori cappa, ventilazione. Le 7 quote che il mobiliere non controlla.',
    immagine: '/hero-verifica-cucina-800.jpeg'
  },
  {
    slug: 'capitolato-cucina-cosa-controllare',
    categoria: 'CAPITOLATO',
    titolo: 'Capitolato cucina: cosa controllare prima di firmare',
    descrizione: 'Spessori, cerniere, guide cassetti. Le voci tecniche che fanno la differenza tra cucina e problema.',
    immagine: '/hero-capitolato-hero.jpeg'
  },
  {
    slug: 'induzione-vs-gas-verifiche-impianti',
    categoria: 'IMPIANTI',
    titolo: 'Induzione vs Gas: verifiche impianti obbligatorie',
    descrizione: 'Linee dedicate, potenze, prese d\'aria. Cosa serve per non rifare l\'impianto dopo.',
    immagine: '/hero-induzione-800.jpeg'
  },
  {
    slug: 'progetto-cucina-da-zero-come-fare',
    categoria: 'PROGETTO',
    titolo: 'Progetto cucina da zero: la sequenza corretta',
    descrizione: 'Prima gli impianti o prima i mobili? La sequenza che evita demolizioni e ritardi.',
    immagine: '/progetto-zero-hero.jpeg'
  },
  {
    slug: 'revisione-contratto-cucina-clausole-da-controllare',
    categoria: 'CONTRATTO',
    titolo: 'Revisione contratto cucina: clausole da controllare',
    descrizione: 'Tempi consegna, penali, variazioni. Le clausole che ti tutelano se qualcosa va storto.',
    immagine: '/check-up-hero.jpeg'
  }
]

export default function Blog() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Analisi Tecniche</h1>
        <p className="text-xl text-gray-600">
          Guide pratiche su progetto, impianti e contratti. Zero fuffa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articoli.map((articolo) => (
          <article key={articolo.slug} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
            <Link href={`/blog/${articolo.slug}`}>
              <img 
                src={articolo.immagine} 
                alt={articolo.titolo}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-6">
              <div className="text-xs text-green-700 font-semibold mb-2 uppercase">
                {articolo.categoria}
              </div>
              <Link href={`/blog/${articolo.slug}`}>
                <h2 className="text-xl font-serif font-bold mb-3 hover:text-green-700 line-clamp-2">
                  {articolo.titolo}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {articolo.descrizione}
              </p>
              <Link 
                href={`/blog/${articolo.slug}`}
                className="text-green-700 font-semibold text-sm hover:underline"
              >
                Leggi →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}