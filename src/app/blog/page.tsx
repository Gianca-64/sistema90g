 import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Sistema90G - Guide tecniche cucina',
  description: 'Guide tecniche per evitare errori sul progetto della cucina. Check-up, contratti, misure.',
  openGraph: {
    title: 'Blog Sistema90G',
    description: 'Guide tecniche per non farti fregare sul progetto della cucina',
    images: ['/hero-errore-800.png'],
  },
}

const articoli = [
  {
    slug: 'errori-misura-cucina',
    titolo: '7 Errori di misura che costano 5000€ in cucina',
    descrizione: 'Il 90% dei progetti cucina ha almeno 1 errore di misura. Ecco i 7 più costosi e come evitarli prima di firmare.',
    data: '27 Aprile 2026',
    categoria: 'Check-up',
    img: '/hero-errore-800.png'
  }
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog Sistema90G</h1>
        <p className="text-xl text-gray-600 mb-12">
          Guide tecniche per non farti fregare sul progetto della cucina
        </p>

        <div className="space-y-8">
          {articoli.map((art) => (
            <article key={art.slug} className="border-b pb-8">
              <img src={art.img} alt={art.titolo} className="w-full rounded-lg mb-4" />
              <div className="text-sm text-blue-600 font-bold mb-2">{art.categoria}</div>
              <h2 className="text-2xl font-bold mb-3">
                <Link href={`/blog/${art.slug}`} className="hover:underline">
                  {art.titolo}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{art.descrizione}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{art.data}</span>
                <Link href={`/blog/${art.slug}`} className="text-blue-600 underline font-bold">
                  Leggi tutto →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-blue-600 underline">← Torna alla Home</Link>
        </div>
      </div>
    </main>
  )
}