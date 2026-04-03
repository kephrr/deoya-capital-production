import { FadeIn } from "@/components/fade-in"
import { Target, Users, TrendingUp } from "lucide-react"

export function NotreVision() {
  const values = [
    {
      icon: Target,
      title: "Excellence opérationnelle",
      description: "Nous transformons les stratégies en actions concrètes, avec un pilotage rigoureux et un suivi terrain structuré."
    },
    {
      icon: Users,
      title: "Confiance et transparence",
      description: "Nous construisons des relations durables fondées sur l’exigence, l’éthique et une communication claire à chaque étape."
    },
    {
      icon: TrendingUp,
      title: "Impact durable",
      description: "Nous visons une création de valeur pérenne, au bénéfice de nos clients et des écosystèmes dans lesquels nous intervenons."
    }
  ]

  return (
    <section className="bg-secondary py-24 lg:py-32 relative overflow-hidden">
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
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Notre vision
            </p>
            <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
              Redéfinir le conseil en investissement transcontinental
            </h2>
            <div className="mt-4 h-px w-16 bg-gold" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Nous défendons une approche du conseil qui allie expertise internationale et
compréhension fine des réalités locales.

Chaque projet est une opportunité de structurer des investissements solides et de créer

des passerelles durables entre les économies.
            </p>
          </div>
        </FadeIn>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border">
                  <value.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-xl font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
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
                "L'avenir de l'investissement transcontinental appartient à ceux qui savent 
                naviguer entre les mondes sans jamais perdre de vue l'humain."
              </blockquote>
              <cite className="mt-4 block text-sm font-medium text-muted-foreground">
                — La vision DEOYA CAPITAL
              </cite>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
