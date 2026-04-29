 import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Evita la fregatura da 5000€<br />sulla tua cucina
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Sono un progettista tecnico. Non vendo cucine. Controllo il tuo progetto 
            e trovo gli errori che ti costano un salasso. Parti da 97€.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/servizi"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800"
            >
              Vedi i 5 Servizi Anti-Fregatura →
            </Link>
            <Link 
              href="/contatti"
              className="bg-white border-2 border-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100"
            >
              Scrivimi su WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Problemi Veloci */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            3 modi in cui perdi soldi senza accorgertene
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📐</div>
              <h3 className="text-xl font-bold mb-2">Misure Sbagliate</h3>
              <p className="text-gray-600">
                1cm di errore = frigo che non entra. Rifai basi e pensili: 1200€ buttati.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-xl font-bold mb-2">Contratto Trappola</h3>
              <p className="text-gray-600">
                "90 giorni lavorativi" = 5 mesi. Penale per te se disdici, zero per loro se ritardano.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🪚</div>
              <h3 className="text-xl font-bold mb-2">Materiali Scadenti</h3>
              <p className="text-gray-600">
                Ti dicono "qualità". Ma le cerniere sono cinesi da 0,30€. Durano 8 mesi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Servizi */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Parti da 97€, non da 5000€ di errore
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Check-up, capitolato, blindatura contratto, progetto completo. 
            5 livelli di protezione per il tuo investimento.
          </p>
          <Link 
            href="/servizi"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200"
          >
            Scegli il tuo livello di protezione →
          </Link>
        </div>
      </section>
    </main>
  )
}