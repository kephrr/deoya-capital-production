import { useTranslations } from "next-intl"
import { FooterLanguageSwitcher } from "@/components/footer-language-switcher"
import { useLocale } from "next-intl"
import { images } from "@/content/images"

export function Footer() {
  const t = useTranslations()
  const locale = useLocale()
  const currentYear = new Date().getFullYear()

  const socialIcons = images.social

  // Social networks configuration
  const socialNetworks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61575333096729&mibextid=wwXIfr",
      ariaLabel: "Facebook"
    },
    {
      name: "Instagram", 
      href: "https://www.instagram.com/deoya.capital?igsh=MXZuYnQ5d25mbm9naQ%3D%3D&utm_source=qr",
      ariaLabel: "Instagram"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/deoya-capital/", 
      ariaLabel: "LinkedIn"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@DEOYACAPITAL",
      ariaLabel: "YouTube"
    }
  ]

  // Liens de navigation avec leurs URLs
  const navigationLinks = {
    cabinet: "/cabinet",
    expertises: "/expertises",
    reseau: "/reseau",
    ppp: "/partenariats-publics-prives",
    newsletter: "/newsletter",
    contact: "/contact"
  }

  return (
    <footer className="border-t border-accent bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href={`/${locale}`} className="flex items-center gap-2" aria-label={t('footer.brand.homeLabel')}>
              <img src={images.footer.logo} 
              alt={t('footer.brand.alt')} className="h-14 w-auto" />
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              {t('footer.brand.description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/40">
              {t('footer.navigation.title')}
            </p>
            <ul className="flex flex-col gap-3">
              {Object.entries(navigationLinks).map(([key, href]) => (
                <li key={key}>
                  <a
                    href={key === 'home' ? `/${locale}` : `/${locale}${href}`}
                    className="text-sm text-primary-foreground/60 transition-colors duration-200 hover:text-primary-foreground"
                  >
                    {t(`footer.navigation.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/40">
              {t('footer.contact.title')}
            </p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <p>{t('footer.contact.email')}</p>
              <p>{t('footer.contact.phone')}</p>
              <p>{t('footer.contact.location')}</p>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/40">
                {t('footer.social.title')}
              </p>
              <div className="flex gap-4">
                {socialNetworks.map((network) => (
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
                      src={socialIcons[network.name.toLowerCase() as 'facebook' | 'instagram' | 'linkedin' | 'youtube']} 
                      alt={network.name}
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <FooterLanguageSwitcher />
          <div className="flex gap-6">
            <a
              href={`/${locale}/mentions-legales`}
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              {t('footer.legal.mentions')}
            </a>
            <a
              href={`/${locale}/politique-confidentialite`}
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              {t('footer.legal.privacy')}
            </a>
            <a
              href={`/${locale}/politique-cookies`}
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              {t('footer.legal.cookies')}
            </a>
            <a
              href={`/${locale}/conditions-generales-utilisation`}
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              {t('footer.legal.cgu')}
            </a>
            <a
              href={`/${locale}/cgv`}
              className="text-xs text-primary-foreground/40 transition-colors duration-200 hover:text-primary-foreground/60"
            >
              {t('footer.legal.cgv')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
