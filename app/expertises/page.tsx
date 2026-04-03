import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import SecteursCarousel from "@/components/secteurs-intervention-carousel"
import ExpertiseCarousel from "@/components/expertises-carousel"
import { FadeIn } from "@/components/fade-in"
import { expertisesContent } from "@/content/expertises"

export default function SecteursPage() {
  // Transformer les expertises en carouselSections
  const carouselSections = expertisesContent.expertises.map((expertise) => ({
    header: {
      preTitle: "Expertise en",
      highlight1: expertise.title,
      midTitle: "",
      highlight2: "",
      postTitle: "",
      description: expertise.description,
      objectif: expertise.objectif,
    },
    cards: expertise.points.map((point, index) => ({
      id: `${expertise.number}-${index}`,
      title: point.title,
      description: point.description,
    })),
  }));

  return (
    <main>
      <Navigation backgrounded={false} />
      <div className="mt-20">
        <SecteursCarousel />
      </div>
      <FadeIn>
        <div className="mt-10 max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
            {expertisesContent.hero.title}
          </h2>
          <div className="mt-4 h-px w-16 bg-gold" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {expertisesContent.hero.description}
          </p>
        </div>
      </FadeIn>
      {/* Mapper sur la liste d'objets pour afficher les carousels */}
      <div className="max-w-6xl overflow-hidden mx-auto">
        {carouselSections.map((section, index) => (
          <ExpertiseCarousel 
            key={index}
            header={section.header}
            cards={section.cards}
            index={index}
          />
        ))}
      </div>
      
      <DiscussProject {...expertisesContent.discussProject} />
      <Footer />
    </main>
  )
}
