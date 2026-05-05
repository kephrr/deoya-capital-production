'use client'

import { Navigation } from "@/components/navigation"
import { SecteursIntervention } from "@/components/secteurs-intervention"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type SecteursPageClientProps = {
  locale?: Locale
}

export default function SecteursPageClient({ locale = "fr" }: SecteursPageClientProps) {
  const t = useTranslations('secteurs')
  const discussProjectProps = {
    title: t('discussTitle'),
    buttonText: t('discussButton')
  }

  return (
    <main>
      <Navigation backgrounded={false} />
      <SecteursIntervention />
      <DiscussProject {...discussProjectProps} />
      <Footer />
    </main>
  )
}
