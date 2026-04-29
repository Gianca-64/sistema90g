 import Link from 'next/link'

export const metadata = {
  title: 'Piano induzione: serve aumentare il contatore? Verifica prima di scegliere',
  description: 'Potenza elettrica, sezione cavi, volume ambiente e canna fumaria. Cosa verificare sull\'impianto prima di decidere tra induzione e gas.'
}

export default function Articolo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        
        <article className="lg:col-span-2">
          <Link href="/blog" className="text-green-700 text-sm mb-6 inline-block hover:underline">← Torna al blog</Link>
          <p className="text-sm text-slate-500 mb-2">Elettrodomestici · 24 Aprile 2026 · 6 min</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Piano induzione: serve aumentare il contatore? Verifica prima di scegliere
          </h1>
          
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed">
            <p className="text-lg leading-relaxed mb-6">
              Scegliere induzione o gas non è questione di gusto. È questione di impianto. 
              <strong> Se sbagli, rifai tutto: 3.000€ minimo.</strong>
            </p>
            <p className="mb-8">
              Il 40% dei progetti sbaglia questa scelta e scopre il problema solo dopo aver comprato gli elettrodomestici.
            </p>
            
            <h2>Se scegli INDUZIONE verifica:</h2>
            <ul>
              <li><strong>Potenza contatore:</strong> Minimo 4,5 kW. Con 3 kW ti salta la luce ogni volta che accendi forno + piano. Costo aumento: 500€ + tempi Enel.</li>
              <li><strong>Sezione cavi:</strong> 6mm² dedicati dal quadro al piano. Con 2,5mm² rischi surriscaldamento e incendio. Rifare linea: 800€.</li>
              <li><strong>Interruttore dedicato:</strong> Magnetotermico 32A solo per il piano. Non condividere con altre prese.</li>
              <li><strong>Pentole:</strong> Butta via quelle in alluminio. Servono fondo ferroso o non funziona nulla. Set nuovo: 300€.</li>
            </ul>
            
            <h2>Se scegli GAS verifica:</h2>
            <ul>
              <li><strong>Volume ambiente:</strong> Minimo 15 m³ secondo UNI 7129. In cucine piccole il gas è vietato per legge.</li>
              <li><strong>Apertura ventilazione:</strong> 100 cm² di presa d'aria verso esterno, non chiudibile. Senza non passa il collaudo.</li>
              <li><strong>Canna fumaria:</strong> Se c'è cappa, deve scaricare all'esterno. A ricircolo solo con deroga comunale che non ti danno.</li>
              <li><strong>Distanza da finestra:</strong> Minimo 50cm tra fiamma e tenda. Norma antincendio. Se non rispetti, l'assicurazione non paga.</li>
            </ul>
            
            <h2>Il test che fa il tecnico</h2>
            <p>
              Prima di ordinare, misura: somma la potenza di forno + lavastoviglie + piano induzione. 
              Se superi l'80% del contatore, salta tutto quando cucini la domenica.
            </p>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <p className="text-xs font-semibold text-green-700 mb-2">LIVELLO 2 CUCINA</p>
            <h3 className="font-bold text-xl mb-3">Check-up 147€</h3>
            <p className="text-sm text-slate-700 mb-4">
              Analizzo impianto elettrico, gas e volumi. Ti dico cosa installare senza rischi e senza rifare tutto dopo.
            </p>
            <Link 
              href="/servizi/check-up-cucina"
              className="block w-full bg-green-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Check-up 147€
            </Link>
            <p className="text-xs text-slate-500 mt-3">Report in 48h + lista modifiche</p>
          </div>

          <div className="mt-8">
            <h4 className="font-bold mb-4">Altri articoli</h4>
            <div className="space-y-4">
              <Link href="/blog/verifiche-misure-progetto-cucina" className="block group">
                <p className="text-sm font-semibold text-green-700">LIVELLO 2 CUCINA</p>
                <p className="text-sm group-hover:text-green-700 transition">
                  7 Verifiche misure progetto cucina prima di firmare
                </p>
              </Link>
              <Link href="/blog/errori-distribuzione-open-space-appartamento" className="block group">
                <p className="text-sm font-semibold text-green-700">LIVELLO 1</p>
                <p className="text-sm group-hover:text-green-700 transition">
                  Open space: 5 errori di distribuzione che costano 13.000€ dopo il rogito
                </p>
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </div>
  )
}