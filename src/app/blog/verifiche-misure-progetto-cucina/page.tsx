 import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verifiche Misure Progetto Cucina: Cosa Controllare',
  description: 'Checklist misure cucina: rilievo in cantiere, quote finite, tolleranze. Evita errori da 3000€ prima di ordinare i mobili.',
  alternates: {
    canonical: 'https://www.sistema90g.it/blog/verifiche-misure-progetto-cucina',
  },
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Chi deve verificare le misure prima di ordinare la cucina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il tecnico del mobilificio deve fare il rilievo in cantiere a pareti finite. Non fidarti mai delle misure da progetto o del cartongessista. Se sbagliano di 2cm, i mobili non entrano e paghi tu la modifica."
        }
      },
      {
        "@type": "Question",
        "name": "Quando si fa il rilievo misure per la cucina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dopo intonaco e massetto, prima dei pavimenti. Così verifichi quote finite e puoi correggere scarichi o prese. Se aspetti il pavimento, spostare un attacco costa 500€+."
        }
      },
      {
        "@type": "Question",
        "name": "Cosa controllare nel disegno tecnico della cucina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quote di ingombro totali, altezza zoccolo, spessore top, posizione esatta scarichi e prese. Ogni presa deve stare a 110cm da terra e 60cm dal lavello. Chiedi il disegno quotato in scala 1:20."
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
        <h1>Verifiche Misure Progetto Cucina: Cosa Controllare</h1>
        {/* Inserisci qui il contenuto attuale dell'articolo */}
      </article>
    </>
  )
}