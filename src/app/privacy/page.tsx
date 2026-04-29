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
          Raccogliamo solo i dati che ci fornisci volontariamente tramite form di contatto: 
          nome, email, telefono, messaggio.
        </p>

        <h2>3. Finalità e Base Giuridica</h2>
        <ul>
          <li><strong>Rispondere alle richieste</strong> - Base: esecuzione di misure precontrattuali art. 6.1.b GDPR</li>
          <li><strong>Erogare i servizi acquistati</strong> - Base: esecuzione contratto art. 6.1.b GDPR</li>
        </ul>

        <h2>4. Conservazione</h2>
        <p>I dati di contatto sono conservati per 24 mesi dall'ultimo contatto.</p>

        <h2>5. Diritti dell'Interessato</h2>
        <p>
          Puoi richiedere accesso, rettifica o cancellazione scrivendo a sistema90@icloud.com. 
          Hai diritto di proporre reclamo al Garante Privacy.
        </p>

        <h2>6. Cookie</h2>
        <p>
          Il sito usa solo cookie tecnici necessari. Nessun cookie di profilazione. 
          Vedi <a href="/cookie-policy" className="underline">Cookie Policy</a>.
        </p>
      </div>
    </main>
  )
}