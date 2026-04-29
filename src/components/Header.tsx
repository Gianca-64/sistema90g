 import Link from 'next/link'

export default function Header() {
  return (
    <header className="px-6 py-4 flex justify-between items-center max-w-6xl mx-auto sticky top-0 bg-white z-50 border-b">
      <Link href="/" className="text-sm leading-tight hover:opacity-70">
        <p className="font-bold text-lg">Sistema90G</p>
        <p className="text-gray-600 text-xs">Analisi Tecniche Indipendenti</p>
      </Link>
      <nav className="hidden md:flex gap-6 text-sm">
        <Link href="/" className="hover:text-green-700">Home</Link>
        <Link href="/blog" className="hover:text-green-700">Analisi</Link>
        <Link href="/servizi" className="hover:text-green-700">Servizi</Link>
        <a href="#contatti" className="hover:text-green-700">Contatti</a>
      </nav>
    </header>
  )
}