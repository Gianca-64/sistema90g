 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Capitolato cucina: cosa controllare prima di firmare',
  description: 'Spessori, ferramenta, maniglie, zoccolo. Cosa controllare nel capitolato della cucina prima di firmare per evitare contestazioni al montaggio.'
}

export default function CapitolatoCucina() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-4">
        <Link href="/blog" className="text-sm text-gray-500 hover:underline">← Blog</Link>
      </div>

      <article className="prose prose-lg prose-gray">
        <div className="text-xs text-green-700 font-semibold mb-2 uppercase">CAPITOLATO</div>
        <h1 className="mb-6">Capitolato cucina: cosa controllare prima di firmare</h1>
        
        <div className="relative w-full h-96 rounded-lg overflow-hidden my-8 not-prose">
          <Image 
            src="/hero-capitolato-800.jpeg" 
            alt="Capitolato tecnico cucina con specifiche ferramenta"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <p className="lead">
          Il capitolato è l'allegato tecnico del contratto. Se non c'è scritto, non è incluso. 
          Queste 5 voci mancano nel 70% dei capitolati. Controlla prima di firmare.
        </p>
        
        <h2>1. Spessore ante e fianchi</h2>
        <p>
          <strong>Standard economico:</strong> 18mm. Dopo 2 anni tende a imbarcarsi.<br/>
          <strong>Standard buono:</strong> 22mm. Dura nel tempo.<br/>
          Se non c'è scritto, verifica quale spessore è previsto.
        </p>
        
        <h2>2. Ferramenta: guide e cerniere</h2>
        <p>
          <strong>Economiche:</strong> Guide a rullo, cerniere senza ammortizzatore. Durata limitata.<br/>
          <strong>Buone:</strong> Guide estrazione totale, cerniere con ammortizzatore.<br/>
          Chiedi marca e modello specifici nel capitolato.
        </p>

        <h2>3. Zoccolo: altezza e materiale</h2>
        <p>
          Zoccolo da 8cm in truciolare: sensibile all'acqua del mocio.<br/>
          Zoccolo da 15cm in PVC o alluminio: più resistente.<br/>
          Verifica che sia specificato materiale e altezza.
        </p>

        <h2>4. Maniglie: tipologia e quantità</h2>
        <p>
          "Maniglie incluse" non significa nulla. Quali? Quante? 
          Se scegli dopo maniglie diverse da quelle base, verifica se è previsto sovrapprezzo.
        </p>

        <h2>5. Siliconatura e finiture</h2>
        <p>
          Se non c'è scritto "siliconatura top-parete inclusa", verifica se è compresa nel montaggio. 
          Idem per i profili di finitura. Chiedi elenco completo delle lavorazioni incluse.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg my-12 not-prose">
          <h3 className="text-xl font-semibold mb-4">Servizio: Add-on Capitolato</h3>
          <p className="mb-6">
            Hai già fatto il Check-up? Aggiungo la revisione completa del capitolato. 
            Ti dico cosa manca e cosa farti integrare prima della firma.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold">47€</span>
            <Link 
              href="/servizi/add-on-capitolato"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 font-semibold"
            >
              Scopri il servizio →
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-3">Solo per chi ha già Check-up Progetto</p>
        </div>

        <p>
          <strong>Gian Carlo Primo</strong><br/>
          Tecnico indipendente. Verifico capitolati per evitare contestazioni al montaggio.
        </p>
      </article>
    </main>
  )
}