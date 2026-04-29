 import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Sistema90G
            </Link>
            <p className="text-sm text-slate-600">
              Analisi Tecniche Indipendenti
            </p>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-green-700 transition"
            >
              Home
            </Link>
            <Link 
              href="/analisi-distribuzione-interna" 
              className="text-slate-700 hover:text-green-700 transition"
            >
              Analisi
            </Link>
            <Link 
              href="/servizi" 
              className="text-slate-700 hover:text-green-700 transition"
            >
              Servizi
            </Link>
            <Link 
              href="/contatti" 
              className="text-slate-700 hover:text-green-700 transition"
            >
              Contatti
            </Link>
          </nav>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Link 
              href="/contatti"
              className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Contatti
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}