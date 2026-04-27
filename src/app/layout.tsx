 import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import CookieBanner from '../components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sistema90g.it'),
  title: 'Sistema90G - Evita 5000€ di errori sulla cucina',
  description: 'Controllo tecnico indipendente del progetto cucina. Check-up 147€ in 48h.',
  openGraph: {
    title: 'Sistema90G',
    description: 'Evita 5000€ di errori sul progetto della cucina',
    images: ['/hero-errore-800.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G5D6FNDR00"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            gtag('config', 'G-G5D6FNDR00', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}