 'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Tuonome<span className="text-blue-600">Progetti</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/servizi" className="font-semibold hover:text-blue-600">
              Servizi
            </Link>
            <Link href="/blog" className="font-semibold hover:text-gray-600">
              Blog
            </Link>
            <Link 
              href="/contatti"
              className="bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800"
            >
              Contattami
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/servizi" className="block font-semibold">Servizi</Link>
            <Link href="/blog" className="block font-semibold">Blog</Link>
            <Link 
              href="/contatti"
              className="block bg-black text-white px-5 py-2 rounded-lg font-semibold text-center"
            >
              Contattami
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}