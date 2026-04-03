"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import { ContactModal } from "@/components/contact-modal";
import { ArrowRight, Globe } from "lucide-react";
import { reseauContent } from "@/content/reseau";

export default function ReseauPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { hero, zones, couvertureGeographique, expertisesSectorielles, rejoindreReseau, ctaFinal } = reseauContent

  return (
    <main>
      <Navigation />
      <Hero {...hero} />
      
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Zones géographiques */}
        <FadeIn delay={200}>
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6">
                {couvertureGeographique.title}
              </h2>
              <div className="h-px w-24 bg-gold/50 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {couvertureGeographique.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {zones.map((zone) => (
                <div key={zone.id} className="bg-white rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center gap-3 mb-6">
                    <Globe className="h-6 w-6 text-accent" />
                    <h4 className="font-serif text-xl font-semibold text-primary">{zone.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Secteurs d'expertise */}
        <FadeIn delay={400}>
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6">
                {expertisesSectorielles.title}
              </h2>
              <div className="h-px w-24 bg-gold/50 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {expertisesSectorielles.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {expertisesSectorielles.secteurs.map((secteur, index) => (
                <div key={index} className="bg-white rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <secteur.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{secteur.name}</h4>
                  <p className="text-sm text-muted-foreground">{secteur.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Partenaires stratégiques */}
        <FadeIn delay={400}>
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6">
                {rejoindreReseau.title}
              </h2>
              <div className="h-px w-24 bg-gold/50 mx-auto mb-8"></div>
            </div>
          </div>
        </FadeIn>

        {/* CTA Final */}
        <FadeIn delay={500}>
          <div className="text-center">
            <div className="bg-primary rounded-lg p-12 text-primary-foreground">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                {ctaFinal.title}
              </h3>
              <p className="text-lg mb-8 opacity-90">
                {ctaFinal.description}
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {ctaFinal.buttonText}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
      
      <Footer />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}
