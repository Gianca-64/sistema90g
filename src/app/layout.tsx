 import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Sistema90G',
  description: 'Analisi tecnica distribuzione interna e verifica progetti cucina - Consulente indipendente',
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
          src={`https://www.googletagmanager.com/gtag/js?id=G-G5D6FNDR00`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G5D6FNDR00');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}