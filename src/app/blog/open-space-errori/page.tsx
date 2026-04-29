 import Link from 'next/link'

export const metadata = {
  title: 'Open space: 5 errori di distribuzione da evitare prima del cantiere',
  description: 'Analisi tecnica dei 5 errori di distribuzione più comuni negli open space. Isola, triangolo di lavoro, flussi e orientamenti corretti prima del cantiere.'
}

export default function OpenSpaceErrori() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-4">
        <Link href="/" className="text-sm text-gray-500 hover:underline">← Home</Link>
      </div>

      <article className="prose prose-lg prose-gray">
        <h1 className="mb-6">Open space: 5 errori di distribuzione da evitare prima del cantiere</h1>
        
        <img 
          src="/blog/open-space-errori.jpg" 
          alt="Schema open space con errori di distribuzione evidenziati"
          className="w-full h-auto rounded-lg my-8"
        />

        <p className="lead">
          Isola messa male, triangolo di lavoro interrotto, percorsi che si incrociano. 
          Ecco i 5 errori di distribuzione che compromettono la funzionalità dell'open space 
          e richiedono modifiche edili costose.
        </p>

        <p>
          Un open space progettato senza verifica tecnica obbliga a compromessi per tutta la durata 
          dell'abitazione. Il progetto del mobiliere segue l'estetica. La verifica tecnica controlla 
          che gli spazi siano vivibili.
        </p>

        <h2>1. Isola cucina che blocca il passaggio</h2>
        <p>
          La distanza minima tra isola e arredi perimetrali deve essere 120cm per garantire il passaggio 
          con vassoi e l'apertura delle ante. Con 60-80cm il passaggio è impedito. 
        </p>
        <p>
          <strong>Conseguenza tecnica:</strong> per correggere l'errore serve spostare l'isola. 
          Significa demolire il massetto, spostare scarico, adduzioni gas/acqua e linee elettriche già 
          predisposte, rifare il pavimento.
        </p>

        <h2>2. Triangolo di lavoro frigorifero-lavello-fuochi interrotto</h2>
        <p>
          Il triangolo di lavoro è il percorso che unisce le tre funzioni principali. Se l'isola o il tavolo 
          si interpongono, il percorso da lineare diventa tortuoso. Da 2 metri lineari si passa a 6 metri 
          per ogni spostamento.
        </p>
        <p>
          <strong>Conseguenza tecnica:</strong> inefficienza quotidiana permanente. L'unica correzione 
          è riprogettare la disposizione, con smantellamento e rifacimento degli impianti.
        </p>

        <h2>3. Orientamento errato tra zona cottura e zona soggiorno</h2>
        <p>
          L'open space nasce per unificare le attività. Se chi opera in cucina è rivolto verso il muro 
          e chi è sul divano è rivolto verso la TV, si creano due ambienti separati senza pareti.
        </p>
        <p>
          <strong>Conseguenza tecnica:</strong> mancato raggiungimento dell'obiettivo funzionale. 
          La correzione richiede l'inversione completa della distribuzione.
        </p>

        <h2>4. Piano cottura a isola senza predisposizione scarico cappa</h2>
        <p>
          Una cappa aspirante a isola richiede un foro a soffitto con tubo da 150mm di diametro fino 
          all'esterno. Se il foro non è previsto o è da 100mm, l'unica alternativa è la cappa a ricircolo.
        </p>
        <p>
          <strong>Conseguenza tecnica:</strong> carotaggio del solaio non previsto, oppure sistema a 
          ricircolo con sostituzione filtri a carbone ogni 3-6 mesi e prestazioni di aspirazione ridotte.
        </p>

        <h2>5. Tavolo da pranzo collocato nella zona di passaggio</h2>
        <p>
          Posizionare il tavolo nel corridoio naturale tra cucina e soggiorno blocca il flusso quando 
          i posti sono occupati. Per liberare il passaggio servono almeno 80cm dietro ogni sedia.
        </p>
        <p>
          <strong>Conseguenza tecnica:</strong> spostamento del tavolo richiede la rilocazione del punto 
          luce a soffitto e l'eventuale riparazione della pavimentazione se il lampadario era già installato.
        </p>

        <h2>Quando correggere: solo prima del cantiere</h2>
        <p>
          Dopo la posa dei pavimenti e degli impianti, ogni modifica alla distribuzione diventa un 
          intervento edile di demolizione e ricostruzione. La verifica preventiva evita contenziosi 
          con l'impresa e con il fornitore arredi.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg my-12 not-prose">
          <h3 className="text-xl font-semibold mb-4">Servizio: Analisi Distribuzione Open Space</h3>
          <p className="mb-6">
            Analizzo la pianta del tuo open space prima dell'inizio lavori. Verifico flussi, triangoli 
            di lavoro, passaggi minimi e orientamenti funzionali. Consegno elaborato grafico quotato 
            con le correzioni da apportare al progetto.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold">Da 97€</span>
            <a 
              href="https://wa.me/393275478485?text=Voglio%20l'Analisi%20Distribuzione%20Open%20Space"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Prenota su WhatsApp
            </a>
          </div>
        </div>

        <p>
          <strong>Gian Carlo Primo</strong><br/>
          Tecnico indipendente. Analizzo distribuzioni di appartamenti e ville per trovare soluzioni 
          ottimali e funzionali prima del cantiere.
        </p>
      </article>
    </main>
  )
}