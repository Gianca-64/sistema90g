 import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

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
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="border-t mt-16 py-8">
          <div className="max-w-3xl mx-auto px-6 text-center text-sm text-slate-600">
            <p>Sistema90G © 2026 · Analisi Tecniche Indipendenti</p>
          </div>
        </footer>
      </body>
    </html>
  )
}