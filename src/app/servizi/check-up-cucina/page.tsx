import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Check-Up Cucina 147€ - Analisi Preventiva Errori Progetto | Sistema90G',
  description: 'Hai già il progetto del mobiliere? Lo controlliamo prima che sia troppo tardi. Verifica misure, impianti, ergonomia. Report tecnico in 72h. Da 147€.',
  keywords: 'check up cucina, controllo progetto cucina, errori progetto cucina, analisi tecnica cucina, verifica misure cucina, 147 euro',
}
export default function CheckUpCucina() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          ← Torna alla Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        Check-up Cucina: Analisi Tecnica Completa 147€
      </h1>
      
      <Image 
        src="/servizi/check-up-hero.jpg" 
        alt="Check-up tecnico cucina con evidenziazione errori progettuali"
        width={1200} 
        height={600}
        className="rounded-lg mb-8"
        priority
      />

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Hai già un progetto ma qualcosa non ti convince? Trovo io gli errori prima che diventino un disastro da 5000€.
        </p>

        <h2>Cosa analizzo per 147€</h2>
        <ul>
          <li><strong>Misure e quote:</strong> Verifico che tutto torni al millimetro. 1cm sbagliato = 1000€ buttati.</li>
          <li><strong>Ergonomia e flussi:</strong> Triangolo di lavoro, aperture ante, spazi di passaggio. La cucina deve funzionare.</li>
          <li><strong>Impianti:</strong> Prese, acqua, gas, cappa. Se mancano o sono nel posto sbagliato, rifai tutto.</li>
          <li><strong>Compatibilità elettrodomestici:</strong> Il frigo che hai scelto entra davvero? E la lavastoviglie?</li>
        </ul>

        <h2>Cosa ricevi in 48h</h2>
        <p>
          PDF con report dettagliato: 5-8 pagine con mark-up sul tuo progetto. 
          Ogni errore evidenziato in rosso + soluzione tecnica per correggerlo. 
          Se è tutto ok, ti dico "vai tranquillo" e ti spiego perché.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
          <p className="font-semibold">Per chi è:</p>
          <p>Hai già un preventivo ma temi fregature. Oppure hai firmato e hai i primi dubbi. Meglio 147€ ora che 5000€ dopo.</p>
        </div>

        <h2>Come funziona</h2>
        <ol>
          <li>Paghi 147€ e carichi il progetto PDF + foto misure</li>
          <li>Analizzo tutto in 48h lavorative</li>
          <li>Ricevi il report con errori e correzioni</li>
        </ol>

        <div className="mt-10">
          <Link 
            href="/contatti" 
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800"
          >
            Richiedi Check-up Ora →
          </Link>
        </div>
      </div>
    </main>
  )
}