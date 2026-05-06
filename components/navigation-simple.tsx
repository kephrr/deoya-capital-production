"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { navLinks } from "@/app/resources"
import { ContactModal } from "@/components/contact-modal"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLocale } from "next-intl"
import { images } from "@/content/images"
import Link from "next/link"

interface NavigationProps {
  backgrounded?: boolean
}

export function NavigationSimple({ backgrounded = true }: NavigationProps) {
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: `/${locale}`, label: "Accueil" },
    { href: `/${locale}/newsletter`, label: "Newsletter" },
    { href: `/${locale}/about`, label: "À propos" },
    { href: `/${locale}/contact`, label: "Contact" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !backgrounded 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <img 
                src={scrolled || !backgrounded ? images.navigation.logo.scrolled : images.navigation.logo.transparent}
                alt="Deoya Capital"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === item.href 
                    ? 'text-accent' 
                    : scrolled || !backgrounded 
                      ? 'text-foreground' 
                      : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Nous contacter
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`rounded-lg p-2 transition-colors ${
                scrolled || !backgrounded 
                  ? 'text-foreground hover:bg-secondary' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-secondary hover:text-accent ${
                    pathname === item.href 
                      ? 'bg-secondary text-accent' 
                      : 'text-foreground'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(true)
                  setMobileOpen(false)
                }}
                className="w-full rounded-lg bg-accent px-3 py-2 text-base font-medium text-white transition-colors hover:bg-accent/90"
              >
                Nous contacter
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  )
}
