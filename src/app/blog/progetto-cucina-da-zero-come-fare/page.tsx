 import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Progetto Cucina da Zero: Come Fare Senza Errori',
  description: 'Guida per progettare cucina da zero: parti dagli impianti, definisci i flussi, verifica il capitolato. Metodo Sistema90G.',
  alternates: {
    canonical: 'https://www.sistema90g.it/blog/progetto-cucina-da-zero-come-fare',
  },
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Da cosa si parte per progettare una cucina da zero?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dagli impianti esistenti: scarichi, prese, gas, finestre. Prima verifichi cosa puoi spostare e quanto costa. Poi disegni i flussi: frigo → lavello → piano. Solo alla fine scegli stile e colori."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto costa far verificare un progetto cucina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un'analisi tecnica indipendente costa tra 300€ e 800€ in base ai mq. Ti evita errori da 3000€+ come spostare uno scarico dopo il massetto o rifare il top perché non ci sta la cappa."
        }
      },
      {
        "@type": "Question",
        "name": "Meglio architetto o mobilificio per il progetto cucina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'architetto pensa all'estetica, il mobilificio a vendere i suoi mobili. Ti serve un tecnico terzo che verifica impianti e misure. Il mobilificio ha interesse a chiudere, non a farti risparmiare errori."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="prose mx-auto px-4 py-12">
        <h1>Progetto Cucina da Zero: Come Fare Senza Errori</h1>
        {/* Inserisci qui il contenuto attuale dell'articolo */}
      </article>
    </>
  )
}