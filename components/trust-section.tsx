"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { Play, Volume2, VolumeX } from "lucide-react"

export function TrustSection() {
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Video */}
          <FadeIn>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-primary border border-border">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted={isMuted}
                loop
                playsInline
              >
                <source src="/video/Deoya video.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de cette vidéo.
              </video>
              
              {/* Mute/Unmute button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors duration-200"
                aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              
              {/* Subtle overlay for better text readability if needed */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="h-full w-full bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={150}>
            <div className="space-y-6">
              {/* Section label */}
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Notre philosophie
              </p>

              {/* Main heading */}
              <h1 className="font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
                Un cabinet fondé sur la confiance
              </h1>

              {/* Description */}
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  DEOYA CAPITAL est né d'une conviction : les projets d'investissement transcontinentaux méritent un partenaire qui comprend à la fois les réalités du terrain africain et les exigences des standards européens.
                </p>
                
                <p>
                  Notre modèle est celui d'un cabinet stratégique agile — une équipe centrale de haut niveau, appuyée par un réseau international d'experts sélectionnés, mobilisés selon la nature exacte de chaque mission.
                </p>
                
                <p>
                  Nous intervenons là où la complexité est la plus grande : à l'interface des marchés, des cultures institutionnelles et des exigences réglementaires.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="/expertises"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity duration-200 hover:opacity-90"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
