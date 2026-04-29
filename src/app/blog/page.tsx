 import Link from 'next/link'

const articoli = [
  {
    slug: 'open-space-errori',
    categoria: 'DISTRIBUZIONE INTERNA',
    titolo: 'Open space: 5 errori di distribuzione da evitare prima del cantiere',
    descrizione: 'Isola che blocca, triangolo interrotto, flussi incrociati. I 5 errori tecnici che compromettono la funzionalità e richiedono modifiche edili.',
    servizio: 'Analisi Distribuzione 97€',
    immagine: '/blog/open-space-errori.jpg'
  },
  {
    slug: 'verifiche-misure-progetto-cucina',
    categoria: 'VERIFICA PROGETTO',
    titolo: '7 Verifiche tecniche prima di progettare la cucina',
    descrizione: 'Scarichi, prese, fori cappa, ventilazione frigo. Le 7 quote che il mobiliere non controlla e che ti obbligano a demolire dopo.',
    servizio: 'Check-up 147€',
    immagine: '/blog/verifiche-cucina.jpg'
  }
]

export default function Blog() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Analisi Tecniche</h1>
        <p className="text-xl text-gray-600">
          Errori di progetto, contratti, capitolati: come evitarli prima di firmare
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {articoli.map((articolo) => (
          <article key={articolo.slug} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
            <Link href={`/blog/${articolo.slug}`}>
              <img 
                src={articolo.immagine} 
                alt={articolo.titolo}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-8">
              <div className="text-sm text-green-700 font-semibold mb-2">
                {articolo.categoria}
              </div>
              <Link href={`/blog/${articolo.slug}`}>
                <h2 className="text-3xl font-serif font-bold mb-4 hover:text-green-700">
                  {articolo.titolo}
                </h2>
              </Link>
              <p className="text-gray-600 mb-6">
                {articolo.descrizione}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Servizio:</span>
                <span className="text-green-700 font-semibold">{articolo.servizio}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}