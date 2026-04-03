'use client'

import { Eye, BarChart3, Handshake, Rocket } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { homeContent } from "@/content/home"


export function Differentiators() {
  const content = homeContent
  const { label, title, items } = content.differentiators
  
  return (
    <section id="apropos" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              {label}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
              {title}
            </h2>
            <div className="mt-4 h-px w-16 bg-gold" />
          </div>
        </FadeIn>

        {/* 4-point grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn key={index} delay={index * 120}>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/5">
                  <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Gold decorative divider */}
        <div className="mx-auto mt-20 h-px w-24 bg-gold/40" />
      </div>
    </section>
  )
}
