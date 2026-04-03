import { FadeIn } from "@/components/fade-in"
import { Users, Building, Target, FileText } from "lucide-react"

export function ArchitectureEtEquipe() {
  const architecturePoints = [
    {
      number: "01",
      title: "Noyau stratégique",
      description: "L’équipe centrale DEOYA pilote chaque mission avec exigence. La stratégie est définie et maîtrisée en interne à chaque étape.",
      icon: Target
    },
    {
      number: "02", 
      title: "Réseau d'experts sélectionnés",
      description: "Des experts sectoriels et géographiques mobilisés sur mesure selon les besoins spécifiques de chaque mission : secteur, pays, phase d’exécution.",
      icon: Users
    },
    {
      number: "03",
      title: "Cadre méthodologique rigoureux", 
      description: "Chaque mission s’inscrit dans un protocole structuré garantissant cohérence, traçabilité et qualité des livrables.",
      icon: Building
    },
    {
      number: "04",
      title: "Reporting et transparence",
      description: "Un suivi régulier et structuré auprès des décideurs, assurant visibilité, clarté et absence totale d’opacité.",
      icon: FileText
    }
  ]

  const teamMembers = [
    {
      name: "Prénom NOM",
      role: "Fondateur & Managing Director",
      expertise: "Stratégie transcontinentale - Relations institutionnelles",
      bio: "Plus de 15 ans d'expérience en conseil stratégique et financement de projets transfrontaliers entre l'Afrique et l'Europe."
    },
    {
      name: "Prénom NOM", 
      role: "Partner Afrique Centrale",
      expertise: "Implantation terrain - Coordination locale",
      bio: "Expert des écosystèmes économiques et institutionnels d'Afrique centrale, avec une maîtrise des réalités opérationnelles locales."
    }
  ]

  return (
    <section className="bg-background py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Architecture Section */}
        <div className="mb-24">
          <FadeIn>
            <div className="mb-16 max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                Notre organisation
              </p>
              <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
                Notre Architecture Stratégique
              </h2>
              <div className="mt-4 h-px w-16 bg-gold" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Une organisation conçue pour allier agilité et excellence, combinant un pilotage
stratégique centralisé et un réseau international d’experts spécialisés afin de
répondre aux enjeux complexes de l’investissement transcontinental.
              </p>
            </div>
          </FadeIn>

          {/* Architecture Points */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {architecturePoints.map((point, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="flex gap-6">
                  {/* Number */}
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-mono text-sm font-bold">
                      {point.number}
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

        {/* Team Section */}
        <div className="hidden">
          <FadeIn delay={600}>
            <div className="mb-16 max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                Leadership
              </p>
              <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
                L'Équipe Dirigeante
              </h2>
              <div className="mt-4 h-px w-16 bg-gold" />
            </div>
          </FadeIn>

          {/* Team Members */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <FadeIn key={index} delay={700 + index * 150}>
                <div className="border border-border rounded-lg p-8 bg-secondary">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-accent mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {member.expertise}
                    </p>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                  
                  {/* Placeholder for photo */}
                  <div className="mt-6 h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary/30" strokeWidth={1.5} />
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
