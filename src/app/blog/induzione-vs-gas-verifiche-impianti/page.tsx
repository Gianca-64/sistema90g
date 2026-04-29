 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Induzione vs Gas: verifiche impianti obbligatorie',
  description: 'Potenza elettrica, sezione cavi, volume ambiente e canna fumaria. Cosa verificare sull\'impianto prima di decidere tra induzione e gas.'
}

export default function InduzioneGas() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-4">
        <Link href="/blog" className="text-sm text-gray-500 hover:underline">← Blog</Link>
      </div>

      <article className="prose prose-lg prose-gray">
        <div className="text-xs text-green-700 font-semibold mb-2 uppercase">IMPIANTI</div>
        <h1 className="mb-6">Induzione vs Gas: verifiche impianti obbligatorie</h1>
        
        <div className="relative w-full h-96 rounded-lg overflow-hidden my-8 not-prose">
          <Image 
            src="/hero-induzione-800.jpeg" 
            alt="Piano induzione con schema impianto elettrico"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <p className="lead">
          Scegliere induzione o gas non è questione di gusto. È questione di impianto. 
          Verifica questi punti prima di ordinare gli elettrodomestici.
        </p>
        
        <h2>Se scegli INDUZIONE verifica:</h2>
        <ul>
          <li><strong>Potenza contatore:</strong> Minimo 4,5 kW. Con 3 kW salta la luce con forno + piano accesi.</li>
          <li><strong>Sezione cavi:</strong> 6mm² dedicati dal quadro al piano. Con 2,5mm² rischio surriscaldamento.</li>
          <li><strong>Interruttore dedicato:</strong> Magnetotermico 32A solo per il piano. Non condividere con altre prese.</li>
          <li><strong>Pentole:</strong> Servono fondo ferroso. Quelle in alluminio non funzionano.</li>
        </ul>
        
        <h2>Se scegli GAS verifica:</h2>
        <ul>
          <li><strong>Volume ambiente:</strong> Minimo 15 m³ secondo UNI 7129. In cucine piccole il gas ha vincoli normativi.</li>
          <li><strong>Apertura ventilazione:</strong> 100 cm² di presa d'aria verso esterno, non chiudibile.</li>
          <li><strong>Canna fumaria:</strong> Se c'è cappa, deve scaricare all'esterno. A ricircolo solo con deroga.</li>
          <li><strong>Distanza da finestra:</strong> Minimo 50cm tra fiamma e tenda. Norma antincendio.</li>
        </ul>
        
        <h2>Il test che fa il tecnico</h2>
        <p>
          Prima di ordinare, misura: somma la potenza di forno + lavastoviglie + piano induzione. 
          Se superi l'80% del contatore, serve adeguamento.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg my-12 not-prose">
          <h3 className="text-xl font-semibold mb-4">Servizio: Check-up Progetto</h3>
          <p className="mb-6">
            Analizzo impianto elettrico, gas e volumi. Ti dico cosa installare senza rischi e senza modifiche dopo.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold">147€</span>
            <Link 
              href="/servizi/check-up-cucina"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 font-semibold"
            >
              Scopri il servizio →
            </Link>
          </div>
        </div>

        <p>
          <strong>Gian Carlo Primo</strong><br/>
          Tecnico indipendente. Verifico impianti per evitare adeguamenti post-vendita.
        </p>
      </article>
    </main>
  )
}