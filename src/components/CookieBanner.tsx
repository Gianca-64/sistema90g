'use client'

import { useState, useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'granted') {
      updateConsent('granted')
    }
  }, [])

  const updateConsent = (value: 'granted' | 'denied') => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        'analytics_storage': value
      })
    }
  }

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'granted')
    updateConsent('granted')
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie_consent', 'denied')
    updateConsent('denied')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            Usiamo cookie per analisi anonime con Google Analytics. 
            <a href="/privacy" className="underline ml-1">Privacy Policy</a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm border border-gray-500 rounded hover:bg-gray-800"
          >
            Rifiuta
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-blue-600 rounded hover:bg-blue-700 font-bold"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}
