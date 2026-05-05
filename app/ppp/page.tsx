import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DiscussProject } from "@/components/discuss-project";
import { FadeIn } from "@/components/fade-in";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config"

type PPPPageProps = {
  locale: Locale
}

export default async function PPPPage({ locale }: PPPPageProps) {
  const t = await getTranslations({ locale, namespace: 'ppp' })

  const hero = {
    title: t('hero.title'),
    titleAccent: t('hero.titleAccent'),
    introduction: t.raw('hero.introduction'),
    highlight: t.raw('hero.highlight')
  }

  const pillars = {
    title: t('pillars.title'),
    challengesLabel: t('pillars.challengesLabel'),
    approachLabel: t('pillars.approachLabel'),
    items: t.raw('pillars.items')
  }

  const discussProject = {
    title: t('discussProject.title'),
    subtitle: t('discussProject.subtitle'),
    buttonText: t('discussProject.buttonText'),
    redirectUrl: "/contact",
    backgroundImage: "/business-people-video-call-meeting.jpg"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation backgrounded={true} />
      
      <div className="relative">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 h-full w-full opacity-[0.15]" aria-hidden="true" style={{
            backgroundImage: `url('/dark-abstract-pattern.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }} />
          
          <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
            <div className="max-w-6xl">

              
              <FadeIn delay={100}>
                <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
                  {hero.title}
                  <br />
                  <span className="text-accent italic">{hero.titleAccent}</span>
                </h1>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="mt-12 max-w-5xl space-y-6">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="space-y-4 text-lg font-light leading-relaxed text-primary-foreground/70">
                      {hero.introduction.map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="flex items-center">
                      <div className="border-l border-accent pl-8">
                        <p className="font-serif text-2xl font-light leading-snug text-primary-foreground">
                          {hero.highlight.map((part: string, index: number) => (
                            <span key={index} className={index === 1 ? 'text-accent italic' : ''}>
                              {part}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Gold decorative line at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/30" />
        </section>

        {/* Pillars Section */}
        <section className="relative bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <p className="mb-12 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {pillars.title}
              </p>
            </FadeIn>

            <div className="space-y-8">
              {pillars.items.map((pillar: any, index: number) => (
                <FadeIn key={pillar.number} delay={index * 100}>
                  <div className="relative rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/30 overflow-hidden">
                    {/* Header with number and title */}
                    <div className="relative p-8 pb-0">
                      <div className="flex items-start gap-6">
                        <span className="text-accent text-5xl font-light leading-none opacity-40">
                          {pillar.number}
                        </span>
                        <h2 className="font-serif text-2xl font-semibold leading-snug text-primary pt-1 lg:text-3xl max-w-2xl">
                          {pillar.title}
                        </h2>
                      </div>
                    </div>

                    {/* Problem Section - Left */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-accent/30 to-transparent"></div>
                      <div className="p-8 pt-6 lg:pl-12">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse"></div>
                          <p className="text-xs font-medium uppercase tracking-wider text-accent/80">
                            {pillars.challengesLabel}
                          </p>
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-muted-foreground font-medium">
                          {pillar.intro}
                        </p>
                        <ul className="space-y-3">
                          {pillar.actors.map((actor: string) => (
                            <li key={actor} className="flex items-start gap-3 text-base text-muted-foreground/80">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              <span>{actor}</span>
                            </li>
                          ))}
                        </ul>
                        {pillar.note && (
                          <div className="mt-6 p-4 bg-accent/5 border-l-2 border-accent/30 rounded-r">
                            <p className="italic text-sm leading-relaxed text-accent/90">
                              {pillar.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Solution Section - Right */}
                    <div className="relative border border-t">
                      <div className="absolute right-0 top-0 bottom-0 w-1"></div>
                      <div className="p-8 lg:pr-12">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <p className="text-xs font-medium uppercase tracking-wider text-accent">
                            {pillars.approachLabel}
                          </p>
                        </div>
                        <p className="mb-6 text-base leading-relaxed text-primary font-medium">
                          {pillar.outcomesLabel}
                        </p>
                        {pillar.outcomes && (
                          <ul className="space-y-3">
                            {pillar.outcomes?.map((outcome: string) => (
                              <li key={outcome} className="flex items-start gap-3  text-base text-muted-foreground/80">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <DiscussProject 
        title={discussProject.title}
        subtitle={discussProject.subtitle}
        buttonText={discussProject.buttonText}
        redirectUrl={discussProject.redirectUrl}
        useModal={false}
        backgroundImage={discussProject.backgroundImage}
      />
      </div>

      <Footer />
    </div>
  );
}
