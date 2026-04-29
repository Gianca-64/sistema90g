 import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Sistema90G',
  description: 'Informativa sul trattamento dei dati personali ai sensi del GDPR e uso di Google Analytics',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          ← Torna alla Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="text-sm text-gray-500">Ultimo aggiornamento: 29 Aprile 2026</p>

        <h2>1. Titolare del Trattamento</h2>
        <p>
          <strong>Sistema90G di [TUO NOME COGNOME]</strong><br />
          P.IVA: [TUA PARTITA IVA]<br />
          Sede: [TUO INDIRIZZO COMPLETO]<br />
          Email: [TUA EMAIL]<br />
          Il Titolare è responsabile del trattamento dei dati personali degli utenti del sito.
        </p>

        <h2>2. Tipologie di Dati Raccolti</h2>
        <p>Tramite questo sito raccogliamo:</p>
        <ul>
          <li><strong>Dati di contatto:</strong> nome, email, messaggio inserito volontariamente dall'utente nel form contatti</li>
          <li><strong>Dati tecnici di navigazione:</strong> indirizzo IP anonimizzato, tipo di browser, pagine visitate, tempo di permanenza, raccolti tramite Google Analytics 4</li>
          <li><strong>Dati via WhatsApp:</strong> se ci contatti su WhatsApp, raccogliamo il tuo numero di telefono e i messaggi inviati</li>
          <li><strong>Cookie:</strong> tecnici necessari e cookie di analisi statistica. Vedi <Link href="/cookie-policy" className="underline">Cookie Policy</Link></li>
        </ul>

        <h2>3. Finalità del Trattamento e Base Giuridica</h2>
        <p>I dati sono trattati per:</p>
        <ul>
          <li><strong>Rispondere alle richieste:</strong> base giuridica esecuzione di misure precontrattuali art. 6.1.b GDPR</li>
          <li><strong>Analisi statistiche aggregate:</strong> tramite Google Analytics 4 con IP anonimizzato, base giuridica consenso art. 6.1.a GDPR raccolto tramite cookie banner</li>
          <li><strong>Adempiere obblighi di legge:</strong> contabili, fiscali, base giuridica obbligo legale art. 6.1.c GDPR</li>
          <li><strong>Garantire funzionamento tecnico:</strong> cookie tecnici necessari, base giuridica legittimo interesse art. 6.1.f GDPR</li>
        </ul>

        <h2>4. Modalità di Trattamento e Conservazione</h2>
        <p>
          I dati sono trattati con strumenti informatici e telematici. I dati del form sono conservati per 24 mesi dall'ultimo contatto. 
          I dati di Google Analytics sono conservati per 14 mesi con IP anonimizzato. 
          I dati del form sono gestiti tramite Formspree, servizio terzo con server in UE che agisce come responsabile del trattamento.
        </p>

        <h2>5. Comunicazione e Trasferimento Dati</h2>
        <p>
          I dati non sono diffusi. Possono essere comunicati a: consulenti fiscali, commercialisti, fornitori di hosting, Formspree, Google LLC. 
          Google Analytics può comportare trasferimento dati negli USA. Google aderisce al Data Privacy Framework e usa clausole contrattuali standard approvate dalla Commissione UE. 
          Con IP anonimizzato il rischio è minimizzato.
        </p>

        <h2>6. Diritti dell'Interessato</h2>
        <p>Ai sensi degli artt. 15-22 GDPR, hai diritto di:</p>
        <ul>
          <li>Accedere ai tuoi dati e ottenere copia</li>
          <li>Chiederne rettifica o cancellazione</li>
          <li>Limitazione del trattamento o opposizione</li>
          <li>Portabilità dei dati</li>
          <li>Revocare il consenso ai cookie in qualsiasi momento dal banner</li>
          <li>Proporre reclamo al Garante per la Protezione dei Dati Personali www.garanteprivacy.it</li>
        </ul>
        <p>
          Per esercitare i diritti scrivi a: <strong>[TUA EMAIL]</strong>. Rispondiamo entro 30 giorni.
        </p>

        <h2>7. Cookie e Google Analytics 4</h2>
        <p>
          Questo sito utilizza cookie tecnici necessari al funzionamento e Google Analytics 4 per analisi statistiche aggregate del traffico.
        </p>
        <p>
          <strong>Google Analytics 4:</strong> attiviamo GA4 solo dopo tuo consenso espresso tramite il banner cookie. 
          Raccoglie dati anonimi su pagine visitate, tempo di permanenza, provenienza geografica generica, dispositivo usato. 
          L'indirizzo IP è anonimizzato prima della memorizzazione. Non usiamo funzioni di advertising o remarketing.
        </p>
        <p>
          Puoi negare o revocare il consenso in qualsiasi momento dal banner cookie o disabilitando i cookie dal browser. 
          Senza consenso, GA4 non si attiva e navighi comunque il sito.
        </p>
        <p>
          Per l'elenco completo dei cookie vedi la <Link href="/cookie-policy" className="underline">Cookie Policy</Link>.
        </p>

        <h2>8. Minori</h2>
        <p>
          I servizi sono rivolti a maggiorenni. Non raccogliamo consapevolmente dati di minori di 16 anni.
        </p>

        <h2>9. Modifiche</h2>
        <p>
          Il Titolare si riserva di modificare questa informativa. La versione aggiornata è sempre pubblicata su questa pagina con data di ultimo aggiornamento.
        </p>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-semibold mb-2">Dubbi sulla privacy?</p>
          <p>
            Scrivici a <strong>[TUA EMAIL]</strong> o usa la <Link href="/contatti" className="underline">pagina contatti</Link>. 
            Per gestire i cookie usa il banner in fondo alla pagina o vedi la <Link href="/cookie-policy" className="underline">Cookie Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}