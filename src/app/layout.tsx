 import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Link from 'next/link'
import Script from 'next/script' // <-- AGGIUNGI QUESTO

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema90G - Analisi Tecniche Indipendenti',
  description: 'Consulenze, analisi tecniche e analisi preventive per la tua casa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G5D6FNDR00', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t mt-16 py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-600">
            <p className="font-semibold mb-2">
              Sistema90G - Analisi Tecniche Indipendenti
            </p>
            <p className="mb-4">
              P.IVA 12345678901 | Via Roma 1, 20100 Milano
            </p>
            <div className="flex justify-center gap-6 mb-4">
              <Link href="/privacy" className="hover:text-black underline">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-black underline">
                Cookie Policy
              </Link>
              <Link href="/contatti" className="hover:text-black underline">
                Contatti
              </Link>
            </div>
            <p className="text-xs">
              © 2026 Sistema90G. Tutti i diritti riservati.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}