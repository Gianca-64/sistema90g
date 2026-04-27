 import Link from 'next/link'
import Image from 'next/image'

export default function BlogPost() {
  const whatsappNumber = '393275478485'
  const waMessage = 'Ciao, ho letto l\'articolo sulla verifica PRE-conferma ordine. Vorrei una verifica gratuita del mio progetto cucina.'
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16 px-4">
      <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Image src="/logo-90g.jpg" alt="Sistema 90G" width={60} height={60} className="mb-6" />
        
        <h1 className="text-3xl font-bold text-[#4A4A4A] mb-4">
          Errore #3: Firmare l'ordine senza verifica PRE-conferma
        </h1>
        
        <p className="text-[#65676B] mb-6">
          Il 70% degli errori da 800€ nasce qui. Una volta firmato l'ordine, ogni modifica costa. 
          La verifica PRE-conferma ordine controlla misure, elettrodomestici e scarichi PRIMA che diventi un problema.
        </p>

        <div className="bg-[#F5F5F5] p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-[#4A4A4A] mb-3">Cosa controllo gratis per te:</h2>
          <ul className="space-y-2 text-[#65676B]">
            <li>✓ Misure nicchie vs elettrodomestici</li>
            <li>✓ Posizione attacchi acqua/gas/scarichi</li>
            <li>✓ Apertura ante e cassetti senza collisioni</li>
            <li>✓ Piano di lavoro: giunzioni e fuori squadro</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`}
            target="_blank"
            className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-6 rounded-lg text-center transition"
          >
            Scrivimi su WhatsApp
          </a>
          
          <Link 
            href="/verifica-progetto"
            className="flex-1 bg-[#A6937C] hover:bg-[#9A856E] text-white font-bold py-3 px-6 rounded-lg text-center transition"
          >
            Compila il form
          </Link>
        </div>

        <p className="text-xs text-[#65676B] mt-6 text-center">
          Rispondo entro 24h. Zero spam, solo WhatsApp diretto con me.
        </p>
      </article>
    </div>
  )
}