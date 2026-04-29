import Link from 'next/link'

export const metadata = {
  title: 'Piano induzione vs gas: verifiche tecniche su impianti e areazione',
  description: 'Analisi comparativa dei requisiti tecnici: potenza elettrica, sezione cavi, volume ambiente e canna fumaria.'
}

export default function Articolo() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-green-700 text-sm mb-6 inline-block">← Torna al blog</Link>
      
      <p className="text-sm text-slate-500 mb-2">Elettrodomestici · 24 Aprile 2026 · 6 min</p>
      <h1 className="text-4xl font-bold mb-6 leading-tight">Piano induzione vs gas: verifiche tecniche su impianti e areazione</h1>
      
      <div className="prose prose-lg prose-slate">
        <p className="lead">Scegliere induzione o gas non è questione di gusto. È questione di impianto. Se sbagli, rifai tutto: 3.000€ minimo.</p>
        
        <h2>Se scegli INDUZIONE verifica:</h2>
        <ul>
          <li><strong>Potenza contatore:</strong> Minimo 4,5 kW. Con 3 kW ti salta la luce ogni volta che accendi forno + piano.</li>
          <li><strong>Sezione cavi:</strong> 6mm² dedicati dal quadro. Con 2,5mm² rischi surriscaldamento e incendio.</li>
          <li><strong>Interruttore dedicato:</strong> Magnetotermico 32A solo per il piano. Non condividere con altre prese.</li>
          <li><strong>Pentole:</strong> Butta via quelle in alluminio. Servono fondo ferroso o non funziona nulla.</li>
        </ul>
        
        <h2>Se scegli GAS verifica:</h2>
        <ul>
          <li><strong>Volume ambiente:</strong> Minimo 15 m³ secondo UNI 7129. In cucine piccole il gas è vietato.</li>
          <li><strong>Apertura ventilazione:</strong> 100 cm² di presa d'aria verso esterno, non chiudibile. Senza non passa il collaudo.</li>
          <li><strong>Canna fumaria:</strong> Se c'è cappa, deve scaricare all'esterno. A ricircolo solo con deroga comunale.</li>
          <li><strong>Distanza da finestra:</strong> Minimo 50cm tra fiamma e tenda. Norma antincendio.</li>
        </ul>
        
        <p className="mt-8">Il 40% dei progetti sbaglia questa scelta e scopre il problema solo dopo aver comprato gli elettrodomestici.</p>
        
        <div className="bg-slate-50 p-6 rounded-lg mt-12 not-prose">
          <h3 className="font-bold text-xl mb-2">Vuoi sapere cosa va bene per la tua cucina?</h3>
          <p className="mb-4">Analizzo impianto elettrico, gas e volumi e ti dico cosa installare senza rischi. 147€</p>
          <a href="https://wa.me/393275478485?text=Check-up%20Progetto%20147%E2%82%AC" 
             target="_blank"
             className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Richiedi Check-up 147€
          </a>
        </div>
      </div>
    </main>
  )
}