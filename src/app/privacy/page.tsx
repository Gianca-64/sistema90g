 export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4">Titolare del trattamento</h2>
            <p>Sistema90G di Gian Carlo</p>
            <p>Email: sistema90g@icloud.com</p>
            <p>WhatsApp: +39 347 284 3084</p>
            <p>P.IVA in apertura</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Dati raccolti</h2>
            <p className="mb-2"><strong>1. WhatsApp:</strong> Quando ci scrivi su WhatsApp, raccogliamo nome, numero e contenuto del messaggio per rispondere alla tua richiesta.</p>
            <p className="mb-2"><strong>2. Dati di navigazione:</strong> Google Analytics raccoglie dati anonimi su pagine visitate, durata, dispositivo. IP anonimizzato.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookie</h2>
            <p className="mb-2"><strong>Cookie tecnici:</strong> Necessari al funzionamento del sito. Non richiedono consenso.</p>
            <p className="mb-2"><strong>Google Analytics:</strong> Cookie analitici anonimizzati. Attivi solo dopo tuo consenso tramite banner. Puoi revocarli svuotando la cache del browser.</p>
            <p>Non usiamo cookie di profilazione o marketing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Finalità</h2>
            <p>I dati WhatsApp servono per fornirti il servizio di Check-up/Blindatura richiesto. I dati Analytics servono per migliorare il sito.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Conservazione</h2>
            <p>Chat WhatsApp: conservate per 24 mesi. Dati Analytics: 14 mesi su Google Analytics.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">I tuoi diritti</h2>
            <p>Puoi chiedere accesso, rettifica, cancellazione scrivendo a sistema90g@icloud.com. Hai diritto di proporre reclamo al Garante Privacy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Aggiornamento</h2>
            <p>Ultimo aggiornamento: 27 Aprile 2026</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <a href="/" className="text-blue-600 underline">← Torna alla Home</a>
        </div>
      </div>
    </main>
  )
}