 export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* HEADER SEMPLICE */}
      <header className="px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-sm leading-tight">
          <p className="font-semibold">Consulenza Tecnica</p>
          <p className="text-gray-600">Indipendente</p>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/">Home</a>
          <a href="#analisi">Analisi</a>
          <a href="#contatti">Contatti</a>
        </nav>
      </header>

      {/* HERO - Analisi Tecniche */}
      <section className="px-6 py-20 md:py-32 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Analisi Tecniche</h1>
          <p className="text-lg text-gray-600">
            Consulenze, analisi tecniche, e analisi preventive
          </p>
        </div>
      </section>

      {/* SEZIONE LIVELLI - Quella che vuoi tu */}
      <section id="livelli" className="px-6 py-16 max-w-6xl mx-auto">
        
        {/* Blocco 1: Open space */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop" 
              alt="Planimetria con mano" 
              className="w-full h-auto rounded"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Open space: 5 errori di distribuzione
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Leggi la distribuzione degli spazi e gli errori tecnici che fanno perdere 
              fino a 13.000 euro, creando frustrazioni e 17.000 euro di costi aggiuntivi 
              legati a soluzioni correttive spesso non risolutive.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-semibold">Leggi:</span>
              <span className="text-green-700 underline">Analisi Distribuzione</span>
              <span className="font-bold text-xl">97 €</span>
            </div>
          </div>
        </div>

        {/* Blocco 2: 7 Verifiche */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            7 Verifiche tecniche prima di progettare la cucina
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Fai le verifiche tecniche prima di iniziare il progetto per evitare 
            errori costosi e blocchi in cantiere con soluzioni tecniche adeguate.
          </p>
        </div>

        {/* Blocco 3: Prezzi */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop" 
              alt="Mobile soggiorno" 
              className="w-full h-auto rounded"
            />
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-green-700 text-sm mb-1">Faq</p>
              <h3 className="text-2xl font-serif mb-2">Optima: 1577 €</h3>
              <p className="text-gray-600 text-sm">
                Leggi come evitare gli errori più comuni di scelta e progettazione 
                per una casa perfetta e senza difetti.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-2">Check-up Progettazione</h3>
              <p className="text-gray-600 text-sm">
                Check-up progetto: 1477 €
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer id="contatti" className="px-6 py-12 bg-gray-50 text-center text-gray-600 text-sm">
        <p>Sistema90G © 2026 · Gian Carlo</p>
        <p className="mt-2">WhatsApp: +39 347 284 3084</p>
      </footer>

    </main>
  )
}