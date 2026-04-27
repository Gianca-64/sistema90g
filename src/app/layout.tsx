 import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema90G - Evita 5000€ di errori sulla cucina',
  description: 'Controllo tecnico indipendente del progetto cucina. Check-up 147€ in 48h.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G5D6FNDR00', {
              page_path: window.location.pathname,
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