import { FadeIn } from "@/components/fade-in"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import { SecteursIntervention } from "@/components/secteurs-intervention"
import { getSecteursContent } from "@/content/secteurs"
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

type SecteursPageProps = {
  locale?: Locale
}

export default function SecteursPage({ locale = "fr" }: SecteursPageProps) {
  const secteursContent = getSecteursContent(locale)
  const { hero, secteursCards, discussProject } = secteursContent

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
                {hero.label}
              </p>
              <h1 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
                {hero.title}
              </h1>
              <div className="mt-4 h-px w-16 bg-gold" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {hero.description}
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
        backgroundImage={discussProject.backgroundImage}
        redirectUrl={discussProject.redirectUrl}
        title={discussProject.title}
        subtitle={discussProject.subtitle}
        buttonText={discussProject.buttonText}
      />
      <Footer />
    </main>
  )
}
