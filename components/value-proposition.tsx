'use client'

import { Globe, Target, Zap } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { Quote } from "@/components/quote"
import { homeContent } from "@/content/home"

export function ValueProposition() {
  const content = homeContent
  const { items, quote } = content.valueProposition
  
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div
                className="flex items-center justify-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-secondary">
                  <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      {/* Bottom statement */}
      <FadeIn delay={500}>
        <Quote 
          citation={quote.citation}
          subtext={quote.subtext}
        />
      </FadeIn>
    </section>
  )
}
