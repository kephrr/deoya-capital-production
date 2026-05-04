import { MapPin } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { images } from "@/content/images"
import { useTranslations } from "next-intl"

export function ZonesGeographiques() {
  const t = useTranslations('cabinet.zonesGeographiques')
  return (
    <section id="zones" className="bg-primary py-24 text-primary-foreground lg:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('${images.cabinet.zonesGeographiques.backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest 
            text-primary-foreground/70">
              {t('label')}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-accent md:text-5xl">
              {t('title')}
            </h2>
            <h3 className="font-serif font-semibold text-balance md:text-4xl">
                {t('subtitle')}
            </h3>
            <div className="mt-4 h-px w-16 bg-gold" />
                      </div>
        </FadeIn>

        {/* Zones grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-4 lg:gap-16">
          {t.raw('zones').map((zone: any, index: number) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20">
                    <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold">{zone.title}</h3>
                </div>

                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  {zone.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
