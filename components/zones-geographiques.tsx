import { MapPin } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function ZonesGeographiques() {
  return (
    <section id="zones" className="bg-primary py-24 text-primary-foreground lg:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'url("/1158187_1968.jpg")',
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
              Nos march&eacute;s
            </p>
            <h2 className="font-serif text-3xl font-semibold text-accent md:text-5xl">
              Zones d'interventions
            </h2>
            <h3 className="font-serif font-semibold text-balance md:text-4xl">
                Une présence opérationnelle là où les projets se construisent.
            </h3>
            <div className="mt-4 h-px w-16 bg-gold" />
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70">
                Notre périmètre d'intervention n'est pas défini par des bureaux physiques, mais par la profondeur de notre réseau et la qualité de notre connaissance terrain.
            </p>
          </div>
        </FadeIn>

        {/* Three columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Afrique */}
          <FadeIn delay={100}>
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20">
                  <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-semibold">Afrique</h3>
              </div>

              {/* Abstract regional visual */}

              <p className="text-sm leading-relaxed text-primary-foreground/70">
                Notre expertise couvre les marchés africains, avec une compréhension approfondie
  des environnements réglementaires, économiques et institutionnels.

  Nous nous appuyons sur un réseau de partenaires terrain pour garantir une exécution
  opérationnelle efficace et un ancrage durable des projets.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                    {["Cameroun", "Gabon", "Congo", "Côte d'Ivoire", "..."].map((country) => (
                      <span
                        key={country}
                        className="rounded-full border border-primary-foreground/15 px-3 py-1 text-xs text-primary-foreground/60"
                      >
                        {country}
                      </span>
                    ))}
              </div>
            </div>
          </FadeIn>

          {/* Europe */}
          <FadeIn delay={250}>
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20">
                <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Europe</h3>
            </div>

            {/* Abstract regional visual */}

            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Ancrés en Europe, nous maîtrisons les standards en matière de gouvernance, de
conformité et de structuration financière.

Cette double expertise nous permet de sécuriser les projets et de construire des ponts
solides entre les environnements européens et internationaux.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["France", "Belgique", "Suisse","..."].map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-primary-foreground/15 px-3 py-1 text-xs text-primary-foreground/60"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
          </FadeIn>

          {/* Amérique du Nord */}
          <FadeIn delay={400}>
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20">
                <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Amérique du Nord</h3>
            </div>

            {/* Abstract regional visual */}

            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Nous accompagnons les investisseurs nord-américains dans le développement de
projets internationaux, en facilitant leur accès aux marchés africains et émergents.

Notre compréhension des standards financiers internationaux permet d’assurer une
structuration robuste et conforme aux exigences des investisseurs.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["États-Unis", "Canada","..."].map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-primary-foreground/15 px-3 py-1 text-xs text-primary-foreground/60"
                >
                  {country}
                </span>
              ))}
            </div>

          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
