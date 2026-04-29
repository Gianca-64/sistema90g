import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Progetto Cucina da Zero 890€ - Chiavi in Mano con 3D | Sistema90G',
  description: 'Partiamo da zero: rilievo, layout, impianti, capitolato tecnico, render 3D. Ti seguiamo dal foglio bianco al montaggio. Solo 2 posti/mese. Da 890€.',
  keywords: 'progetto cucina da zero, cucina chiavi in mano, progettazione cucina completa, render 3d cucina, architetto cucina, 890 euro',
}
export default function ProgettoDaZero() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          ← Torna alla Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        Progetto da Zero: Cucina Chiavi in Mano 890€
      </h1>
      
      <Image 
        src="/servizi/progetto-zero-hero.jpg" 
        alt="Progetto cucina completo con render 3D e planimetria tecnica"
        width={1200} 
        height={600}
        className="rounded-lg mb-8"
        priority
      />

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Parti da zero. Non hai progetto, non ti fidi dei mobilifici. Ti faccio io la cucina completa: da piantina vuota a capitolato blindato.
        </p>

        <h2>Cosa include per 890€</h2>
        <ul>
          <li><strong>Rilievo:</strong> Vengo io o mi mandi video+misure. Tolleranza 5mm.</li>
          <li><strong>Layout funzionale:</strong> 2 proposte diverse. Scegli tu, io ottimizzo.</li>
          <li><strong>Render 3D:</strong> Vedi la cucina finita prima di spendere 1€.</li>
          <li><strong>Capitolato tecnico:</strong> Materiali, ferramenta, spessori. Tutto nero su bianco.</li>
          <li><strong>Distinta elettrodomestici:</strong> Modelli esatti, nicchie, prese. Zero sorprese al montaggio.</li>
        </ul>

        <h2>Cosa ricevi in 10 giorni</h2>
        <p>
          Dossier completo 15-20 pagine PDF: planimetrie quotate, prospetti, render, capitolato, lista spesa. 
          Con questo vai da 3 mobilifici e chiedi: "quanto per fare ESATTAMENTE questo?". 
          Confronti mele con mele, non preventivi fantasia.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
          <p className="font-semibold">Risparmio medio:</p>
          <p>Chi parte con mio progetto risparmia 2-4k€ sul totale. Perché? Perché il mobilificio non può "gonfiare" voci che non esistono. E tu non paghi errori.</p>
        </div>

        <h2>Come funziona</h2>
        <ol>
          <li>Call di 30min: mi spieghi esigenze e budget</li>
          <li>Rilievo + prime bozze in 5gg</li>
          <li>Revisione insieme</li>
          <li>Consegna dossier finale in 10gg totali</li>
        </ol>

        <div className="mt-10">
          <Link 
            href="/contatti" 
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800"
          >
            Prenota Progetto 890€ →
          </Link>
        </div>
      </div>
    </main>
  )
}