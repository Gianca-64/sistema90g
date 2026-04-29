 import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'Analisi Tecniche | Consulenza Indipendente',
  description: 'Verifiche tecniche preventive su distribuzione appartamento e progetti cucina.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Header />
        {children}
        <footer id="contatti" className="px-6 py-12 bg-gray-50 text-center text-gray-600 text-sm mt-20">
          <p>Sistema90G © 2026 · Analisi Tecniche Indipendenti</p>
          <p className="mt-2">
            WhatsApp: <a 
              href="https://wa.me/393275478485" 
              target="_blank"
              className="text-green-700 underline font-semibold"
            >
              +39 327 547 8485
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}