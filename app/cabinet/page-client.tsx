'use client'

import { Navigation } from "@/components/navigation"
import { TrustSection } from "@/components/trust-section"
import { NotreVision } from "@/components/notre-vision"
import { ArchitectureEtEquipe } from "@/components/architecture-et-equipe"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import { ZonesGeographiques } from "@/components/zones-geographiques"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type CabinetPageClientProps = {
  locale?: Locale
}

export default function CabinetPageClient({ locale = "fr" }: CabinetPageClientProps) {
  const t = useTranslations('cabinet')
  const discussProjectProps = {
    title: t('discussProject.title'),
    buttonText: t('discussProject.buttonText')
  }

  return (
    <main>
      <Navigation backgrounded={false} />
      <TrustSection />
      <NotreVision />
      <ZonesGeographiques />
      <ArchitectureEtEquipe />
      <DiscussProject {...discussProjectProps} />
      <Footer />
    </main>
  )
}
