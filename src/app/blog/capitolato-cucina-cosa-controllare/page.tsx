 import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Capitolato Cucina: 4 voci che ti costano 2000€ se mancano',
  description: 'Spessori ante, marca elettrodomestici, clausola smaltimento. Se non sono scritti nel capitolato, li paghi tu dopo.',
  alternates: { canonical: 'https://www.sistema90g.it/blog/capitolato-cucina-cosa-controllare' },
}

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="lg:flex lg:gap-12">
        <article className="lg:w-2/3">
          <div className="text-sm text-green-700 font-semibold mb-2 uppercase">CAPITOLATO</div>
          <h1 className="text-4xl font-serif font-bold mb-8">
            Capitolato cucina: 4 voci che ti costano 2000€ se mancano
          </h1>
          
          <div className="h-80 overflow-hidden rounded-lg bg-gray-100 relative mb-12">
            <Image 
              src="/blog/capitolato-cucina-hero.jpg"
              alt="Errori capitolato cucina evidenziati in rosso"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              "Cucina completa €12.000" non vuol dire niente. Se queste 4 voci non sono scritte nero su bianco, 
              il mobilificio monta quello che gli conviene e tu paghi gli extra dopo.
            </p>
            
            <h2>1. Spessori ante, fianchi e top - rischio €800</h2>
            <p>
              Se c'è scritto solo "anta bianca" ti montano laminato da 16mm. Quella giusta è 19mm con bordo ABS. 
              Top in "quarzo" può essere 12mm invece di 20mm. Differenza: 800€ e si crepa in 2 anni.
            </p>
            
            <h2>2. Ferramenta: guide e cerniere - rischio €400</h2>
            <p>
              "Cassetti con chiusura" non basta. Devono essere guide Blum con ammortizzatore. 
              Se manca la marca, ti mettono guide cinesi da 3€. Dopo 6 mesi il cassetto non chiude più.
            </p>
            
            <h2>3. Zoccolo, maniglie e finiture - rischio €300</h2>
            <p>
              Zoccolo in truciolare si gonfia con l'acqua. Chiedi "zoccolo in alluminio". 
              Maniglie: se non c'è modello e finitura, ti mettono quelle da 2€/pz invece di quelle da 25€.
            </p>

            <h2>4. Voci escluse e sovrapprezzi - rischio €500+</h2>
            <p>
              <strong>Smaltimento vecchia cucina:</strong> se non è scritto, sono 300€ tuoi.<br/>
              <strong>Allacci idraulici/elettrici:</strong> un allaccio costa 150€. Se ne hai 4 sono 600€.<br/>
              <strong>Trasporto al piano:</strong> senza ascensore sono 200€ a piano.
            </p>
          </div>
        </article>

        <aside className="lg:w-1/3 mt-12 lg:mt-0">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 sticky top-24">
            <p className="font-semibold mb-2">Trigger: "mi controlli il capitolato?"</p>
            <p className="text-gray-700 mb-4">
              <strong>ADD-ON CAPITOLATO €47</strong><br/>
              Carica il PDF del tuo capitolato. Verifico spessori, ferramenta, voci escluse e sovrapprezzi nascosti. 
            </p>
            <Link 
              href="/contatti" 
              className="inline-block bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800"
            >
              Revisione Capitolato €47 →
            </Link>
            <p className="text-xs text-gray-600 mt-3">
              Report con criticità + correzioni in 24h. Solo revisione tecnica. Max 600 char.
            </p>
          </div>
        </aside>
      </div>
    </main>
  )
}
