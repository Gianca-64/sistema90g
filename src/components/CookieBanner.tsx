'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      enableAnalytics()
    }
  }, [])

  const enableAnalytics = () => {
    // @ts-ignore
    window.gtag?.('consent', 'update', {
      'analytics_storage': 'granted'
    })
  }

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    enableAnalytics()
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    // @ts-ignore
    window.gtag?.('consent', 'update', {
      'analytics_storage': 'denied'
    })
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            Usiamo cookie di Google Analytics per capire come migliorare il sito. 
            Leggi la <Link href="/privacy" className="underline hover:text-gray-300">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-bold transition"
          >
            Rifiuta
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-bold transition"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}