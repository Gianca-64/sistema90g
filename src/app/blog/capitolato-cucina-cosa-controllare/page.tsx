import Link from 'next/link'

export const metadata = {
  title: 'Capitolato cucina: 5 voci che ti fanno pagare doppio dopo',
  description: 'Spessori, ferramenta, maniglie, zoccolo. Cosa controllare nel capitolato della cucina prima di firmare per evitare sorprese da 2.000€.'
}

export default function Articolo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        
        <article className="lg:col-span-2">
          <Link href="/blog" className="text-green-700 text-sm mb-6 inline-block hover:underline">← Torna al blog</Link>
          <p className="text-sm text-slate-500 mb-2">Capitolato · 3 Gennaio 2026 · 5 min</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Capitolato cucina: 5 voci che ti fanno pagare doppio dopo
          </h1>
          
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed">
            <p className="text-lg leading-relaxed mb-6">
              Il capitolato è l'allegato tecnico del contratto. Se non c'è scritto, non è incluso. 
              <strong> Errore medio: 2.200€ di extra</strong> che scopri al montaggio.
            </p>
            <p className="mb-8">
              Queste 5 voci mancano nel 70% dei capitolati. Controlla prima di firmare.
            </p>
            
            <h2>1. Spessore ante e fianchi</h2>
            <p>
              <strong>Standard economico:</strong> 18mm. Dopo 2 anni si imbarca.<br/>
              <strong>Standard buono:</strong> 22mm. Dura 15 anni.<br/>
              Se non c'è scritto, ti danno 18mm. Differenza di prezzo: <strong>800€</strong> che paghi dopo per cambiare.
            </p>
            
            <h2>2. Ferramenta: guide e cerniere</h2>
            <p>
              <strong>Economiche:</strong> Guide a rullo, cerniere senza ammortizzatore. Dopo 1 anno cigolano.<br/>
              <strong>Buone:</strong> Blum Tandem, cerniere con ammortizzatore. Silenziose per 20 anni.<br/>
              Se non specificato: <strong>600€</strong> per sostituirle dopo.
            </p>

            <h2>3. Zoccolo: altezza e materiale</h2>
            <p>
              Zoccolo da 8cm in truciolare: si gonfia con l'acqua del mocio in 6 mesi.<br/>
              Zoccolo da 15cm in PVC: eterno.<br/>
              Se non c'è scritto: ti danno 8cm truciolare. Sostituzione: <strong>350€.</strong>
            </p>

            <h2>4. Maniglie: tipologia e quantità</h2>
            <p>
              "Maniglie incluse" non significa nulla. Quali? Quante? 
              Se scegli dopo maniglie diverse da quelle base: <strong>+25€ cad</strong>. Su 20 ante sono 500€.
            </p>

            <h2>5. Siliconatura e finiture</h2>
            <p>
              Se non c'è scritto "siliconatura top-parete inclusa", il montatore la fa e ti chiede <strong>150€</strong> cash. 
              Idem per i profili di finitura. Chiedi elenco completo.
            </p>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <p className="text-xs font-semibold text-green-700 mb-2">ADD-ON</p>
            <h3 className="font-bold text-xl mb-3">Add-on 47€</h3>
            <p className="text-sm text-slate-700 mb-4">
              Hai già fatto Check-up 147€? Aggiungo la revisione completa del capitolato. 
              Ti dico cosa manca e cosa farti integrare.
            </p>
            <Link 
              href="/servizi/add-on-capitolato"
              className="block w-full bg-green-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Aggiungi 47€
            </Link>
            <p className="text-xs text-slate-500 mt-3">Solo per chi ha Check-up 147€</p>
          </div>

          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-slate-700 mb-1">Non hai ancora il Check-up?</p>
            <p className="text-xs text-slate-600 mb-3">
              Parti dal controllo progetto completo. 147€
            </p>
            <Link href="/servizi/check-up-cucina" className="text-xs text-green-700 font-semibold hover:underline">
              Check-up 147€ →
            </Link>
          </div>
        </aside>

      </div>
    </div>
  )
}