import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Distribuzione Cucina 97€ - Progetto Tecnico a Distanza | Sistema90G',
  description: 'Riorganizziamo la tua cucina in 48h. Analisi tecnica indipendente su ergonomia, triangolo di lavoro, prese. Solo 5 posti/mese. Da 97€.',
  keywords: 'progetto cucina, distribuzione cucina, planimetria cucina, ergonomia cucina, progetto cucina online, 97 euro',
}

export default function DistribuzioneCucina() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/servizi" className="text-sm text-gray-500 hover:text-gray-700">
          ← Torna ai Servizi
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src="/servizi/distribuzione-cucina.jpg"
            alt="Distribuzione Cucina - Progetto tecnico"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">Distribuzione Cucina</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-6">97€</p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-sm font-semibold text-yellow-800">
              SOLO 5 POSTI DISPONIBILI QUESTO MESE
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Hai la planimetria ma non sai come disporre i mobili? La tua cucina è scomoda e fai mille passi inutili?
          </p>

          <p className="text-gray-700 mb-8">
            Riorganizziamo la tua cucina in 48h con analisi tecnica indipendente. 
            Ottimizziamo triangolo di lavoro, ergonomia, posizione prese e attacchi. 
            Ricevi planimetria tecnica in scala pronta per il mobiliere.
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Cosa ricevi:</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Analisi tecnica della planimetria esistente</li>
              <li>✓ Nuova distribuzione ottimizzata in scala 1:50</li>
              <li>✓ Schema posizione prese, punti luce, attacchi acqua/gas</li>
              <li>✓ Relazione tecnica con motivazioni delle scelte</li>
              <li>✓ 1 revisione inclusa</li>
              <li>✓ Consegna in 48h via email in PDF</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Fa per te se:</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Stai ristrutturando e hai solo la planimetria catastale</li>
              <li>• La cucina che ti hanno proposto "non ti convince"</li>
              <li>• Vuoi una seconda opinione tecnica prima di firmare</li>
              <li>• Devi spostare attacchi e vuoi sapere se si può fare</li>
            </ul>
          </div>

          <Link
            href="/contatti"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Blocca il tuo posto →
          </Link>

          <p className="text-sm text-gray-500 mt-4">
            Pagamento anticipato. Consegna garantita in 48h lavorative.
          </p>
        </div>
      </div>
    </main>
  )
}