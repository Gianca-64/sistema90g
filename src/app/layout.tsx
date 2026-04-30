 import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sistema90g.it'),
  alternates: {
    canonical: 'https://www.sistema90g.it',
  },
  title: {
    default: 'Sistema90G - Analisi Tecnica Indipendente Cucine',
    template: '%s | Sistema90G'
  },
  description: 'Tecnico indipendente per analisi progetti cucina. Verifico impianti, misure e capitolati prima del cantiere. Zero sorprese, zero contenziosi.',
  keywords: ['analisi progetto cucina', 'verifica impianti cucina', 'capitolato cucina', 'errori open space', 'tecnico cucina indipendente', 'blindatura contratto cucina', 'distribuzione cucina'],
  authors: [{ name: 'Gian Carlo Primo' }],
  creator: 'Gian Carlo Primo',
  publisher: 'Sistema90G',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.sistema90g.it',
    siteName: 'Sistema90G',
    title: 'Sistema90G - Analisi Tecnica Indipendente Cucine',
    description: 'Verifico impianti, misure e capitolati prima del cantiere. Zero sorprese, zero contenziosi.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sistema90G - Analisi Tecnica Cucine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistema90G - Analisi Tecnica Indipendente Cucine',
    description: 'Verifico impianti, misure e capitolati prima del cantiere.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'FY6lIf3F1qp1fIiK-8wZQ3MP20-RKpo_Xgj4tFKLP6M',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sistema90G - Gian Carlo Primo",
              "description": "Analisi tecnica indipendente progetti cucina e distribuzione. Verifica impianti, misure, capitolati prima del cantiere.",
              "url": "https://www.sistema90g.it",
              "logo": "https://www.sistema90g.it/logo.png",
              "image": "https://www.sistema90g.it/og-image.jpg",
              "telephone": "+39-327-5478485",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sarmede",
                "addressRegion": "Veneto",
                "addressCountry": "IT"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Italia"
              },
              "founder": {
                "@type": "Person",
                "name": "Gian Carlo Primo",
                "jobTitle": "Tecnico Indipendente"
              },
              "sameAs": [
                "https://www.facebook.com/Sistema90G"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans anXtialiased">
        {children}
      </body>
    </html>
  )
}