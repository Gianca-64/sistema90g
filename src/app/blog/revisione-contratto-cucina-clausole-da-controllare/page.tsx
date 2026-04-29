 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Revisione contratto cucina: clausole da controllare',
  description: 'Penali, tempi di consegna, cosa è incluso nel prezzo. Come leggere il contratto della cucina per evitare contestazioni al montaggio.'
}

export default function RevisioneContratto() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-4">
        <Link href="/blog" className="text-sm text-gray-500 hover:underline">← Blog</Link>
      </div>

      <article className="prose prose-lg prose-gray">
        <div className="text-xs text-green-700 font-semibold mb-2 uppercase">CONTRATTO</div>
        <h1 className="mb-6">Revisione contratto cucina: clausole da controllare</h1>
        
        <div className="relative w-full h-96 rounded-lg overflow-hidden my-8 not-prose">
          <Image 
            src="/hero-contratto-800.jpeg" 
            alt="Revisione contratto cucina con clausole evidenziate"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <p className="lead">
          Il progetto è approvato. Il prezzo ti torna. Prima di firmare, controlla queste 3 clausole tecniche. 
          Non è questione di "truffa". È questione di chiarezza.
        </p>
        
        <h2>1. Clausola "Esclusioni": cosa NON è incluso nel prezzo</h2>
        <p>
          <strong>Cosa controllare:</strong> La voce "escluso quanto non espressamente indicato" è standard. 
          Significa che trasporto, montaggio, siliconatura, zoccolo e smaltimento imballi potrebbero essere esclusi.
        </p>
        <p>
          <strong>Come tutelarti:</strong> Chiedi di integrare: "Il presente contratto include trasporto, montaggio, 
          siliconatura top-parete, zoccolo, smaltimento imballi e vecchia cucina."
        </p>
        
        <h2>2. Penali per ritardo: devono essere reciproche</h2>
        <p>
          <strong>Cosa controllare:</strong> Verifica che le penali per ritardo consegna del mobilificio siano proporzionate 
          alle penali per ritardo pagamento del cliente.
        </p>
        <p>
          <strong>Standard equilibrato:</strong> 0,5% del valore contratto per ogni settimana di ritardo, da entrambe le parti. 
        </p>
        
        <h2>3. Clausola "Modifiche tecniche in corso d'opera"</h2>
        <p>
          <strong>Cosa significa:</strong> Se al montaggio il tecnico trova difformità del vano rispetto al rilievo, 
          i costi di adattamento sono a carico del committente.
        </p>
        <p>
          <strong>Come limitarla:</strong> Aggiungi: "Modifiche tecniche a carico committente solo per difformità 
          non rilevabili al rilievo misure eseguito dal fornitore."
        </p>

        <h2>Il mio ruolo</h2>
        <p>
          Non faccio l'avvocato. Faccio il controllo tecnico. Verifico che il contratto sia chiaro su cosa è incluso, 
          quali sono le penali e chi paga gli imprevisti. L'obiettivo è che tu e il mobilificio siate allineati prima di partire.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg my-12 not-prose">
          <h3 className="text-xl font-semibold mb-4">Servizio: Blindatura Contratto</h3>
          <p className="mb-6">
            Controllo completo progetto cucina + revisione contratto. Verifico capitolato e clausole tecniche 
            + 2 call di supporto fino alla firma.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold">297€</span>
            <Link 
              href="/servizi/blindatura"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 font-semibold"
            >
              Scopri il servizio →
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-3">Include Check-up Progetto 147€</p>
        </div>

        <p>
          <strong>Gian Carlo Primo</strong><br/>
          Tecnico indipendente. Verifico contratti per allineare cliente e fornitore prima della firma.
        </p>
      </article>
    </main>
  )
}