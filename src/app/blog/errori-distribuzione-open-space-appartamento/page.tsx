 import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Errori Distribuzione Open Space in Appartamento',
  description: 'I 4 errori di distribuzione più costosi in open space da appartamento: zona giorno compressa, flussi incrociati, impianti non verificati. Come evitarli.',
  alternates: {
    canonical: 'https://www.sistema90g.it/blog/errori-distribuzione-open-space-appartamento',
  },
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il primo errore nella distribuzione open space?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comprimere la zona giorno per farci stare un'isola. Se hai meno di 35mq totali, l'isola ti mangia il living. Meglio penisola o tavolo. La distanza minima tra divano e piano cucina è 250cm per non avere odori addosso."
        }
      },
      {
        "@type": "Question",
        "name": "Come evitare i flussi incrociati in open space piccolo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non mettere il tavolo tra cucina e divano. Ogni volta che ti alzi interrompi chi cucina. Traccia i percorsi: ingresso → cucina → tavolo → divano devono essere lineari. Se si incrociano, hai sbagliato distribuzione."
        }
      },
      {
        "@type": "Question",
        "name": "Posso spostare la cucina in open space di appartamento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo se hai scarico a pavimento o puoi pompare. In condominio lo scarico cucina è fisso: spostarlo oltre 3 metri richiede pompa trituratrice. Verifica anche la canna fumaria: se non c'è, niente cappa aspirante."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto deve essere grande un open space per funzionare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimo 28-30mq per cucina + living vivibili. Sotto questa soglia hai due ambienti zoppi: cucini male e guardi la TV con il frigo in faccia. Meglio tenere separato che fare un open space finto."
        }
      }
    ]
 