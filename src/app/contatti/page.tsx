import Link from 'next/link'

export default function ContattiPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Parliamo della tua cucina
        </h1>
        <p className="text-xl text-gray-600">
          Rispondo io, non un call center. Entro 2h in orario lavorativo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* WhatsApp Card */}
        <a 
          href="https://wa.me/39TUONUMERO?text=Ciao, ho visto il sito. Vorrei info su"
          target="_blank"
          className="block bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center hover:bg-green-100 transition-colors"
        >
          <div className="text-5xl mb-4">💬</div>
          <h2 className="text-2xl font-bold mb-2">WhatsApp Diretto</h2>
          <p className="text-gray-700 mb-4">
            Il modo più veloce. Scrivimi e allega foto/progetto.
          </p>
          <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold">
            Apri Chat →
          </div>
        </a>

        {/* Email Card */}
        <a 
          href="mailto:info@tuaemail.it?subject=Richiesta Info Progetto Cucina"
          className="block bg-blue-50 border-2 border-blue-500 rounded-xl p-8 text-center hover:bg-blue-100 transition-colors"
        >
          <div className="text-5xl mb-4">📧</div>
          <h2 className="text-2xl font-bold mb-2">Email</h2>
          <p className="text-gray-700 mb-4">
            Per inviare file pesanti o richieste dettagliate.
          </p>
          <div className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">
            info@tuaemail.it
          </div>
        </a>
      </div>

      {/* Form Semplice */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Oppure scrivimi da qui</h3>
        
        <form action="https://formspree.io/f/TUOID" method="POST" className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold mb-2">Nome</label>
            <input 
              type="text" 
              id="nome"
              name="nome" 
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Mario Rossi"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="tua@email.it"
            />
          </div>

          <div>
            <label htmlFor="servizio" className="block text-sm font-semibold mb-2">Servizio di interesse</label>
            <select 
              id="servizio"
              name="servizio"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">Seleziona...</option>
              <option value="distribuzione-97">Distribuzione 97€</option>
              <option value="check-up-147">Check-up 147€</option>
              <option value="capitolato-47">Add-on Capitolato 47€</option>
              <option value="blindatura-297">Blindatura 297€</option>
              <option value="progetto-890">Progetto da Zero 890€</option>
              <option value="consulenza">Non so, consigliami tu</option>
            </select>
          </div>

          <div>
            <label htmlFor="messaggio" className="block text-sm font-semibold mb-2">Messaggio</label>
            <textarea 
              id="messaggio"
              name="messaggio" 
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Raccontami in breve la situazione. Hai già un progetto? Hai firmato? Quanto è grande la cucina?"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            Invia Richiesta →
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Cliccando invia accetti la Privacy Policy. Ti rispondo entro 2h lavorative.
        </p>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>Orari risposta: Lun-Ven 9:00-18:00</p>
        <p className="mt-2">
          <Link href="/privacy" className="underline hover:text-gray-700">Privacy Policy</Link>
        </p>
      </div>
    </main>
  )
}