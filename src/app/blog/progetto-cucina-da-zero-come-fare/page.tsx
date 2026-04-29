import Link from 'next/link'

export const metadata = {
  title: 'Progetto cucina da zero: come farlo senza farti fregare dai mobilifici',
  description: 'Parti da zero? Ti progetto la cucina e ti faccio avere 3 preventivi confrontabili da mobilifici diversi. Sei tu che scegli.'
}

export default function Articolo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        
        <article className="lg:col-span-2">
          <Link href="/blog" className="text-green-700 text-sm mb-6 inline-block hover:underline">← Torna al blog</Link>
          <p className="text-sm text-slate-500 mb-2">Progettazione · 1 Gennaio 2026 · 7 min</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Progetto cucina da zero: come farlo senza farti fregare dai mobilifici
          </h1>
          
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed">
            <p className="text-lg leading-relaxed mb-6">
              Vai dal mobilificio e ti fa il progetto gratis. Poi scopri che quel progetto funziona solo con i suoi mobili. 
              Se vai da un altro, riparti da zero. <strong>Sei incastrato.</strong>
            </p>
            <p className="mb-8">
              Ecco come avere un progetto indipendente che puoi portare da 3 mobilifici diversi per confrontare i prezzi veri.
            </p>
            
            <h2>Il problema del "progetto gratis" del mobilificio</h2>
            <p>
              1. <strong>Quote personalizzate:</strong> Usa misure non standard che solo lui produce. Gli altri non riescono a quotare.<br/>
              2. <strong>Materiali proprietari:</strong> Specifica finiture che ha solo lui. Non puoi confrontare mele con mele.<br/>
              3. <strong>Nessun capitolato tecnico:</strong> Non ti dà l'elenco di spessori, ferramenta, cerniere. Non sai cosa stai comprando.
            </p>
            
            <h2>Come funziona un progetto indipendente</h2>
            <p>
              <strong>1. Sopralluogo misure:</strong> Rilevo io tutte le quote, impianti, scarichi. Non mi fido del tuo metro.<br/>
              <strong>2. Progettazione 3D:</strong> Disegno la cucina con misure standard che tutti i mobilifici possono fare.<br/>
              <strong>3. Capitolato tecnico:</strong> Scrivo spessori, ferramenta, cerniere, elettrodomestici. Uguale per tutti.<br/>
              <strong>4. Invio a 3 mobilifici:</strong> Stesso progetto, stesso capitolato. Ricevi 3 preventivi confrontabili.<br/>
              <strong>5. Analisi comparativa:</strong> Ti dico chi è più caro, chi ha tagliato qualità, chi conviene.
            </p>

            <h2>Quanto risparmi</h2>
            <p>
              Su cucina da 15.000€, la differenza tra mobilificio caro e onesto è <strong>3.500€ medi</strong>. 
              Il mio servizio costa 890€. <strong>ROI: 4x.</strong>
            </p>
            <p>
              Più eviti il lock-in: se il primo mobilificio ti tratta male, hai già altri 2 preventivi pronti.
            </p>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <p className="text-xs font-semibold text-green-700 mb-2">LIVELLO 4 - TOP</p>
            <h3 className="font-bold text-xl mb-3">Progetto da Zero 890€</h3>
            <p className="text-sm text-slate-700 mb-4">
              Parti da zero? Progetto la cucina con te. Sopralluogo + 3D + capitolato + 3 preventivi + analisi comparativa.
            </p>
            <Link 
              href="/servizi/progetto-da-zero"
              className="block w-full bg-green-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Progetto 890€
            </Link>
            <p className="text-xs text-slate-500 mt-3">Risparmi 3.500€ medi</p>
          </div>

          <div className="mt-8">
            <h4 className="font-bold mb-4">Hai già un progetto?</h4>
            <p className="text-sm text-slate-600 mb-3">
              Se il mobilificio ti ha già fatto il progetto, parti dal Check-up 147€
            </p>
            <Link href="/servizi/check-up-cucina" className="text-sm text-green-700 font-semibold hover:underline">
              Check-up 147€ →
            </Link>
          </div>
        </aside>

      </div>
    </div>
  )
}