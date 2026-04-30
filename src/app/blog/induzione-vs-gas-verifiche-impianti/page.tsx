 import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Induzione vs Gas: Verifiche Impianti da Fare',
  description: 'Passi da gas a induzione? Verifica potenza contatore, linea dedicata, tappatura gas. Evita blackout e lavori extra.',
  alternates: {
    canonical: 'https://www.sistema90g.it/blog/induzione-vs-gas-verifiche-impianti',
  },
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Che potenza serve per il piano induzione?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimo 7,4 kW dedicati solo al piano. Devi aumentare il contatore a 6kW e tirare linea separata da 6mm². Se hai contratto da 3kW, salta tutto quando accendi forno e induzione insieme."
        }
      },
      {
        "@type": "Question",
        "name": "Posso sostituire gas con induzione senza rompere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo se hai già corrugato vuoto da 32mm dal quadro alla cucina. Altrimenti devi tracciare. Verifica anche che il tubo gas esistente sia tappato a norma da tecnico abilitato."
        }
      },
      {
        "@type": "Question",
        "name": "L'induzione consuma più del gas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, l'induzione ha rendimento 90% contro 40% del gas. Bolli l'acqua in metà tempo. Ma paghi di più in bolletta se non hai fotovoltaico. Con 6kW di contratto spendi circa 0,40€ l'ora a pieno carico."
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
        <h1>Induzione vs Gas: Verifiche Impianti da Fare</h1>
        {/* Inserisci qui il contenuto attuale dell'articolo */}
      </article>
    </>
  )
}