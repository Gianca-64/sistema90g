 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Servizi Tecnici - Analisi Cucina e Distribuzione',
  description: 'Servizi di analisi tecnica indipendente: distribuzione, check-up progetto, capitolato, blindatura contratto, progetto da zero.'
}

const servizi = [
  {
    slug: 'distribuzione-cucina',
    nome: 'Analisi Distribuzione',
    descrizione: 'Verifico flussi, passaggi e funzionalità della pianta prima del cantiere.',
    immagine: '/hero-distribuzione-800.jpeg',
    badge: 'PIÙ RICHIESTO'
  },
  {
    slug: 'check-up-cucina',
    nome: 'Check-up Progetto',
    descrizione: 'Analisi tecnica completa del progetto cucina prima della firma.',
    immagine: '/hero-verifica-cucina-800.jpeg',
    badge: null
  },
  {
    slug: 'add-on-capitolato',
    nome: 'Add-on Capitolato',
    descrizione: 'Revisione capitolato materiali e ferramenta. Solo con Check-up.',
    immagine: '/hero-capitolato-800.jpeg',
    badge: 'ADD-ON'
  },
  {
    slug: 'blindatura',
    nome: 'Blindatura Contratto',
    descrizione: 'Revisione clausole tecniche e penali. Include Check-up + 2 call.',
    immagine: '/hero-contratto-800.jpeg',
    badge: null
  },
  {
    slug: 'progetto-da-zero',
    nome: 'Progetto da Zero',
    descrizione: 'Progetto completo da piantina vuota a capitolato con render 3D.',
    immagine: '/hero-progetto-zero-800.jpeg',
    badge: 'COMPLETO'
  }
]

export default function Servizi() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-serif font-bold mb-4">Servizi Tecnici</h1>
          <p className="text-xl text-gray-600">
            Analisi indipendenti per ogni fase del progetto. Dal controllo pianta al contratto firmato.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servizi.map((servizio) => (
            <Link 
              key={servizio.slug} 
              href={`/servizi/${servizio.slug}`}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-green-700 hover:shadow-xl transition group"
            >
              <div className="relative h-56 bg-gray-100">
                <Image 
                  src={servizio.immagine}
                  alt={servizio.nome}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {servizio.badge && (
                  <div className="absolute top-4 right-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded">
                    {servizio.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-green-700">
                  {servizio.nome}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {servizio.descrizione}
                </p>
                <span className="text-green-700 text-sm font-semibold">Scopri il servizio →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}