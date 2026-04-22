"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DiscussProject } from "@/components/discuss-project";
import { FadeIn } from "@/components/fade-in";

const sections = [
  {
    id: "intro",
    tag: "Fondement",
    title: "Comprendre et articuler des logiques d'acteurs complexes",
    content: [
      "Les partenariats public-privé ne sont pas uniquement des montages contractuels.",
      "Ils reposent sur des équilibres sensibles entre intérêts publics, logiques économiques et contraintes institutionnelles.",
      "Leur réussite dépend moins d'une approche technique que de la capacité à comprendre et à aligner des acteurs aux objectifs parfois divergents.",
    ],
    highlight:
      "DEOYA Capital intervient sur cette zone critique : là où se rencontrent décision publique, logique d'investissement et réalité terrain.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Naviguer entre sphères publiques et privées",
    intro:
      "Les projets en PPP impliquent une multiplicité d'acteurs aux logiques propres :",
    actors: [
      "Institutions publiques",
      "Investisseurs",
      "Opérateurs privés",
      "Partenaires techniques",
    ],
    outcomes: [
      "Faciliter les échanges",
      "Anticiper les points de friction",
      "Structurer des dynamiques de collaboration durables",
    ],
    outcomesLabel: "Nous apportons une lecture claire de ces interactions afin de :",
  },
  {
    number: "02",
    title: "Intégrer les réalités locales dans des cadres internationaux",
    intro:
      "Dans de nombreux contextes, notamment en Afrique, les projets s'inscrivent dans des environnements hybrides :",
    actors: [
      "Cadres réglementaires en évolution",
      "Pratiques institutionnelles spécifiques",
      "Décalage entre normes théoriques et réalités opérationnelles",
    ],
    note: "Ces éléments ne sont pas des anomalies - ils font partie intégrante du projet.",
    outcomesLabel:
      "Notre rôle consiste à les intégrer dans la réflexion stratégique, afin d'éviter les décalages entre conception et mise en oeuvre.",
  },
  {
    number: "03",
    title: "Une lecture transcontinentale des projets",
    intro:
      "Les PPP impliquent souvent des acteurs issus de différentes zones économiques. Cette diversité crée des écarts :",
    actors: [
      "Perception du risque",
      "Exigence réglementaire",
      "Temporalité décisionnelle",
    ],
    outcomesLabel:
      "Nous intervenons dans une logique transcontinentale, en apportant une lecture cohérente de ces différences et en facilitant leur articulation.",
  },
  {
    number: "04",
    title: "Une approche ancrée dans la réalité des projets",
    intro:
      "Au-delà des cadres théoriques, les projets évoluent dans des environnements concrets, avec leurs contraintes et leurs imprévus. Nous intervenons aux côtés des décideurs pour :",
    actors: [
      "Ajuster les approches",
      "Sécuriser les arbitrages",
      "Maintenir la cohérence du projet dans le temps",
    ],
    outcomesLabel:
      "Cette proximité permet d'éviter les ruptures entre stratégie et réalité.",
  },
];

export default function PPPPage() {
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
              <FadeIn>
                <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary-foreground/50">
                  DEOYA Capital - PPP
                </p>
              </FadeIn>
              
              <FadeIn delay={100}>
                <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
                  Partenariats
                  <br />
                  <span className="text-accent italic">Public-Privé</span>
                </h1>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="mt-12 max-w-5xl space-y-6">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="space-y-4 text-lg font-light leading-relaxed text-primary-foreground/70">
                      <p>
                        Les partenariats public-privé ne sont pas uniquement des montages contractuels.
                      </p>
                      <p>
                        Ils reposent sur des équilibres sensibles entre intérêts publics, logiques économiques et contraintes institutionnelles.
                      </p>
                      <p>
                        Leur réussite dépend moins d'une approche technique que de la capacité à comprendre et à aligner des acteurs aux objectifs parfois divergents.
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="border-l border-accent pl-8">
                        <p className="font-serif text-2xl font-light leading-snug text-primary-foreground">
                          DEOYA Capital intervient sur cette{" "}
                          <span className="text-accent italic">zone critique</span> : là où se rencontrent décision publique, logique d'investissement et réalité terrain.
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
                Nos axes d'intervention
              </p>
            </FadeIn>

            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <FadeIn key={pillar.number} delay={index * 100}>
                  <div className="rounded-lg border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/30">
                    <div className="mb-8 flex items-start gap-6">
                      <span className="text-accent text-5xl font-light leading-none opacity-40">
                        {pillar.number}
                      </span>
                      <h2 className="font-serif text-2xl font-semibold leading-snug text-primary pt-1 lg:text-3xl">
                        {pillar.title}
                      </h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 lg:pl-18">
                      <div>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                          {pillar.intro}
                        </p>
                        <ul className="space-y-2">
                          {pillar.actors.map((actor) => (
                            <li key={actor} className="flex items-start gap-3 text-base text-muted-foreground">
                              <span className="mt-1.5 text-accent shrink-0">§</span>
                              {actor}
                            </li>
                          ))}
                        </ul>
                        {pillar.note && (
                          <p className="mt-5 italic text-sm leading-relaxed text-muted-foreground/70">
                            {pillar.note}
                          </p>
                        )}
                      </div>

                      <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {pillar.outcomesLabel}
                        </p>
                        {pillar.outcomes && (
                          <ul className="mt-5 space-y-2">
                            {pillar.outcomes.map((outcome) => (
                              <li key={outcome} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <span className="mt-1.5 text-accent shrink-0">¶</span>
                                {outcome}
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
        title="Pour aller plus loin"
        subtitle="Si vous développez un projet impliquant des acteurs publics et privés, ou souhaitez mieux appréhender les dynamiques propres aux partenariats public-privé, nous serons ravis d'examiner les modalités d'un accompagnement adapté à vos enjeux."
        buttonText="Échanger avec nous"
        redirectUrl="/contact"
        useModal={false}
        backgroundImage="/business-people-video-call-meeting.jpg"
      />
      </div>

      <Footer />
    </div>
  );
}
