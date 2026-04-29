 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Servizi - Analisi Tecniche per Cucina | Sistema90G',
  description: 'Consulenze tecniche indipendenti per la tua cucina. Da 47€ a 890€. Check-up, blindatura, progetto da zero. Solo 2-5 posti/mese.',
  keywords: 'servizi cucina, consulenza cucina, progetto cucina, analisi tecnica cucina, preventivo cucina',
}

const servizi = [
  {
    slug: 'distribuzione-cucina',
    titolo: 'Distribuzione Cucina',
    prezzo: '97€',
    descrizione: 'Riorganizziamo la tua cucina in 48h. Analisi tecnica di ergonomia, triangolo di lavoro e prese.',
    badge: '5 posti/mese',
    immagine: '/servizi/distribuzione-cucina.jpg',
  },
  {
    slug: 'check-up-cucina',
    titolo: 'Check-Up Cucina',
    prezzo: '147€',
    descrizione: 'Hai già il progetto? Lo controlliamo prima che sia troppo tardi. Verifica misure, impianti, ergonomia.',
    badge: 'Report 72h',
    immagine: '/servizi/check-up-cucina.jpg',
  },
  {
    slug: 'add-on-capitolato',
    titolo: 'Add-On Capitolato',
    prezzo: '47€',
    descrizione: 'Capitolato del costruttore troppo vago? Lo integriamo con specifiche tecniche precise. Evita extra-costi.',
    badge: 'Fast',
    immagine: '/servizi/add-on-capitolato.jpg',
  },
  {
    slug: 'blindatura',
    titolo: 'Blindatura Progetto',
    prezzo: '297€',
    descrizione: 'Trasformiamo il preventivo del mobiliere in progetto esecutivo per muratore ed elettricista. Zero interpretazioni.',
    badge: 'Più scelto',
    immagine: '/servizi/blindatura.jpg',
  },
  {
    slug: 'progetto-da-zero',
    titolo: 'Progetto da Zero',
    prezzo: '890€',
    descrizione: 'Partiamo da zero: rilievo, layout, impianti, capitolato tecnico, render 3D. Dal foglio bianco al montaggio.',
    badge: '2 posti/mese',
    immagine: '/servizi/progetto-da-zero.jpg',
  },
]

export default function ServiziPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          ← Torna alla Home
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Scegli il Servizio Giusto per Te
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Consulenze tecniche indipendenti per la tua cucina. Non vendiamo mobili, 
          non prendiamo provvigioni. Solo analisi oggettive per evitare errori da migliaia di euro.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12 text-center">
        <p className="text-blue-900 font-semibold">
          ⚡ Posti limitati ogni mese per garantire qualità e tempi di consegna
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servizi.map((servizio) => (
          <Link
            key={servizio.slug}
            href={`/servizi/${servizio.slug}`}
            className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="relative h-48 bg-gray-100">
              <Image
                src={servizio.immagine}
                alt={servizio.titolo}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                {servizio.badge}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                {servizio.titolo}
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-3">
                {servizio.prezzo}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {servizio.descrizione}
              </p>
              <div className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                Scopri di più 
                <span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Non sai quale scegliere?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Scrivici su WhatsApp: ti aiutiamo a capire quale servizio fa per te in base alla tua situazione. 
          Risposta entro 1h in orario lavorativo.
        </p>
        <Link
          href="/contatti"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Contattaci →
        </Link>
      </div>

      <div className="mt-12 border-t pt-8">
        <h3 className="font-semibold mb-4">Come funziona:</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-black mb-2">1. Scegli il servizio</p>
            <p>Leggi le schede e scegli quello adatto alla tua fase. Pagamento anticipato sicuro.</p>
          </div>
          <div>
            <p className="font-semibold text-black mb-2">2. Invia i materiali</p>
            <p>Ti chiediamo planimetria, foto, progetto esistente. Tutto via email/WhatsApp.</p>
          </div>
          <div>
            <p className="font-semibold text-black mb-2">3. Ricevi il lavoro</p>
            <p>Consegna in PDF nei tempi indicati. 1 revisione inclusa su tutti i servizi.</p>
          </div>
        </div>
      </div>
    </main>
  )
}