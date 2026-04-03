import { FadeIn } from "@/components/fade-in"
import { Target, Search, Building, Users, CheckCircle, TrendingUp, FileText, Globe, Shield, ArrowRight, Handshake, Link } from "lucide-react"
import Image from "next/image"

const expertises = [
  {
    number: "01",
    title: "Structuration de projets",
    description: "Nous posons les bases solides d'un projet viable et défendable. Cadrage stratégique, modélisation financière, organisation des flux décisionnels — avant que les premières ressources soient engagées.",
    image: "structuration.png",
    icon: Target,
    points: [
      {
        title: "Cadrage stratégique",
        description: "Définition des objectifs, du périmètre et des hypothèses clés. Feuille de route actionnable.",
        icon: Target
      },
      {
        title: "Modélisation financière",
        description: "Business plan, scénarios financiers, analyse de sensibilité pour les décideurs et investisseurs.",
        icon: TrendingUp
      },
      {
        title: "Structuration narrative",
        description: "Présentation du projet pour les partenaires, banques, régulateurs. Argumentation défendable.",
        icon: FileText
      },
      {
        title: "Gouvernance du projet",
        description: "Définition des rôles, responsabilités et mécanismes de décision entre parties prenantes.",
        icon: Users
      }
    ]
  },
  {
    number: "02",
    title: "Analyse de faisabilité",
    description: "Avant d'engager des ressources, vous avez besoin de certitudes. Nos analyses fournissent une lecture honnête et structurée de la viabilité de votre projet — sans chercher à forcer la décision.",
    image: "analysis.avif",
    icon: Search,
    points: [
      {
        title: "Étude de marché ciblée",
        description: "Analyse de la demande, de l'offre et des dynamiques concurrentielles sur votre marché cible.",
        icon: Globe
      },
      {
        title: "Analyse réglementaire",
        description: "Identification des contraintes légales, fiscales et sectorielles par pays d'intervention.",
        icon: Shield
      },
      {
        title: "Évaluation des risques",
        description: "Cartographie des risques opérationnels, institutionnels et financiers avec plan de mitigation.",
        icon: CheckCircle
      },
      {
        title: "Recommandation éclairée",
        description: "Rapport d'aide à décision clair, synthétique et défendable devant un board ou des investisseurs.",
        icon: ArrowRight
      }
    ]
  },
  {
    number: "03",
    title: "Relations institutionnelles & environnement réglementaire",
    description: "L'environnement institutionnel africain peut sembler opaque. Nous le rendons lisible, navigable et sécurisé pour vos équipes — quelle que soit la complexité politique ou administrative.",
    image: "relations.jpeg",
    icon: Building,
    points: [
      {
        title: "Cartographie des acteurs publics & parapublics",
        description: "Ministères, agences d'investissement, organismes de régulation, acteurs clés indirects. Qui décide vraiment.",
        icon: Users
      },
      {
        title: "Analyse du cadre réglementaire",
        description: "Réglementations sectorielles, contraintes d'implantation, normes spécifiques, points de friction potentiels.",
        icon: Shield
      },
      {
        title: "Préparation des dossiers stratégiques",
        description: "Notes institutionnelles, argumentaires économiques, présentations d'impact — pour un projet crédible et défendable.",
        icon: FileText
      },
      {
        title: "Mise en relation institutionnelle",
        description: "Identification des bons interlocuteurs, préparation des rencontres, coordination des échanges.",
        icon: Handshake
      },
      {
        title: "Accompagnement aux négociations",
        description: "Analyse des attentes publiques, structuration des concessions, gestion des points sensibles.",
        icon: ArrowRight
      },
      {
        title: "Coordination public / privé",
        description: "Alignement des acteurs locaux, interface entreprises / autorités, fluidification des échanges.",
        icon: Link
      }
    ]
  }
]

export function NosExpertises() {
  return (
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
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Notre savoir-faire
            </p>
            <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
              Nos Expertises
            </h2>
            <div className="mt-4 h-px w-16 bg-gold" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Cinq domaines d'intervention. Une seule logique : couvrir l'intégralité du cycle de vie 
              de votre projet — de la décision stratégique à l'exécution opérationnelle sur le terrain.
            </p>
          </div>
        </FadeIn>

        {/* Expertises */}
        <div className="space-y-20">
          {expertises.map((expertise, expertiseIndex) => (
            <FadeIn key={expertiseIndex} delay={expertiseIndex * 200}>
              <div>
                {/* Expertise header */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary">
                      <expertise.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-primary">
                      {expertise.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-3xl">
                    {expertise.description}
                  </p>
                </div>

                {/* Points grid */}
                  <div className="grid grid-cols-1 
                  gap-4 md:grid-cols-3">
                  {expertise.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="rounded-lg border border-border bg-secondary p-6"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <point.icon className="h-5 w-5 text-accent mt-0.5" strokeWidth={1.5} />
                        <h4 className="font-serif text-lg font-semibold text-primary">
                          {point.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  ))}
                  </div>
                
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
