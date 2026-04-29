 export default function Contatti() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-serif text-center mb-4">Parliamo della tua cucina</h1>
      <p className="text-center text-gray-600 mb-16">Rispondo io, non un call center. Entro 2h in orario lavorativo.</p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">WhatsApp Diretto</h2>
          <p className="text-gray-600 mb-6">Il modo più veloce. Scrivimi e allega foto/progetto.</p>
          <a href="https://wa.me/393275478485" className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block">
            Apri Chat →
          </a>
        </div>
        
        <div className="border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Email</h2>
          <p className="text-gray-600 mb-6">Per inviare file pesanti o richieste dettagliate.</p>
          <a href="mailto:sistema90@icloud.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
            sistema90@icloud.com
          </a>
        </div>
      </div>
    </main>
  )
}