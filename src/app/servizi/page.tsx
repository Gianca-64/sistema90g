 export const metadata = {
  title: 'Servizi | Analisi Tecniche Indipendenti',
  description: 'Distribuzione 97€, Check-up 147€, Blindatura 297€, Progetto da Zero 890€.'
}

export default function Servizi() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">I Livelli di Servizio</h1>
      <p className="text-center text-gray-600 mb-12 text-lg">Scegli l'analisi giusta per il tuo progetto</p>
      
      <div className="space-y-6">
        
        {/* 1. Distribuzione 97€ */}
        <div className="border-2 border-blue-200 rounded-lg p-8 bg-blue-50">
          <p className="text-blue-600 text-sm font-bold mb-2">LIVELLO 1</p>
          <h2 className="text-3xl font-serif mb-3">Distribuzione 97€</h2>
          <p className="text-gray-700 mb-4">Verifica pianta/distribuzione appartamento. 12 punti di controllo su impianti, norme, flussi.</p>
          <p className="font-bold text-3xl text-blue-600 mb-4">97€</p>
          <ul className="text-sm text-gray-600 mb-6 space-y-1">
            <li>✓ Report PDF 15 pagine in 24h</li>
            <li>✓ Call 30min per spiegazione</li>
            <li>✓ Lista errori + correzioni</li>
          </ul>
          <a href="https://wa.me/393275478485?text=Distribuzione%2097%E2%82%AC" 
             target="_blank"
             className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Richiedi su WhatsApp
          </a>
        </div>
        
        {/* 2. Check-up 147€ */}
        <div className="border-2 border-slate-300 rounded-lg p-8 bg-slate-50">
          <p className="text-slate-600 text-sm font-bold mb-2">LIVELLO 2</p>
          <h2 className="text-3xl font-serif mb-3">Check-up 147€</h2>
          <p className="text-gray-700 mb-4">Hai già il progetto e vuoi evitare errori prima di firmare.</p>
          <p className="font-bold text-3xl text-slate-900 mb-4">147€</p>
          <ul className="text-sm text-gray-600 mb-6 space-y-1">
            <li>✓ Analisi tecnica progetto in 48h</li>
            <li>✓ Report PDF con errori trovati</li>
            <li>✓ Lista modifiche per il mobilificio</li>
            <li>✓ 1 call 30min per spiegazione</li>
          </ul>
          <a href="https://wa.me/393275478485?text=Check-up%20147%E2%82%AC" 
             target="_blank"
             className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Richiedi su WhatsApp
          </a>
        </div>

        {/* 3. Add-on 47€ */}
        <div className="border border-amber-300 rounded-lg p-6 bg-amber-50">
          <p className="text-amber-700 text-sm font-bold mb-2">ADD-ON</p>
          <h2 className="text-2xl font-serif mb-3">Add-on 47€</h2>
          <p className="text-gray-700 mb-4">Chi ha già pagato 147€ percepisce valore, non "altro costo".</p>
          <p className="font-bold text-2xl text-amber-700 mb-4">47€</p>
          <p className="text-sm text-gray-600 mb-4">Aggiungi revisione capitolato e clausole contrattuali al Check-up.</p>
          <a href="https://wa.me/393275478485?text=Add-on%2047%E2%82%AC" 
             target="_blank"
             className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Aggiungi al Check-up
          </a>
        </div>
        
        {/* 4. Blindatura 297€ */}
        <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
          <p className="text-green-700 text-sm font-bold mb-2">LIVELLO 3</p>
          <h2 className="text-3xl font-serif mb-3">Blindatura 297€</h2>
          <p className="text-gray-700 mb-4">Controllo completo progetto + revisione contratto.</p>
          <p className="font-bold text-3xl text-green-700 mb-4">297€</p>
          <ul className="text-sm text-gray-600 mb-6 space-y-1">
            <li>✓ Tutto del Check-up 147€</li>
            <li>✓ Revisione contratto mobilificio</li>
            <li>✓ Verifica capitolato e clausole</li>
            <li>✓ 2 call di supporto fino alla firma</li>
          </ul>
          <a href="https://wa.me/393275478485?text=Blindatura%20297%E2%82%AC" 
             target="_blank"
             className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Richiedi su WhatsApp
          </a>
        </div>
        
        {/* 5. Progetto da Zero 890€ */}
        <div className="border-2 border-purple-300 rounded-lg p-8 bg-purple-50">
          <p className="text-purple-700 text-sm font-bold mb-2">LIVELLO 4 - TOP</p>
          <h2 className="text-3xl font-serif mb-3">Progetto da Zero 890€</h2>
          <p className="text-gray-700 mb-4">Parti da zero? Progetto la cucina con te e ti do 3 preventivi da confrontare.</p>
          <p className="font-bold text-3xl text-purple-700 mb-4">890€</p>
          <ul className="text-sm text-gray-600 mb-6 space-y-1">
            <li>✓ Sopralluogo misure + esigenze</li>
            <li>✓ Progettazione 3D completa</li>
            <li>✓ Capitolato tecnico dettagliato</li>
            <li>✓ Invio a 3 mobilifici per preventivi</li>
            <li>✓ Analisi comparativa offerte</li>
          </ul>
          <a href="https://wa.me/393275478485?text=Progetto%20da%20Zero%20890%E2%82%AC" 
             target="_blank"
             className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Richiedi su WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}