 export default function CookiePolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-8">Cookie Policy</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: 29 aprile 2026</p>

        <h2>Titolare</h2>
        <p>
          <strong>Sistema90G di Gian Carlo Primo</strong><br/>
          Via F. Vanga 9, 38061 Ala (TN)<br/>
          Email: sistema90@icloud.com<br/>
          Tel: +39 327 547 8485
        </p>

        <h2>Cookie Utilizzati</h2>
        <p><strong>Questo sito usa SOLO cookie tecnici necessari:</strong></p>
        <ul>
          <li><strong>Next.js / Vercel:</strong> gestiscono sessione e sicurezza. Durata: sessione</li>
          <li><strong>Stripe:</strong> se acquisti, per processare il pagamento. Durata: sessione</li>
        </ul>
        <p><strong>NON usiamo:</strong> cookie di profilazione, marketing, analytics, social.</p>

        <h2>Base Giuridica</h2>
        <p>
          I cookie tecnici non richiedono consenso ai sensi dell'art. 122 Codice Privacy, 
          perché necessari al funzionamento del sito.
        </p>
      </div>
    </main>
  )
}