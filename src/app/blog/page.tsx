 import Link from 'next/link'
import Image from 'next/image'

const articles = [
  {
    slug: 'errori-progetto-cucina-prima-firmare',
    title: 'Progetto cucina: 5 errori che ti costano 13.000€ dopo la firma',
    excerpt: 'Quote sbagliate, impianti fuori posto, elettrodomestici che non entrano. Ecco i 5 errori tecnici che trovo nel 90% dei progetti prima della firma.',
    image: '/blog/progetto-cucina-errori.jpg',
    livello: 'LIVELLO 2 CUCINA',
    ctaText: 'Check-up',
    ctaPrice: '147€',
    ctaLink: '/servizi/check-up-cucina'
  },
  {
    slug: 'errori-distribuzione-open-space-appartamento',
    title: 'Open space: 5 errori di distribuzione che scopri solo dopo il rogito',
    excerpt: 'Percorsi incrociati, distanze non rispettate, impianti impossibili. Controlla la planimetria prima di comprare casa.',
    image: '/blog/open-space-planimetria.jpg',
    livello: 'LIVELLO 1',
    ctaText: 'Distribuzione',
    ctaPrice: '97€',
    ctaLink: '/servizi/distribuzione'
  },
  {
    slug: 'clausole-contratto-mobilificio',
    title: 'Contratto mobilificio: 3 clausole che ti costano soldi dopo',
    excerpt: 'Penali, tempi di consegna, cosa è davvero incluso. Come leggere il contratto prima di firmare.',
    image: '/blog/contratto-cucina.jpg',
    livello: 'LIVELLO 3',
    ctaText: 'Blindatura',
    ctaPrice: '297€',
    ctaLink: '/servizi/blindatura'
  }
]

export default function Blog() {
  return (
    <>
      {/* HERO BLOG */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Analisi Tecniche</h1>
          <p className="text-lg text-slate-600">
            Errori di progetto, contratti, capitolati: come evitarli prima di firmare
          </p>
        </div>
      </section>

      {/* LISTA ARTICOLI */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-20">
          {articles.map((post, index) => (
            <article key={post.slug} className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              
              {/* Immagine */}
              <div className={index % 2 === 1? 'md:order-2' : ''}>
                <Link href={`/blog/${post.slug}`}>
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    width={600}
                    height={450}
                    className="w-full rounded-lg object-cover hover:opacity-90 transition"
                  />
                </Link>
              </div>

              {/* Testo */}
              <div className={index % 2 === 1? 'md:order-1' : ''}>
                <p className="text-sm font-semibold text-green-700 mb-2">{post.livello}</p>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 hover:text-green-700 transition leading-tight">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-semibold">Servizio:</span>
                  <Link 
                    href={post.ctaLink}
                    className="text-green-700 font-semibold hover:underline"
                  >
                    {post.ctaText} {post.ctaPrice}
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>
      </main>
    </>
  )
}