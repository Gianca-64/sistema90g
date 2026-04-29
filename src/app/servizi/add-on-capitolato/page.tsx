import Image from 'next/image'
import Link from 'next/link'

export default function AddOnCapitolato() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          ← Torna alla Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        Add-on: Capitolato Tecnico 47€
      </h1>
      
      <Image 
        src="/servizi/addon-capitolato-hero.jpg" 
        alt="Dettaglio tecnico capitolato cucina con specifiche ferramenta"
        width={1200} 
        height={600}
        className="rounded-lg mb-8"
        priority
      />

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Il venditore ti ha detto "cucina di qualità". Ma qualità di cosa? Questo capitolato ti fa capire se stai comprando oro o latta.
        </p>

        <h2>Cosa specifica il capitolato</h2>
        <ul>
          <li><strong>Materiali:</strong> Spessore pannelli, tipo di laccatura, bordatura. Nobilitato 18mm o tamburato 16mm?</li>
          <li><strong>Ferramenta:</strong> Marca cerniere e guide. Blum con soft-close o cinesata che cede dopo 6 mesi?</li>
          <li><strong>Top e alzatina:</strong> Laminato, quarzo, gres. Spessore reale e lavorazioni incluse.</li>
          <li><strong>Accessori:</strong> Cosa è incluso davvero. Cestoni, faretti, zoccolatura: se non c'è scritto, non c'è.</li>
        </ul>

        <h2>Perché ti serve</h2>
        <p>
          Senza capitolato firmato, il mobilificio può montarti quello che vuole. 
          "Uguale" non esiste. Con questo PDF di 3-4 pagine hai in mano un'arma legale: 
          se manca qualcosa, non paghi il saldo.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
          <p className="font-semibold">Nota:</p>
          <p>Questo servizio è add-on. Funziona solo se hai già fatto Distribuzione 97€ o Check-up 147€. Mi serve il progetto analizzato.</p>
        </div>

        <div className="mt-10">
          <Link 
            href="/contatti" 
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800"
          >
            Aggiungi Capitolato 47€ →
          </Link>
        </div>
      </div>
    </main>
  )
}