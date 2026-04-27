 import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Evita 5.000€ di errori<br />sul progetto della tua cucina
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Sono Gian Carlo, tecnico progettista indipendente. Analizzo il progetto del tuo mobilificio e ti dico dove ti stanno fregando. Prima che firmi.
          </p>
          <a 
            href="https://wa.me/393472843084?text=Ciao%20Gian%20Carlo,%20voglio%20il%20Check-up%20cucina"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition"
          >
            Scrivi su WhatsApp per il Check-up 147€ →
          </a>
          <p className="text-sm text-gray-500 mt-4">Risposta entro 2h · Consegna report in 48h</p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Il 90% dei progetti cucina ha errori</h2>
          <div className="space-y-4 text-lg">
            <p>❌ Muri fuori squadro non rilevati → basi che non entrano</p>
            <p>❌ Scarichi nella posizione sbagliata → devi rompere il muro</p>
            <p>❌ Cappa troppo bassa → fuori norma, rischi incendio</p>
            <p>❌ Frigorifero che non apre → colonna da buttare</p>
          </div>
          <p className="mt-8 text-xl font-bold text-center">
            Costo medio di 1 errore: 5000€. <br />Li scopri solo al montaggio, quando è troppo tardi.
          </p>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Come ti salvo il progetto</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-lg border">
              <div className="text-blue-600 font-bold mb-2">CHECK-UP</div>
              <div className="text-4xl font-bold mb-4">147€</div>
              <ul className="space-y-3 mb-6">
                <li>✓ Analisi tecnica progetto</li>
                <li>✓ Report PDF errori rilevati</li>
                <li>✓ Lista modifiche da fare</li>
                <li>✓ Call 30min spiegazione</li>
                <li>✓ Consegna in 48h</li>
              </ul>
              <a 
                href="https://wa.me/393472843084?text=Voglio%20il%20Check-up%20147"
                className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800"
              >
                Inizia Check-up
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                PIÙ SCELTO
              </div>
              <div className="text-blue-600 font-bold mb-2">BLINDATURA</div>
              <div className="text-4xl font-bold mb-4">297€</div>
              <ul className="space-y-3 mb-6">
                <li>✓ Tutto del Check-up 147€</li>
                <li>✓ Revisione contratto mobilificio</li>
                <li>✓ 2 call supporto fino alla firma</li>
                <li>✓ Controllo clausole trappola</li>
                <li>✓ Priorità consegna 24h</li>
              </ul>
              <a 
                href="https://wa.me/393472843084?text=Voglio%20la%20Blindatura%20297"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700"
              >
                Blinda il progetto
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border">
              <div className="text-blue-600 font-bold mb-2">PROGETTO ZERO</div>
              <div className="text-4xl font-bold mb-4">890€</div>
              <ul className="space-y-3 mb-6">
                <li>✓ Sopralluogo misure</li>
                <li>✓ Progettazione 3D completa</li>
                <li>✓ Capitolato tecnico</li>
                <li>✓ Invio a 3 mobilifici</li>
                <li>✓ Analisi comparativa preventivi</li>
              </ul>
              <a 
                href="https://wa.me/393472843084?text=Voglio%20Progetto%20da%20Zero%20890"
                className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800"
              >
                Parti da zero
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* PROVA SOCIALE */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Dicono di me</h2>
          <div className="space-y-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg mb-4">"Gian Carlo mi ha trovato 3 errori sul progetto da 28.000€. Il mobilificio voleva farmi rifare il top in quarzo da 2.200€. Con il suo report ho fatto sistemare tutto gratis prima di firmare."</p>
              <p className="font-bold">— Marco, Roma</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg mb-4">"Pensavo fosse una spesa inutile. Invece mi ha salvato da una clausola che mi vincolava a pagare anche se consegnavano in ritardo di 6 mesi. Blindatura fatta in 24h."</p>
              <p className="font-bold">— Sara, Milano</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="px-6 py-20 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Hai già il progetto del mobilificio?</h2>
          <p className="text-xl mb-8">Mandamelo su WhatsApp. In 48h ti dico se ti stanno fregando.</p>
          <a 
            href="https://wa.me/393472843084?text=Ciao%20Gian%20Carlo,%20ho%20il%20progetto%20e%20voglio%20il%20Check-up"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition"
          >
            Scrivi su WhatsApp ora →
          </a>
        </div>
      </section>

      {/* FOOTER CON BLOG */}
      <footer className="px-6 py-12 bg-gray-900 text-gray-400 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">
            Sistema90G di Gian Carlo · Tecnico Progettista Indipendente · P.IVA in apertura
          </p>
          <p className="mb-6">
            Email: <a href="mailto:sistema90g@icloud.com" className="underline hover:text-white">sistema90g@icloud.com</a> · 
            WhatsApp: <a href="https://wa.me/393472843084" className="underline hover:text-white">+39 347 284 3084</a>
          </p>
          <div className="space-x-4">
            <Link href="/blog" className="underline hover:text-white">Blog</Link>
            <span>|</span>
            <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>
            <span>|</span>
            <Link href="/termini" className="underline hover:text-white">Termini e Condizioni</Link>
          </div>
          <p className="mt-6 text-xs text-gray-600">
            © 2026 Sistema90G. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </main>
  )
}