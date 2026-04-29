import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center text-sm text-gray-600">
          <p className="font-semibold text-black mb-2">
            Sistema90G - Analisi Tecniche Indipendenti
          </p>
          <p className="mb-4">
            Via F. vanga 9, 38061 Ala - TN
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-blue-600">Cookie Policy</Link>
            <Link href="/termini" className="hover:text-blue-600">Termini</Link>
            <Link href="/contatti" className="hover:text-blue-600">Contatti</Link>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Sistema90G. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}