import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import SecteursCarousel from "@/components/secteurs-intervention-carousel"
import ExpertiseCarousel from "@/components/expertises-carousel"
import { FadeIn } from "@/components/fade-in"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type ExpertisesPageClientProps = {
  locale?: Locale
}

export default function ExpertisesPageClient({ locale = "fr" }: ExpertisesPageClientProps) {
  const t = useTranslations('expertises')

  // Utiliser les traductions pour le hero
  const heroContent = {
    title: t('hero.title'),
    description: t('hero.description')
  }

  // Utiliser les traductions pour discussProject
  const discussProjectContent = {
    backgroundImage: "/co-workers-with-blue-file.jpg",
    redirectUrl: "/contact",
    title: t('discussProject.title'),
    subtitle: t('discussProject.subtitle'),
    buttonText: t('discussProject.buttonText'),
    useModal: false
  }

  // Utiliser les traductions pour les expertises
  const expertisesData = t.raw('expertises') as Array<{
    number: string;
    title: string;
    objectif: string;
    description: string;
    image: string;
    icon: string;
    points: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  }>

  
  
  // Transformer les expertises en carouselSections
  const carouselSections = expertisesData.map((expertise) => ({
    header: {
      preTitle: t('preTitle'),
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
        <div className="mt-10 max-w-6xl overflow-hidden mx-auto px-10">
          <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
            {heroContent.title}
          </h2>
          <div className="mt-4 h-px w-16 bg-gold" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {heroContent.description}
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
      
      <DiscussProject {...discussProjectContent} />
      <Footer />
    </main>
  )
}
