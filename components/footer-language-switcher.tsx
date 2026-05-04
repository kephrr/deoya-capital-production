"use client"

import { useState } from "react"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import { locales, localeConfig } from "@/i18n/config"

export function FooterLanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: string) => {
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    
    // Build the new URL with the new locale (using window.location for static export)
    const newPath = `/${newLocale}${pathWithoutLocale}`
    
    // Navigate to the new locale
    window.location.href = newPath
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-xs text-primary-foreground/60">
        <Globe className="inline h-3 w-3 mr-1" />
        Langue:
      </span>
      <div className="flex gap-2">
        {locales.map((loc) => {
          const config = localeConfig[loc]
          const isActive = loc === locale
          
          return (
            <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`text-xs transition-colors ${
                isActive
                  ? "text-primary-foreground font-medium"
                  : "text-primary-foreground/40 hover:text-primary-foreground/60"
              }`}
              title={config.label}
            >
              {config.flag}
            </button>
          )
        })}
      </div>
    </div>
  )
}
