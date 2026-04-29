 import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Sistema<span className="text-blue-600">90G</span>
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/servizi" className="hover:text-blue-600">Servizi</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link 
            href="/contatti" 
            className="bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800"
          >
            Contattami
          </Link>
        </nav>
      </div>
    </header>
  )
}