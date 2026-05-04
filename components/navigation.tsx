"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/app/resources"
import { ContactModal } from "@/components/contact-modal"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLocale } from "next-intl"
import { images } from "@/content/images"

interface NavigationProps {
  backgrounded?: boolean
}

export function Navigation({ backgrounded = true }: NavigationProps) {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label={t('navigationLabel')}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href={`/${locale}`} className="flex items-center gap-2" aria-label={t('homeLabel')}>
          { 
            scrolled || !backgrounded
              ? <img src={images.navigation.logo.scrolled} alt={t('logoAlt')} className="h-14 w-auto" />
              : <img src={images.navigation.logo.transparent} alt={t('logoAlt')} className="h-14 w-auto" />
          }
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const fullPath = `/${locale}${link.href}`
            const isActive = pathname === fullPath
            return (
              <a
                key={link.href}
                href={fullPath}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  isActive 
                    ? "text-accent" 
                    : scrolled || !backgrounded 
                      ? "text-foreground" 
                      : "text-primary-foreground/80"
                }`}
              >
                {t(link.key)}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"></span>
                )}
              </a>
            )
          })}
          <LanguageSwitcher />
          {!scrolled && (
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity duration-200 hover:opacity-90 cursor-pointer"
            >
              {t('contactButton')}
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${scrolled || backgrounded ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled || backgrounded ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`relative text-sm font-medium transition-colors duration-200 hover:text-accent ${
                    isActive ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.key ? t(link.key) : link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"></span>
                  )}
                </a>
              )
            })}
            <div className="mt-4 pt-4 border-t border-border">
              <LanguageSwitcher className="w-full" />
            </div>
            {!scrolled && (
              <button
                onClick={() => {
                  setMobileOpen(false)
                  setIsContactModalOpen(true)
                }}
                className="mt-4 rounded-md bg-accent px-5 py-2.5 text-center text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 cursor-pointer"
              >
                {t('contactButton')}
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </nav>
  )
}
