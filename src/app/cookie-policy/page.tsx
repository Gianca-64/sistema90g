import Link from 'next/link'

export const metadata = {
  title: 'Cookie Policy - Sistema90G',
}

export default function CookiePolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          ← Torna alla Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <h2>Cosa sono i cookie</h2>
        <p>I cookie sono piccoli file di testo che i siti salvano sul tuo dispositivo.</p>

        <h2>Cookie utilizzati</h2>
        <table className="w-full text-left border">
          <thead>
            <tr className="border-b">
              <th className="p-2">Nome</th>
              <th className="p-2">Tipo</th>
              <th className="p-2">Durata</th>
              <th className="p-2">Finalità</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">sistema90g-cookie-consent</td>
              <td className="p-2">Tecnico</td>
              <td className="p-2">1 anno</td>
              <td className="p-2">Salva la tua scelta sul banner cookie</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">_ga, _gid, _gat</td>
              <td className="p-2">Analytics</td>
              <td className="p-2">2 anni / 24h / 1 min</td>
              <td className="p-2">Google Analytics 4, statistiche anonime</td>
            </tr>
          </tbody>
        </table>

        <h2>Come disabilitare i cookie</h2>
        <p>
          Puoi rifiutare i cookie non essenziali dal banner. Puoi anche cancellarli dalle impostazioni del browser. 
          Disabilitare i cookie tecnici può compromettere il funzionamento del sito.
        </p>

        <p className="mt-8">
          Per domande: <Link href="/contatti" className="underline">contattaci</Link>.
        </p>
      </div>
    </main>
  )
}