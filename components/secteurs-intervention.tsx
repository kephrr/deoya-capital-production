"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { secteursContent } from "@/content/secteurs"


export function SecteursIntervention() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { sectors, navigation, label, title, description } = secteursContent.intervention

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sectors.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sectors.length) % sectors.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-foreground/50">
              {label}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-balance md:text-4xl">
              {title}
            </h2>
            <div className="mt-4 h-px w-16 bg-gold/50" />
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70">
              {description}
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sectors.map((sector, index) => (
                <div key={index} className="w-full shrink-0 px-1">
                  <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 h-full">
                    {/* Header */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20">
                        <sector.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold">
                        {sector.title}
                      </h3>
                    </div>

                    {/* Challenges */}
                    <div className="mb-8">
                      <h4 className="mb-4 font-medium text-primary-foreground/90 text-sm uppercase tracking-wider">
                        Enjeux clés pour DEOYA sur ce secteur
                      </h4>
                      <ul className="space-y-3">
                        {sector.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start gap-3">
                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                            <span className="text-sm leading-relaxed text-primary-foreground/70">
                              {challenge}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subsegments */}
                    <div>
                      <h4 className="mb-4 font-medium text-primary-foreground/90 text-sm uppercase tracking-wider">
                        Sous-segments couverts
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {sector.subsegments.map((subsegment, subIndex) => (
                          <span
                            key={subIndex}
                            className="rounded-full border border-primary-foreground/15 px-3 py-1 text-xs text-primary-foreground/60"
                          >
                            {subsegment}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            aria-label={navigation.previousSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            aria-label={navigation.nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {sectors.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-accent"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`${navigation.goToSlide} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
