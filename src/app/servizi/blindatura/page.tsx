import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blindatura Progetto 297€ - Progetto Esecutivo Cucina per Cantiere | Sistema90G',
  description: 'Trasformiamo il preventivo del mobiliere in progetto esecutivo per muratore ed elettricista. Quote, impianti, schemi. Zero interpretazioni. Da 297€.',
  keywords: 'progetto esecutivo cucina, blindatura progetto, schemi impianti cucina, disegni per muratore, progetto tecnico cucina, 297 euro',
}
export default function Blindatura() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          ← Torna alla Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        Blindatura Contratto: Analisi Legale 297€
      </h1>
      
      <Image 
        src="/servizi/blindatura-hero.jpg" 
        alt="Revisione contratto cucina con evidenziatore su clausole critiche"
        width={1200} 
        height={600}
        className="rounded-lg mb-8"
        priority
      />

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Stai per firmare 15-30k€ di contratto. Se c'è una clausola trappola, sono soldi tuoi che volano via. Io la trovo prima.
        </p>

        <h2>Cosa controllo nel contratto</h2>
        <ul>
          <li><strong>Penali e recessi:</strong> Se disdici paghi quanto? Se ritardano loro pagano quanto?</li>
          <li><strong>Tempi e consegne:</strong> "90 giorni lavorativi" vuol dire 5 mesi. Ti spiego cosa firmi davvero.</li>
          <li><strong>Garanzie:</strong> 24 mesi su cosa? Solo mobili o anche montaggio? E chi paga se si rompe?</li>
          <li><strong>Modifiche in corso:</strong> Puoi cambiare colore dopo? A che costo? Se non c'è scritto, non puoi.</li>
        </ul>

        <h2>Cosa ricevi</h2>
        <p>
          Report legale di 6-10 pagine. Ogni clausola critica evidenziata + traduzione in italiano semplice. 
          Ti dico: "questa firmala", "questa falla togliere", "questa negoziala così". 
          In 72h sai esattamente dove stai mettendo i soldi.
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
          <p className="font-semibold">Quando farlo:</p>
          <p>Prima di versare l'acconto. Dopo che hai firmato è tardi: vale quello che c'è scritto, anche se è una fregatura.</p>
        </div>

        <div className="mt-10">
          <Link 
            href="/contatti" 
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800"
          >
            Blinda il Contratto 297€ →
          </Link>
        </div>
      </div>
    </main>
  )
}