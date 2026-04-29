 export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-8">Privacy Policy</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: 29 aprile 2026</p>

        <h2>1. Titolare del Trattamento</h2>
        <p>
          <strong>Sistema90G di Gian Carlo Primo</strong><br/>
          Via F. Vanga 9, 38061 Ala (TN)<br/>
          Email: sistema90@icloud.com<br/>
          Tel: +39 327 547 8485<br/>
          Il titolare opera attualmente senza Partita IVA.
        </p>

        <h2>2. Dati Raccolti</h2>
        <p>
          Raccogliamo solo i dati che ci fornisci volontariamente tramite:
        </p>
        <ul>
          <li>Form di contatto: nome, email, telefono, messaggio</li>
          <li>Acquisto servizi: email per invio materiale digitale</li>
          <li>Navigazione: dati tecnici anonimi tramite cookie tecnici necessari</li>
        </ul>

        <h2>3. Finalità e Base Giuridica</h2>
        <p>Trattiamo i tuoi dati per:</p>
        <ul>
          <li><strong>Rispondere alle richieste</strong> - Base: esecuzione di misure precontrattuali art. 6.1.b GDPR</li>
          <li><strong>Erogare i servizi acquistati</strong> - Base: esecuzione contratto art. 6.1.b GDPR</li>
          <li><strong>Adempiere obblighi fiscali</strong> - Base: obbligo legale art. 6.1.c GDPR</li>
        </ul>

        <h2>4. Conservazione</h2>
        <p>
          I dati di contatto sono conservati per 24 mesi dall'ultimo contatto. 
          I dati fiscali per 10 anni come da normativa.
        </p>

        <h2>5. Diritti dell'Interessato</h2>
        <p>
          Puoi richiedere accesso, rettifica, cancellazione, limitazione o portabilità dei tuoi dati 
          scrivendo a sistema90@icloud.com. Hai diritto di proporre reclamo al Garante Privacy.
        </p>

        <h2>6. Cookie</h2>
        <p>
          Il sito usa solo cookie tecnici necessari al funzionamento. 
          Nessun cookie di profilazione o marketing. Vedi Cookie Policy.
        </p>

        <h2>7. Responsabili Esterni</h2>
        <p>
          Hosting: Vercel Inc. - USA, con clausole contrattuali standard UE.<br/>
          Pagamenti: Stripe Payments Europe Ltd. - Irlanda
        </p>
      </div>
    </main>
  )
}