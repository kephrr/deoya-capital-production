'use client'

import { useEffect } from 'react'

// Déclaration pour gtag (Google Analytics)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

interface CookieManagerProps {
  children: React.ReactNode
}

export function CookieManager({ children }: CookieManagerProps) {
  useEffect(() => {
    // Vérifier le consentement aux cookies
    const checkCookieConsent = () => {
      const consent = localStorage.getItem('cookie-consent')
      const analyticsConsent = localStorage.getItem('analytics-cookies')
      
      if (consent === 'accepted' && analyticsConsent === 'true') {
        // Activer Google Analytics ou autres scripts de suivi
        enableAnalytics()
      } else {
        // Désactiver les scripts de suivi
        disableAnalytics()
      }
    }

    const enableAnalytics = () => {
      // Ajouter Google Analytics si nécessaire
      if (typeof window !== 'undefined' && !window.gtag) {
        // Script Google Analytics peut être ajouté ici
        console.log('Analytics cookies accepted')
      }
    }

    const disableAnalytics = () => {
      // Désactiver le suivi
      if (typeof window !== 'undefined') {
        console.log('Analytics cookies refused')
      }
    }

    // Vérifier au chargement
    checkCookieConsent()

    // Écouter les changements de consentement
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent' || e.key === 'analytics-cookies') {
        checkCookieConsent()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return <>{children}</>
}
