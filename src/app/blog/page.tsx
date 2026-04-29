import Link from 'next/link'
import ServiziBox from '@/components/ServiziBox'

export const metadata = {
  title: 'Blog | Analisi Tecniche Indipendenti',
  description: 'Articoli tecnici su distribuzione, norme, impianti e verifiche per progetti cucina e appartamento.',
}

export default function BlogPage() {
  const articoli = [
    {
      slug: 'errori-distribuzione-open-space-appartamento',
      img: '/hero-distribuzione-800.jpeg',
      cat: 'Distribuzione Interna',
      data: '29 Apr 2026',
      min: '7 min',
      titolo: 'Open space: 5 errori di distribuzione che costano 15.000€ di modifiche',
      desc: 'Analisi tecnica dei 5 errori distributivi più frequenti nelle piante open space.'
    },
    {
      slug: 'verifiche-misure-progetto-cucina',
      img: '/hero-verifica-cucina-800.jpeg',
      cat: 'Verifica Progetto',
      data: '27 Apr 2026',
      min: '8 min',
      titolo: '7 Verifiche tecniche prima di confermare il progetto cucina',
      desc: 'Check-list per validare quote, impianti e conformità norme UNI del progetto cucina prima dell\'ordine.'
    },
    {
      slug: 'induzione-vs-gas-verifiche-impianti',
      img: '/hero-induzione-800.jpeg',
      cat: 'Elettrodomestici',
      data: '24 Apr 2026',
      min: '6 min',
      titolo: 'Piano induzione vs gas: verifiche tecniche su impianti e areazione',
      desc: 'Analisi comparativa dei requisiti tecnici: potenza elettrica, sezione cavi, volume ambiente e canna fumaria.'
    },
    {
      slug: 'distanze-minime-camera-norme-abitabilita',
      img: '/hero-camera-800.jpeg',
      cat: 'Normative',
      data: '22 Apr 2026',
      min: '5 min',
      titolo: 'Distanze minime camera da letto: norme che bloccano l\'abitabilità',
      desc: 'Verifica tecnica delle distanze letto-pareti, armadio-passaggio e aperture secondo DM 1975.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Analisi Tecniche</h1>
            <p className="text-lg text-slate-600 mb-12">
              Approfondimenti tecnici su distribuzione, normative e verifiche preventive.
            </p>

            <div className="space-y-12">
              {articoli.map((art) => (
                <article key={art.slug} className="border-b border-slate-200 pb-12">
                  <Link href={`/blog/${art.slug}`}>
                    <img 
                      src={art.img}
                      alt={art.titolo}
                      className="w-full h-64 object-cover rounded-lg mb-6 hover:opacity-90 transition"
                    />
                  </Link>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span className="bg-slate-100 px-3 py-1 rounded">{art.cat}</span>
                    <span>{art.data}</span>
                    <span>·</span>
                    <span>{art.min}</span>
                  </div>
                  <Link href={`/blog/${art.slug}`}>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition">
                      {art.titolo}
                    </h2>
                  </Link>
                  <p className="text-slate-600 leading-relaxed mb-4">{art.desc}</p>
                  <Link 
                    href={`/blog/${art.slug}`}
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Leggi l'analisi completa →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <ServiziBox />
          </aside>
        </div>
      </div>
    </main>
  )
}