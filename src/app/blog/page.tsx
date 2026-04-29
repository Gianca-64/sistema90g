 import Link from 'next/link'
import type { Metadata } from 'next'
import ServiziBox from '../../components/ServiziBox'

export const metadata: Metadata = {
  title: 'Analisi Tecniche | Consulenza Indipendente Progetti e Distribuzione',
  description: 'Verifiche tecniche preventive su distribuzione appartamento e progetti cucina. Supporto super partes per privati, architetti e rivenditori prima dei lavori.',
}

const articoli = [
  {
    slug: 'errori-distribuzione-open-space-appartamento',
    titolo: 'Open space: 5 errori di distribuzione che costano 15.000€ di modifiche',
    descrizione: 'Analisi tecnica dei 5 errori distributivi più frequenti nelle piante open space. Verifica flussi, norme disimpegno, scarichi e illuminazione prima di tracciare i muri.',
    data: '29 Aprile 2026',
    categoria: 'Distribuzione Interna',
    img: '/hero-distribuzione-800.png',
    readTime: '7 min',
    servizio: 'Analisi Distribuzione 97€'
  },
  {
    slug: 'verifiche-misure-progetto-cucina',
    titolo: '7 Verifiche tecniche prima di confermare il progetto cucina',
    descrizione: 'Check-list per validare quote, impianti e conformità norme UNI del progetto cucina prima dell\'ordine. Guida tecnica per committenti e progettisti.',
    data: '27 Aprile 2026',
    categoria: 'Verifica Progetto',
    img: '/hero-verifica-cucina-800.png',
    readTime: '8 min',
    servizio: 'Check-up Progetto 147€'
  },
  {
    slug: 'induzione-vs-gas-verifiche-impianti',
    titolo: 'Piano induzione vs gas: verifiche tecniche su impianti e areazione',
    descrizione: 'Analisi comparativa dei requisiti tecnici: potenza elettrica, sezione cavi, volume ambiente e canna fumaria. Cosa verificare prima di scegliere.',
    data: '24 Aprile 2026',
    categoria: 'Elettrodomestici',
    img: '/hero-induzione-800.png',
    readTime: '6 min',
    servizio: 'Check-up Progetto 147€'
  },
  {
    slug: 'distanze-minime-camera-norme-abitabilita',
    titolo: 'Distanze minime camera da letto: norme che bloccano l\'abitabilità',
    descrizione: 'Verifica tecnica delle distanze letto-pareti, armadio-passaggio e aperture secondo DM 1975 e norme regionali. Errori che invalidano l\'agibilità.',
    data: '22 Aprile 2026',
    categoria: 'Normative',
    img: '/hero-camera-800.png',
    readTime: '5 min',
    servizio: 'Analisi Distribuzione 97€'
  }
]

export default function Blog() {
  return (
    <main className="bg-white">
      <div className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-sm text-slate-500 mb-2">Consulenza Tecnica Indipendente</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Analisi Tecniche
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Verifiche preventive su distribuzione appartamento e progetti cucina. 
            Supporto super partes per privati, architetti e rivenditori.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Colonna articoli */}
          <div className="lg:col-span-2 space-y-16">
            {articoli.map((art, idx) => (
              <article key={art.slug} className={idx !== 0 ? 'pt-16 border-t border-slate-100' : ''}>
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <Link href={`/blog/${art.slug}`} className="md:col-span-1">
                    <img 
                      src={art.img} 
                      alt={art.titolo}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover rounded-lg"
                    />
                  </Link>
                  
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="uppercase tracking-wide font-medium">{art.categoria}</span>
                      <span>·</span>
                      <time>{art.data}</time>
                      <span>·</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 text-slate-900 leading-tight">
                      <Link href={`/blog/${art.slug}`} className="hover:text-slate-600 transition">
                        {art.titolo}
                      </Link>
                    </h2>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {art.descrizione}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/blog/${art.slug}`} 
                        className="text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-600"
                      >
                        Leggi l'analisi tecnica
                      </Link>
                      <span className="text-xs text-slate-500">{art.servizio}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar Servizi */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiziBox />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}