 import Link from 'next/link'

export const metadata = {
  title: 'Contratto cucina: 3 clausole tecniche da verificare prima della firma',
  description: 'Penali, tempi di consegna, cosa è incluso nel prezzo. Come leggere il contratto della cucina per evitare extra non previsti.'
}

export default function Articolo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        
        <article className="lg:col-span-2">
          <Link href="/blog" className="text-green-700 text-sm mb-6 inline-block hover:underline">← Torna al blog</Link>
          <p className="text-sm text-slate-500 mb-2">Contratto · 5 Gennaio 2026 · 6 min</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Contratto cucina: 3 clausole tecniche da verificare prima della firma
          </h1>
          
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed">
            <p className="text-lg leading-relaxed mb-6">
              Il progetto è approvato. Il prezzo ti torna. Prima di firmare, controlla queste 3 clausole tecniche. 
              <strong> Ti evitano extra medi di 1.800€</strong> che scopri solo al montaggio.
            </p>
            <p className="mb-8">
              Non è questione di "truffa". È questione di chiarezza. Se non è scritto, non è incluso.
            </p>
            
            <h2>1. Clausola "Esclusioni": cosa NON è incluso nel prezzo</h2>
            <p>
              <strong>Cosa controllare:</strong> La voce "escluso quanto non espressamente indicato" è standard. 
              Significa che trasporto, montaggio, siliconatura, zoccolo e smaltimento imballi potrebbero essere esclusi.
            </p>
            <p>
              <strong>Come tutelarti:</strong> Chiedi di integrare: "Il presente contratto include trasporto, montaggio, 
              siliconatura top-parete, zoccolo, smaltimento imballi e vecchia cucina. Eventuali costi extra devono essere 
              preventivati e approvati per iscritto prima dell'esecuzione."
            </p>
            <p>
              <strong>Perché serve:</strong> Evita discussioni al montaggio. Il mobilificio lavora sereno, tu sai quanto spendi.
            </p>
            
            <h2>2. Penali per ritardo: devono essere reciproche</h2>
            <p>
              <strong>Cosa controllare:</strong> Verifica che le penali per ritardo consegna del mobilificio siano proporzionate 
              alle penali per ritardo pagamento del cliente.
            </p>
            <p>
              <strong>Standard equilibrato:</strong> 0,5% del valore contratto per ogni settimana di ritardo, da entrambe le parti. 
              Se il mobilificio propone 50€ fissi per suo ritardo e 500€ per tuo ritardo, chiedi di ribilanciare.
            </p>
            
            <h2>3. Clausola "Modifiche tecniche in corso d'opera"</h2>
            <p>
              <strong>Cosa significa:</strong> Se al montaggio il tecnico trova difformità del vano rispetto al rilievo, 
              i costi di adattamento sono a carico del committente.
            </p>
            <p>
              <strong>Come limitarla:</strong> Aggiungi: "Modifiche tecniche a carico committente solo per difformità 
              non rilevabili al rilievo misure eseguito dal fornitore. Difformità rilevabili al rilievo sono a carico fornitore."
            </p>
            <p>
              <strong>Perché è giusto per entrambi:</strong> Se il muro è storto e il mobilificio non l'ha misurato, 
              è sua responsabilità. Se trovi un tubo dove non doveva esserci, è un imprevisto reale e lo paghi tu.
            </p>

            <h2>Il mio ruolo</h2>
            <p>
              Non faccio l'avvocato. Faccio il controllo tecnico. Verifico che il contratto sia chiaro su cosa è incluso, 
              quali sono le penali e chi paga gli imprevisti. <strong>L'obiettivo è che tu e il mobilificio siate allineati prima di partire.</strong>
            </p>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <p className="text-xs font-semibold text-green-700 mb-2">LIVELLO 3</p>
            <h3 className="font-bold text-xl mb-3">Blindatura 297€</h3>
            <p className="text-sm text-slate-700 mb-4">
              Controllo completo progetto CUCINA + revisione contratto. Verifico capitolato e clausole tecniche 
              + 2 call di supporto fino alla firma.
            </p>
            <Link 
              href="/servizi/blindatura"
              className="block w-full bg-green-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Blindatura 297€
            </Link>
            <p className="text-xs text-slate-500 mt-3">Tutto del Check-up 147€ incluso</p>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-700 mb-1">Per Mobilifici</p>
            <p className="text-xs text-slate-700">
              Se sei un rivenditore e vuoi evitare contestazioni, uso lo stesso check per validare i tuoi contratti. 
              Clienti più sereni, meno problemi post-vendita.
            </p>
          </div>
        </aside>

      </div>
    </div>
  )
}