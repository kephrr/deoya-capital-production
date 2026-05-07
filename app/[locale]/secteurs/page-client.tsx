import { FadeIn } from "@/components/fade-in"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import { SecteursIntervention } from "@/components/secteurs-intervention"
import { secteursContent } from "@/content/secteurs"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

function SecteurCard({ title, icon: Icon, description, expertise, delay }: { 
  title: string
  icon: any
  description: string
  expertise: string[]
  delay: number 
}) {
  return (
    <FadeIn delay={delay}>
      <div className="rounded-lg border border-border bg-secondary p-8 h-full">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-primary mb-6">
          <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
        </div>
        <h3 className="mb-3 font-serif text-xl font-bold text-primary">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          {description}
        </p>
        <div className="space-y-2">
          {expertise.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-accent" />
              <span className="text-xs text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

type SecteursPageClientProps = {
  locale?: Locale
}

export default function SecteursPageClient({ locale = "fr" }: SecteursPageClientProps) {
  const t = useTranslations('secteurs')
  const { hero, secteursCards, discussProject } = secteursContent

  // Utiliser les traductions pour le hero si disponibles, sinon utiliser le contenu par défaut
  const heroContent = {
    label: t('label') || hero.label,
    title: t('title') || hero.title,
    description: t('description') || hero.description
  }

  // Utiliser les traductions pour discussProject si disponibles
  const discussProjectContent = {
    backgroundImage: discussProject.backgroundImage,
    redirectUrl: discussProject.redirectUrl,
    title: t('discussTitle') || discussProject.title,
    subtitle: t('discussSubtitle') || discussProject.subtitle,
    buttonText: t('discussButton') || discussProject.buttonText
  }

  return (
    <main className="min-h-screen">
      <Navigation backgrounded={false} />
      
      <section className="bg-background py-24 lg:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/light-pattern.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mb-16 max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                {heroContent.label}
              </p>
              <h1 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
                {heroContent.title}
              </h1>
              <div className="mt-4 h-px w-16 bg-gold" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {heroContent.description}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secteursCards.map((secteur, index) => (
              <SecteurCard
                key={secteur.id}
                title={secteur.title}
                icon={secteur.icon}
                description={secteur.description}
                expertise={secteur.expertise}
                delay={(index + 1) * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <SecteursIntervention />

      <DiscussProject 
        backgroundImage={discussProjectContent.backgroundImage}
        redirectUrl={discussProjectContent.redirectUrl}
        title={discussProjectContent.title}
        subtitle={discussProjectContent.subtitle}
        buttonText={discussProjectContent.buttonText}
      />
      <Footer />
    </main>
  )
}
