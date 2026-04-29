 import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-start">
        <div className="text-xs leading-tight">
          <div>Consulenza Tecnica</div>
          <div>Indipendente</div>
        </div>
        
        <nav className="flex items-center gap-8 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contatti" className="hover:underline">Contatti</Link>
          <button className="ml-4">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <rect width="20" height="2" fill="black"/>
              <rect y="6" width="20" height="2" fill="black"/>
              <rect y="12" width="20" height="2" fill="black"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}