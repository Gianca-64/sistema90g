import Link from 'next/link'
import Image from 'next/image'

const articoli = [
  {
    slug: 'errore-ordine-cucina-verifica-pre-conferma',
    title: 'Errore #3: Firmare l\'ordine senza verifica PRE-conferma',
    excerpt: 'Il 70% degli errori da 800€ nasce qui. Ecco come evitarli con un controllo gratuito prima di firmare l\'ordine.',
    date: '26 Aprile 2026',
    readTime: '3 min'
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-[#A6937C] mb-6 hover:opacity-80">
            <Image src="/logo-90g.jpg" alt="Sistema 90G" width={40} height={40} className="mr-2" />
            <span className="font-bold text-lg">Sistema 90G</span>
          </Link>
          <h1 className="text-4xl font-bold text-[#4A4A4A] mb-4">Blog</h1>
          <p className="text-xl text-[#65676B]">
            Errori da evitare quando compri la cucina nuova
          </p>
        </div>

        <div className="space-y-6">
          {articoli.map((art) => (
            <Link 
              key={art.slug} 
              href={`/blog/${art.slug}`}
              className="block bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 text-sm text-[#A6937C] mb-2">
                <span>{art.date}</span>
                <span>•</span>
                <span>{art.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-3 hover:text-[#A6937C] transition">
                {art.title}
              </h2>
              <p className="text-[#65676B] mb-4">{art.excerpt}</p>
              <span className="text-[#A6937C] font-bold">Leggi tutto →</span>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/verifica-progetto"
            className="inline-block bg-[#A6937C] hover:bg-[#9A856E] text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Richiedi Verifica Gratuita
          </Link>
        </div>
      </div>
    </div>
  )
}