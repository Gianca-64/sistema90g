 import Link from 'next/link'

export const metadata = {
  title: 'Add-on Capitolato Tecnico - Specifiche materiali e ferramenta',
  description: 'Revisione capitolato cucina: verifico spessori, ferramenta, materiali e accessori inclusi. Add-on per chi ha già fatto il Check-up.'
}

export default function AddOnCapitolato() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">ADD-ON</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Add-on Capitolato Tecnico</h1>
          <p className="text-xl text-gray-600 mb-8">
            Revisione completa del capitolato: verifico materiali, ferramenta e accessori inclusi.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-sm">
            <strong>Nota:</strong> Questo servizio è attivabile solo dopo Check-up Progetto 147€
          </div>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Aggiungi Capitolato 47€ →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100">
          <img 
            src="/hero-capitolato-800.jpeg"
            alt="Add-on Capitolato Tecnico"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Cosa verifico</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Spessori pannelli, tipo laccatura, bordatura
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Marca cerniere e guide cassetti con ammortizzatore
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Materiale e spessore top, alzatina e lavorazioni
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Accessori inclusi: cestoni, faretti, zoccolatura
          </li>
          <li className="flex gap-3">
            <span className="text-green-700 font-bold">✓</span>
            Siliconatura, finiture e smaltimento imballi
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Documento PDF con analisi voce per voce del capitolato. Ti indico cosa manca e cosa farti integrare prima della firma.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Consegna in 48 ore lavorative dall'invio del capitolato.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Firma con capitolato chiaro</h2>
        <Link 
          href="/contatti" 
          className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
        >
          Aggiungi Capitolato 47€ →
        </Link>
      </section>
    </main>
  )
}