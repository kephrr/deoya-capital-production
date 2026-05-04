'use client'

import { Navigation } from "@/components/navigation"
import { VideoHero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Differentiators } from "@/components/differentiators"
import { DiscussProject } from "@/components/discuss-project"
import { Footer } from "@/components/footer"
import DomaineSection  from "@/components/domaines-intervention"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type PageClientProps = {
  locale?: Locale
}

export default function PageClient({ locale = "fr" }: PageClientProps) {
  const t = useTranslations('home.discussProject')
  const discussProjectProps = {
    title: t('title'),
    buttonText: t('buttonText')
  }

  return (
    <main>
      <Navigation />
      <VideoHero />
      <ValueProposition />
      <DomaineSection />
      <Differentiators />
      <DiscussProject {...discussProjectProps} />
      <Footer />
    </main>
  )
}
