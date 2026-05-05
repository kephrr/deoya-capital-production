import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import SecteursCarousel from "@/components/secteurs-intervention-carousel"
import ExpertiseCarousel from "@/components/expertises-carousel"
import { FadeIn } from "@/components/fade-in"
import { getTranslations } from "next-intl/server"
import type { Locale } from "@/i18n/config"

type ExpertisesPageProps = {
  locale: Locale
}

export default async function SecteursPage({ locale }: ExpertisesPageProps) {
  const t = await getTranslations({ locale, namespace: 'expertises' })

  // Transformer les expertises en carouselSections
  const carouselSections = t.raw('expertises').map((expertise: any) => ({
    header: {
      preTitle: t('preTitle'),
      highlight1: expertise.title,
      midTitle: "",
      highlight2: "",
      postTitle: "",
      description: expertise.description,
      objectif: expertise.objectif,
    },
    cards: expertise.points.map((point: any, index: number) => ({
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
            {t('hero.title')}
          </h2>
          <div className="mt-4 h-px w-16 bg-gold" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {t('hero.description')}
          </p>
        </div>
      </FadeIn>
      {/* Mapper sur la liste d'objets pour afficher les carousels */}
      <div className="max-w-6xl overflow-hidden mx-auto">
        {carouselSections.map((section: any, index: number) => (
          <ExpertiseCarousel 
            key={index}
            header={section.header}
            cards={section.cards}
            index={index}
          />
        ))}
      </div>
      
      <DiscussProject {...t.raw('discussProject')} />
      <Footer />
    </main>
  )
}
