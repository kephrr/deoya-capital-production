import { FadeIn } from "@/components/fade-in"
import { Target, Users, TrendingUp } from "lucide-react"
import { images } from "@/content/images"
import { useTranslations } from "next-intl"

export function NotreVision() {
  const t = useTranslations('cabinet.notreVision')
  const icons = [Target, Users, TrendingUp]
  
  return (
    <section className="bg-secondary py-24 lg:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('${images.cabinet.notreVision.backgroundPattern}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              {t('label')}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
              {t('title')}
            </h2>
            <div className="mt-4 h-px w-16 bg-gold" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t('subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {icons.map((Icon, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border">
                  <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-xl font-semibold text-primary">
                  {t(`values.${index}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`values.${index}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom statement */}
        <FadeIn delay={500}>
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-3xl">
              <blockquote className="font-serif text-2xl font-light leading-relaxed text-primary text-italic md:text-3xl">
                "{t('quote')}"
              </blockquote>
              <cite className="mt-4 block text-sm font-medium text-muted-foreground">
                — {t('cite')}
              </cite>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
