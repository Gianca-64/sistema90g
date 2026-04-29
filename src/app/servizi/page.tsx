import Link from 'next/link'

export const metadata = {
  title: 'Servizi | Analisi Tecniche Indipendenti',
  description: 'Analisi Distribuzione 97€, Check-up Progetto 147€, Optima 1577€. Consulenza tecnica super partes.'
}

export default function Servizi() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">I Livelli di Servizio</h1>
      <p className="text-center text-gray-600 mb-12 text-lg">Scegli l'analisi giusta per il tuo progetto</p>
      
      <div className="space-y-8">
        {/* Livello 1: 97€ */}
        <div className="border-2 border-blue-200 rounded-lg p-8 hover:shadow-lg transition bg-blue-50">
          <p className="text-blue-600 text-sm font-bold mb-2">LIVELLO 1</p>
          <h2 className="text-3xl font-serif mb-3">Analisi Distribuzione</h2>
          <p className="text-gray-700 mb-4">Verifica tecnica planimetria appartamento. 12 punti di controllo su impianti, norme, flussi, abitabilità.</p>
          <p className="font-bold text-3xl text-blue-600 mb-4">97€</p>
          <ul className="text-sm text-gray-600 mb-6 space-y-1">
            <li>✓ Report PDF 15 pagine in 24h</li>
            <li>✓ Call 30min per spiegazione</li>
            <li>✓ Lista errori + correzioni</li>
          </ul>
          <a href="https://wa.me/393275478485?text=Analisi%20Distribuzione%2097%E2%82%AC" 
             target="_blank"
             className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Richiedi su WhatsApp
          </a>
        </div>
        
        {/* Livello 2: 147€ */}
        <div className="border-2 border-slate-300 rounded-lg p-8 hover:shadow-lg transition bg-slate-50">
          <p className="text-slate-600 text-sm font-bold mb-2">LIVELLO 2</p>
          <h2 className="text-3xl font-serif mb-3">Check-up Progetto</h2>
          <p className="text-gray-700 mb-4">Controllo tecnico completo progetto cucina prima dell'ordine. Quote, impianti, norme UNI, compatibilità.</p>
          <p className="font-bold text-3xl text-slate-900 mb-4">147€</p>
          <ul className="text-sm text-gray-600 mb-6 space-y-1">
            <li>✓ Revisione progetto DWG + PDF</li>
            <li>✓ Verifica 27 punti tecnici</li>
            <li>✓ Consegna 48h con correzioni</li>
            <li>✓ Call 45min con tecnico</li>
          </ul>
          <a href="https://wa.me/393275478485?text=Check-up%20Progetto%20147%E2%82%AC" 
             target="_blank"
             className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Richiedi su WhatsApp
          </a>
        </div>
        
        {/* Livello 3: 1577€ */}
        <div className="border-2 border-amber-300 rounded-lg p-8 hover:shadow-lg transition bg-amber-50">
          <p className="text-amber-700 text-sm font-bold mb-2">LIVELLO 3 - TOP</p>
          <h2 className="text-3xl font-serif mb-3">Optima</h2>
          <p className="text-gray-700 mb-4">Progettazione completa da zero + 3 preventivi comparati + assistenza fino al montaggio.</p>
          <p className="font-bold text-3xl text-amber-700 mb-4">1577€</p>
          <ul className="text-sm text-gray-600 mb-6 space-y-1">
            <li>✓ Sopralluogo misure laser</li>
            <li>✓ Progetto 3D con 3 varianti</li>
            <li>✓ Capitolato tecnico per mobilifici</li>
            <li>✓ 3 preventivi comparati</li>
            <li>✓ Analisi contratto pre-firma</li>
            <li>✓ Assistenza fino al montaggio</li>
          </ul>
          <a href="https://wa.me/393275478485?text=Optima%201577%E2%82%AC" 
             target="_blank"
             className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Richiedi su WhatsApp
          </a>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/blog" className="text-green-700 underline">Leggi gli articoli tecnici →</Link>
      </div>
    </main>
  )
}