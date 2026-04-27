 export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Evita <span className="text-red-600">5.000€ di errori</span> sulla tua cucina
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Il sistema in 90 giorni che trasforma il progetto del mobilificio in una cucina perfetta, senza stress e senza fregature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/393472843084?text=Ciao%20Gian%20Carlo%2C%20ho%20visto%20il%20sito%20Sistema90G.%20Ho%20il%20progetto%20della%20cucina%20e%20vorrei%20il%20Check-up%20147%E2%82%AC%20prima%20di%20firmare."
               target="_blank"
               className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
              Scrivimi su WhatsApp
            </a>
            <a href="#livelli"
               className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
              Vedi i 3 Livelli
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Gian Carlo · Tecnico progettista da 20 anni · 127 cucine controllate senza un errore
          </p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Il mobilificio ti sta vendendo un disegno. <br/>Io controllo che la cucina funzioni.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📐</div>
              <h3 className="font-bold text-xl mb-2">Errori di quote</h3>
              <p className="text-gray-600">Anta che sbatte, colonna che non entra, top tagliato male. 1.200€ buttati minimo.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="font-bold text-xl mb-2">Preventivo gonfiato</h3>
              <p className="text-gray-600">Accessori inutili, elettrodomestici sovrapprezzati, “pacchetti” che non ti servono.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">😤</div>
              <h3 className="font-bold text-xl mb-2">Stress post-montaggio</h3>
              <p className="text-gray-600">Scopri i problemi quando è troppo tardi. E il venditore è sparito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUZIONE */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sistema90G: Controllo il progetto PRIMA che firmi
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Sono un tecnico progettista indipendente. Faccio da scudo tra te e gli errori del mobilificio. 
            In 90 giorni blindiamo misure, materiali e contratto.
          </p>
          <div className="bg-white rounded-xl p-8 shadow-lg text-left">
            <h3 className="font-bold text-2xl mb-4">Come funziona:</h3>
            <ol className="space-y-4 text-lg">
              <li><span className="font-bold">1. Mi mandi il progetto</span> del mobilificio su WhatsApp</li>
              <li><span className="font-bold">2. Faccio il Check-up tecnico</span> in 48h: quote, ergonomia, fregature nascoste</li>
              <li><span className="font-bold">3. Ti ridò il progetto corretto</span> + lista modifiche da far fare al venditore</li>
            </ol>
          </div>
        </div>
      </section>

      {/* LIVELLI */}
      <section id="livelli" className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Scegli il livello di controllo
          </h2>
          <p className="text-center text-gray-600 mb-12 text-xl">
            Da 147€ a 890€. Paghi solo quello che ti serve.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* CHECK-UP 147 */}
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition flex flex-col">
              <div className="flex-grow">
                <h3 className="font-bold text-2xl mb-2">Check-up 147€</h3>
                <p className="text-gray-600 mb-6">Hai già il progetto e vuoi evitare errori prima di firmare.</p>
                <div className="text-4xl font-extrabold mb-6">147€</div>
                <ul className="space-y-3 text-left mb-6">
                  <li>✓ Analisi tecnica progetto in 48h</li>
                  <li>✓ Report PDF con errori trovati</li>
                  <li>✓ Lista modifiche per il mobilificio</li>
                  <li>✓ 1 call 30min per spiegazione</li>
                </ul>
              </div>
              <a href="https://wa.me/393472843084?text=Ciao%20Gian%20Carlo%2C%20ho%20visto%20il%20sito%20Sistema90G.%20Ho%20il%20progetto%20della%20cucina%20e%20vorrei%20il%20Check-up%20147%E2%82%AC%20prima%20di%20firmare."
                 target="_blank"
                 className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-center block transition">
                Attiva Check-up 147€
              </a>
            </div>

            {/* BLINDATURA 297 */}
            <div className="border-2 border-amber-400 rounded-xl p-8 hover:shadow-xl transition relative bg-amber-50 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                PIÙ SCELTO
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-2xl mb-2">Blindatura 297€</h3>
                <p className="text-gray-600 mb-6">Controllo completo progetto + revisione contratto.</p>
                <div className="text-4xl font-extrabold mb-6">297€</div>
                <ul className="space-y-3 text-left mb-6">
                  <li>✓ Tutto del Check-up 147€</li>
                  <li>✓ Revisione contratto mobilificio</li>
                  <li>✓ Verifica capitolato e clausole</li>
                  <li>✓ 2 call di supporto fino alla firma</li>
                </ul>
              </div>
              <a href="https://wa.me/393472843084?text=Ciao%20Gian%20Carlo%2C%20voglio%20acquistare%20Blindatura%20Totale%20a%20297%E2%82%AC%20con%20revisione%20contratto."
                 target="_blank"
                 className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-bold text-center block transition">
                Attiva Blindatura 297€
              </a>
            </div>

            {/* PROGETTO DA ZERO 890 */}
            <div className="border-2 border-gray-800 rounded-xl p-8 hover:shadow-xl transition bg-gray-900 text-white flex flex-col">
              <div className="flex-grow">
                <h3 className="font-bold text-2xl mb-2">Progetto da Zero 890€</h3>
                <p className="text-gray-300 mb-6">Parti da zero? Progetto la cucina con te e ti do 3 preventivi da confrontare.</p>
                <div className="text-4xl font-extrabold mb-6">890€</div>
                <ul className="space-y-3 text-left mb-6 text-gray-200">
                  <li>✓ Sopralluogo misure + esigenze</li>
                  <li>✓ Progettazione 3D completa</li>
                  <li>✓ Capitolato tecnico dettagliato</li>
                  <li>✓ Invio a 3 mobilifici per preventivi</li>
                  <li>✓ Analisi comparativa offerte</li>
                </ul>
              </div>
              <a href="https://wa.me/393472843084?text=Ciao%20Gian%20Carlo%2C%20voglio%20partire%20da%20zero%20con%20Progetto%20da%20Zero%20890%E2%82%AC%20per%20la%20mia%20cucina."
                 target="_blank"
                 className="mt-6 w-full bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-bold text-center block transition">
                Richiedi Progetto 890€
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="px-6 py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            La cucina la compri una volta sola. <br/>Falla bene.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Mandami il progetto su WhatsApp. In 48h ti dico se stai per fare un errore da 5.000€.
          </p>
          <a href="https://wa.me/393472843084?text=Ciao%20Gian%20Carlo%2C%20ho%20visto%20il%20sito%20Sistema90G.%20Vorrei%20informazioni%20sul%20Check-up%20147%E2%82%AC."
             target="_blank"
             className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition inline-block">
            Scrivimi su WhatsApp ora
          </a>
          <p className="text-sm text-gray-400 mt-6">
            Rispondo personalmente entro 2 ore · Lun-Sab 9-19
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 bg-white border-t text-center text-gray-500 text-sm">
        <p>Sistema90G © 2026 · Gian Carlo</p>
        <p className="mt-2">
          <a href="/privacy" className="underline">Privacy</a> · 
          <a href="/termini" className="underline ml-2">Termini</a>
        </p>
      </footer>

    </main>
  )
}