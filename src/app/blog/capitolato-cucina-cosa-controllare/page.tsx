 import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capitolato Cucina: Cosa Controllare Prima di Firmare',
  description: 'Come blindare il capitolato cucina: marca elettrodomestici, tipo anta, clausole penali. Evita sorprese sul montaggio.',
  alternates: {
    canonical: 'https://www.sistema90g.it/blog/capitolato-cucina-cosa-controllare',
  },
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Cosa deve contenere il capitolato della cucina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marca e modello di ogni elettrodomestico, tipo di anta e maniglia, spessore top e materiale, tipo di cerniera e guida cassetti. Se c'è scritto solo 'cucina completa', possono montarti roba da brico."
        }
      },
      {
        "@type": "Question",
        "name": "Come capire se il capitolato cucina è blindato?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deve avere clausola di penale per ritardi, tempi di consegna precisi, chi paga smaltimento vecchio, chi fa allacci idraulici. Se manca, il mobilificio può scaricare tutto su di te."
        }
      },
      {
        "@type": "Question",
        "name": "Il montaggio è sempre incluso nel prezzo cucina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Spesso il montaggio è a parte e costa 15-20% del totale. Verifica che nel capitolato ci sia scritto 'montaggio incluso' con trasporto al piano. Altrimenti paghi 800€ extra il giorno della consegna."
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
        <h1>Capitolato Cucina: Cosa Controllare Prima di Firmare</h1>
        {/* Inserisci qui il contenuto attuale dell'articolo */}
      </article>
    </>
  )
}