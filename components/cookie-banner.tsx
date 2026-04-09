'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { layoutContent } from '@/content/layout'

interface CookieBannerProps {
  onAccept?: () => void
  onRefuse?: () => void
}

export function CookieBanner({ onAccept, onRefuse }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const { banner } = layoutContent.cookies

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      // Afficher la bannière après un court délai pour laisser la page charger
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('analytics-cookies', 'true')
    setIsVisible(false)
    onAccept?.()
  }

  const handleRefuse = () => {
    localStorage.setItem('cookie-consent', 'refused')
    localStorage.setItem('analytics-cookies', 'false')
    setIsVisible(false)
    onRefuse?.()
  }

  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleRestore = () => {
    setIsMinimized(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Bannière principale */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white text-foreground shadow-lg transition-all duration-300 ${
          isMinimized ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Texte explicatif */}
            <div className="flex-1">
              <p className="text-sm leading-relaxed">
                <span className="font-medium">{banner.title}</span> {banner.description}
              </p>
              <div className="mt-2 flex gap-4 text-xs">
                <a 
                  href="/politique-cookies" 
                  className="text-primary hover:text-primary/80 underline"
                >
                  {banner.links.policy}
                </a>
                <a 
                  href="/politique-confidentialite" 
                  className="text-primary hover:text-primary/80 underline"
                >
                  {banner.links.privacy}
                </a>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                onClick={handleRefuse}
                className="rounded-md border border-foreground/30 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground hover:bg-foreground/10"
              >
                {banner.buttons.refuse}
              </button>
              <button
                onClick={handleAccept}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
              >
                {banner.buttons.accept}
              </button>
              <button
                onClick={handleMinimize}
                className="rounded-md p-2 text-foreground/60 transition-colors duration-200 hover:text-foreground"
                aria-label={banner.buttons.minimize}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bannière minimisée */}
      {isMinimized && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
          <div className="bg-white text-foreground shadow-lg rounded-lg border border-foreground/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs flex-1">
                {banner.minimizedText}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleRestore}
                  className="text-xs text-primary hover:text-primary/80 underline"
                >
                  {banner.buttons.manage}
                </button>
                <button
                  onClick={handleAccept}
                  className="text-xs text-primary hover:text-primary/80 underline"
                >
                  {banner.buttons.accept}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
