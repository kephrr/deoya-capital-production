import { FadeIn } from "@/components/fade-in"
import { Users, Building, Target, FileText } from "lucide-react"
import { images } from "@/content/images"
import { useTranslations } from "next-intl"

export function ArchitectureEtEquipe() {
  const t = useTranslations('cabinet.architectureEtEquipe')
  const icons = [Target, Users, Building, FileText]

  return (
    <section className="bg-secondary py-12 lg:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('${images.cabinet.architectureEtEquipe.backgroundPattern}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Architecture Section */}
        <div className="mb-24">
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

          {/* Architecture Points */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {t.raw('points').map((point: any, index: number) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="flex gap-6">
                  {/* Number */}
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-mono text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-2 font-serif text-xl font-semibold text-primary">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
