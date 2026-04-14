import { navLinks } from "@/app/resources"
import { layoutContent } from "@/content/layout"

export function Footer() {
  const { brand, sections, bottom } = layoutContent.footer
  const currentYear = new Date().getFullYear()

  const socialIcons = {
    Facebook: '/facebook-app-symbol.png',
    Instagram: '/instagram.png',
    LinkedIn: '/linkedin.png',
    YouTube: '/youtube.png',
  }

  return (
    <footer className="border-t border-accent bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2" aria-label={brand.homeLabel}>
              <img src={brand.logo} 
              alt={brand.alt} className="h-14 w-auto" />
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              {brand.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/40">
              {sections.navigation.title}
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors duration-200 hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/40">
              {sections.contact.title}
            </p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <p>{sections.contact.email}</p>
              <p>{sections.contact.location}</p>
            </div>
            
            {/* Social Media */}
            {sections.social && (
              <div className="mt-6">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/40">
                  {sections.social.title}
                </p>
                <div className="flex gap-4">
                  {sections.social.networks.map((network) => {
                    const iconSrc = socialIcons[network.name as keyof typeof socialIcons]
                    return (
                      <a
                        key={network.name}
                        href={network.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-foreground/60 
                        transition-colors duration-200 hover:text-primary-foreground
                        border border-primary-foreground/20 rounded-full p-2 hover:bg-primary-foreground/10"
                        aria-label={network.ariaLabel}
                      >
                        <img 
                          src={iconSrc} 
                          alt={network.name}
                          className="h-5 w-5 object-contain"
                        />
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {bottom.copyright.replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-6">
            <a
              href="/mentions-legales"
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              {bottom.legal.mentions}
            </a>
            <a
              href="/politique-confidentialite"
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              {bottom.legal.privacy}
            </a>
            <a
              href="/politique-cookies"
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              Politique de cookies
            </a>
            <a
              href="/conditions-generales-utilisation"
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              CGU
            </a>
            <a
              href="/cgv"
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
