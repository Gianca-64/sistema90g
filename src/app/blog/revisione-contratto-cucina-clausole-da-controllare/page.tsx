 import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revisione Contratto Cucina: Clausole da Controllare',
  description: 'Clausole trappola nel contratto cucina: penali, recesso, deposito, montaggio. Come difenderti prima di firmare.',
  alternates: {
    canonical: 'https://www.sistema90g.it/blog/revisione-contratto-cucina-clausole-da-controllare',
  },
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quali clausole controllare nel contratto cucina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Penale per ritardo consegna, chi paga il deposito se il cantiere è in ritardo, recesso senza penali entro 14 giorni, chi fa smaltimento imballi. Senza queste, sei ostaggio del mobilificio."
        }
      },
      {
        "@type": "Question",
        "name": "Posso annullare il contratto cucina dopo aver firmato?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, entro 14 giorni se hai firmato fuori dal negozio o online. Se hai firmato in showroom, dipende da cosa c'è scritto. Chiedi sempre copia del contratto prima di dare acconto."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto acconto è giusto dare per la cucina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Max 30% alla firma, 50% a inizio produzione, saldo a collaudo. Se ti chiedono 50% subito, stanno finanziando il loro magazzino con i tuoi soldi. Se falliscono, perdi tutto."
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
        <h1>Revisione Contratto Cucina: Clausole da Controllare</h1>
        {/* Inserisci qui il contenuto attuale dell'articolo */}
      </article>
    </>
  )
}