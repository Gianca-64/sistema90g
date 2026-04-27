import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  return [{ slug: 'errori-misura-cucina' }]
}

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  if (params.slug === 'errori-misura-cucina') {
    return {
      title: '7 Errori di misura che costano 5000€ in cucina | Sistema90G',
      description: 'Il 90% dei progetti cucina ha almeno 1 errore di misura. Ecco i 7 più costosi e come evitarli prima di firmare.',
    }
  }
  return {}
}

export default function Page({ params }: { params: { slug: string } }) {
  if (params.slug !== 'errori-misura-cucina') return notFound()

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-sm text-blue-600 font-bold mb-4">Check-up</div>
        <h1 className="text-4xl font-bold mb-4">7 Errori di misura che costano 5000€ in cucina</h1>
        <p className="text-sm text-gray-500 mb-8">27 Aprile 2026</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6"><strong>Il 90% dei progetti cucina che analizzo ha almeno un errore di misura.</strong> Il problema? Li scopri solo al montaggio, quando ormai hai firmato e pagato.</p>
          <img src="/hero-errore-800.png" alt="Errore misure cucina" className="w-full rounded-lg mb-8" />
          
          <h2 className="text-3xl font-bold mt-12 mb-4">1. Il muro fuori squadro non rilevato</h2>
          <p className="mb-4">Il venditore misura solo lunghezza. Ma se il muro è fuori squadro di 2cm, l'ultima base da 60 diventa da 58.</p>
          <p className="mb-6"><strong>Quanto costa:</strong> Base su misura + top rifatto = 800-1500€</p>

          <h2 className="text-3xl font-bold mt-12 mb-4">2. Altezza scarico lavastoviglie sbagliata</h2>
          <img src="/problema-scarico.png" alt="Scarico lavastoviglie" className="w-full rounded-lg mb-4" />
          <p className="mb-4">Lo scarico deve stare a 40-45cm da terra. Se è a 55cm, la lavastoviglie non scarica.</p>
          <p className="mb-6"><strong>Quanto costa:</strong> Idraulico + muratore = 600-900€</p>

          <h2 className="text-3xl font-bold mt-12 mb-4">3. Cappa a meno di 65cm dal piano gas</h2>
          <p className="mb-4">Fuori norma. Rischi incendio e l'assicurazione non paga.</p>
          <p className="mb-6"><strong>Quanto costa:</strong> Pensile da rifare = 400-700€</p>

          <h2 className="text-3xl font-bold mt-12 mb-4">4. Presa dietro al forno</h2>
          <p className="mb-4">Se la presa sporge 4cm, il forno non va a filo. Devi spostarla.</p>
          <p className="mb-6"><strong>Quanto costa:</strong> Elettricista = 250-400€</p>

          <h2 className="text-3xl font-bold mt-12 mb-4">5. Frigorifero che non apre a 90°</h2>
          <img src="/problema-frigo.png" alt="Frigorifero che sbatte" className="w-full rounded-lg mb-4" />
          <p className="mb-4">Lo mettono a filo muro. Apri l'anta e sbatte. Non escono i cassetti.</p>
          <p className="mb-6"><strong>Quanto costa:</strong> Smontaggio + modifica = 500-800€</p>

          <h2 className="text-3xl font-bold mt-12 mb-4">6. Zoccolo che non passa per dislivello pavimento</h2>
          <p className="mb-4">Pavimento vecchio = 1.5cm di dislivello. Lo zoccolo da 10cm non passa.</p>
          <p className="mb-6"><strong>Quanto costa:</strong> Zoccoli su misura = 300-500€</p>

          <h2 className="text-3xl font-bold mt-12 mb-4">7. Colonna forno troppo vicina al muro</h2>
          <p className="mb-4">Servono 5cm per apertura anta. Se non ci sono, l'anta striscia.</p>
          <p className="mb-6"><strong>Quanto costa:</strong> Colonna nuova = 800-1200€</p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
            <h3 className="text-2xl font-bold mb-4">Come evitare questi 5000€ di danni?</h3>
            <p className="mb-4">Con il <strong>Check-up 147€</strong> analizzo il tuo progetto in 48h e ti dico esattamente dove sono gli errori, prima che tu firmi.</p>
            <a href="https://wa.me/393472843084?text=Ciao,%20voglio%20il%20Check-up" 
               className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700">
              Scrivi su WhatsApp per il Check-up →
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/blog" className="text-blue-600 underline">← Tutti gli articoli</Link>
        </div>
      </div>
    </main>
  )
}