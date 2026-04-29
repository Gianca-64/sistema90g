import Link from 'next/link'

export const metadata = {
  title: 'Distanze minime camera da letto: norme che bloccano l\'abitabilità',
  description: 'Verifica tecnica delle distanze letto-pareti, armadio-passaggio e aperture secondo DM 1975.'
}

export default function Articolo() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-green-700 text-sm mb-6 inline-block">← Torna al blog</Link>
      
      <p className="text-sm text-slate-500 mb-2">Normative · 22 Aprile 2026 · 5 min</p>
      <h1 className="text-4xl font-bold mb-6 leading-tight">Distanze minime camera da letto: norme che bloccano l'abitabilità</h1>
      
      <div className="prose prose-lg prose-slate">
        <p className="lead">Se sbagli queste distanze, la camera non è abitabile per legge. E il comune ti blocca l'agibilità. Costo per sistemare: 8.000€ di opere murarie.</p>
        
        <h2>Distanze minime DM 5 luglio 1975:</h2>
        <ul>
          <li><strong>Letto matrimoniale - parete:</strong> Minimo 60cm su 3 lati. Se ne hai solo 2, la camera è singola.</li>
          <li><strong>Armadio - letto:</strong> Minimo 70cm per passaggio. Sotto, non apri le ante.</li>
          <li><strong>Porta - letto:</strong> Minimo 90cm per apertura completa anta + passaggio persona.</li>
          <li><strong>Finestra:</strong> Superficie aeroilluminante minimo 1/8 della superficie pavimento. 12m² = 1,5m² di finestra.</li>
          <li><strong>Altezza:</strong> Minimo 2,70m. Sotto 2,40m non è abitabile, solo ripostiglio.</li>
        </ul>
        
        <h2>Errori che invalidano l'agibilità:</h2>
        <p>1. <strong>Letto a isola con meno di 60cm dietro:</strong> Non rifai il letto, ma per il catasto non è camera.<br/>
        2. <strong>Armadio davanti a finestra:</strong> Riduci aeroilluminazione sotto 1/8 = camera non abitabile.<br/>
        3. <strong>Cabina armadio senza finestra:</strong> È ripostiglio, non camera, anche se ci metti il letto.</p>
        
        <div className="bg-blue-50 p-6 rounded-lg mt-12 not-prose">
          <h3 className="font-bold text-xl mb-2">La tua camera rispetta le norme?</h3>
          <p className="mb-4">Controllo la planimetria e verifico distanze + norme abitabilità. Report PDF in 24h. 97€</p>
          <a href="https://wa.me/393275478485?text=Analisi%20Distribuzione%2097%E2%82%AC" 
             target="_blank"
             className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Richiedi Analisi 97€
          </a>
        </div>
      </div>
    </main>
  )
}