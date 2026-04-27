export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy di Sistema90G</h1>
        <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: 27 Aprile 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Titolare del Trattamento</h2>
          <p className="mb-4">
            Il titolare del trattamento dei dati è <strong>Gian Carlo</strong>, referente per Sistema90G.
          </p>
          <p>
            Email di contatto: <a href="mailto:sistema90g@icloud.com" className="underline">sistema90g@icloud.com</a><br/>
            WhatsApp: +39 347 284 3084
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Tipi di Dati Raccolti</h2>
          <p className="mb-4">Questo sito raccoglie i seguenti dati personali:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dati forniti volontariamente:</strong> nome, numero di telefono, indirizzo email, progetti e documenti inviati tramite WhatsApp o email per richiedere i servizi Check-up, Blindatura o Progetto da Zero.</li>
            <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, dispositivo, pagine visitate, tempo di permanenza. Raccolti tramite Google Analytics 4 in forma anonimizzata.</li>
            <li><strong>Cookie tecnici:</strong> necessari al funzionamento del sito. Non utilizziamo cookie di profilazione.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Finalità del Trattamento</h2>
          <p className="mb-4">I dati vengono trattati per:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rispondere a richieste di informazioni e preventivi inviate tramite WhatsApp o email.</li>
            <li>Erogare i servizi acquistati: Check-up 147€, Blindatura 297€, Progetto da Zero 890€.</li>
            <li>Adempiere ad obblighi di legge fiscali e contabili.</li>
            <li>Analizzare in forma aggregata e anonima il traffico del sito tramite Google Analytics 4 per migliorare il servizio.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Base Giuridica</h2>
          <p className="mb-4">Il trattamento si basa su:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consenso dell'interessato</strong> per contatti via WhatsApp/email e per Google Analytics.</li>
            <li><strong>Esecuzione di un contratto</strong> per l'erogazione dei servizi acquistati.</li>
            <li><strong>Obbligo legale</strong> per la conservazione di documenti fiscali.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Modalità di Trattamento e Conservazione</h2>
          <p className="mb-4">
            I dati sono trattati con strumenti informatici e conservati per il tempo necessario alle finalità indicate:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dati per preventivi non convertiti: 12 mesi.</li>
            <li>Dati clienti per servizi erogati: 10 anni per obblighi fiscali.</li>
            <li>Dati Google Analytics: 14 mesi in forma anonimizzata.</li>
          </ul>
          <p className="mt-4">
            I dati inviati tramite WhatsApp sono soggetti anche alla Privacy Policy di Meta Platforms Inc.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Comunicazione e Diffusione</h2>
          <p className="mb-4">
            I dati non sono diffusi. Possono essere comunicati a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google LLC</strong> per Google Analytics 4. Dati anonimizzati, server UE/USA con clausole contrattuali standard.</li>
            <li><strong>Meta Platforms Inc.</strong> per le conversazioni WhatsApp Business.</li>
            <li><strong>Vercel Inc.</strong> come fornitore di hosting del sito.</li>
            <li>Commercialista e consulenti per adempimenti fiscali.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Diritti dell'Interessato</h2>
          <p className="mb-4">
            Ai sensi degli artt. 15-22 GDPR, hai diritto di:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accedere ai tuoi dati personali.</li>
            <li>Chiederne rettifica o cancellazione.</li>
            <li>Opporti al trattamento o chiederne limitazione.</li>
            <li>Richiedere la portabilità dei dati.</li>
            <li>Revocare il consenso in qualsiasi momento.</li>
            <li>Proporre reclamo al Garante Privacy www.gpdp.it</li>
          </ul>
          <p className="mt-4">
            Per esercitare i diritti scrivi a: <a href="mailto:sistema90g@icloud.com" className="underline">sistema90g@icloud.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Google Analytics</h2>
          <p>
            Questo sito usa Google Analytics 4 con IP anonimizzato per analisi statistiche. 
            Puoi disattivare Google Analytics installando il componente aggiuntivo del browser per la disattivazione: 
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className="underline ml-1">https://tools.google.com/dlpage/gaoptout</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Modifiche</h2>
          <p>
            Il titolare si riserva il diritto di modificare questa Privacy Policy. Le modifiche saranno pubblicate su questa pagina.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t">
          <a href="/" className="text-blue-600 underline">← Torna alla Home</a>
        </div>
      </div>
    </main>
  )
}