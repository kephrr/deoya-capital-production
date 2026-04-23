"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DiscussProject } from "@/components/discuss-project";
import { FadeIn } from "@/components/fade-in";
import { pppContent } from "@/content/ppp";

const { hero, pillars, discussProject } = pppContent;

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
                      {hero.introduction.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="flex items-center">
                      <div className="border-l border-accent pl-8">
                        <p className="font-serif text-2xl font-light leading-snug text-primary-foreground">
                          {hero.highlight.split(' zone critique').map((part, index) => (
                            <span key={index}>
                              {part}
                              {index === 1 && <span className="text-accent italic"> zone critique</span>}
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
              {pillars.items.map((pillar, index) => (
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
                              <span className="mt-1.5 text-accent shrink-0">¶</span>
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
