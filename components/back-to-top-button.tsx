'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 bg-white text-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 border border-gray-200"
          aria-label="Retour en haut de page"
        >
          <ChevronUp className="w-5 h-5" strokeWidth={2} />
        </button>
      )}
    </>
  )
}
