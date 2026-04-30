 import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3 Errori da Evitare nell’Open Space Cucina',
  description: 'Gli errori più comuni nella distribuzione open space: isola che blocca, tavolo nei flussi, cappa senza foro. Come verificarli prima del cantiere.',
  alternates: {
    canonical: 'https://www.sistema90g.it/blog/open-space-errori',
  },
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è l'errore più comune nella cucina open space?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'isola posizionata senza verificare i flussi. Se blocca il passaggio tra frigo, lavello e piano cottura, crei un percorso a ostacoli. La distanza minima tra isola e mobili è 120cm per passare comodi anche con ante aperte."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto spazio serve per il tavolo in open space?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimo 90cm tra tavolo e piano cucina per aprire cassetti e passare. Se metti il tavolo al centro dei flussi principali, ogni volta che cucini qualcuno si alza e intralcia. Meglio defilarlo verso la zona living."
        }
      },
      {
        "@type": "Question",
        "name": "Posso mettere la cappa senza foro esterno in open space?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, ma solo con cappa a ricircolo con filtri a carbone attivi. In open space gli odori invadono subito il living. Verifica che la portata sia almeno 600 m³/h e che i filtri siano accessibili per manutenzione ogni 3 mesi."
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
        <h1>3 Errori da Evitare nell’Open Space Cucina</h1>
        {/* Inserisci qui il contenuto attuale dell'articolo */}
      </article>
    </>
  )
}