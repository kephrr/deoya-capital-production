"use client"

import { useState } from "react"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { Globe, ChevronDown } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { locales, localeConfig } from "@/i18n/config"
import { useTranslations } from "next-intl"

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('languageSwitcher')

  const handleLanguageChange = (newLocale: string) => {
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    
    // Build the new URL with the new locale (using window.location for static export)
    const newPath = `/${newLocale}${pathWithoutLocale}`
    
    // Navigate to the new locale
    window.location.href = newPath
    setIsOpen(false)
  }

  const currentLocaleConfig = localeConfig[locale as keyof typeof localeConfig]

  return (
    <FadeIn>
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary hover:text-foreground"
          aria-label={t('changeLanguage')}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLocaleConfig.flag}
          </span>
          <span className="sm:hidden text-foreground">
            {currentLocaleConfig.flag}
          </span>
          <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full z-50 mt-2 min-w-48 rounded-md border border-border bg-background shadow-lg">
            <div className="p-1">
              {locales.map((loc) => {
                const config = localeConfig[loc]
                const isActive = loc === locale
                
                return (
                  <button
                    key={loc}
                    onClick={() => handleLanguageChange(loc)}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-accent text-white"
                        : "text-foreground hover:bg-gray-200"
                    }`}
                  >
                    <span className="text-base">{config.flag}</span>
                    <div className="flex-1 text-left">
                      <div className="font-medium">{config.label}</div>
                      <div className={` text-xs ${
                        isActive
                          ? "text-white"
                          : "text-muted-foreground"
                        }`}>
                        {t(`languages.${loc}`)}
                      </div>
                    </div>
                    {isActive && (
                      <div className="h-2 w-2 rounded-full bg-accent" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  )
}
