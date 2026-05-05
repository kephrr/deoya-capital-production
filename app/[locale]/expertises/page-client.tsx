'use client'

import { Navigation } from "@/components/navigation"
import { NosExpertises } from "@/components/nos-expertises"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type ExpertisesPageClientProps = {
  locale?: Locale
}

export default function ExpertisesPageClient({ locale = "fr" }: ExpertisesPageClientProps) {
  const t = useTranslations('expertises')
  const discussProjectProps = {
    title: t('discussProject.title'),
    buttonText: t('discussProject.buttonText')
  }

  return (
    <main>
      <Navigation backgrounded={false} />
      <NosExpertises />
      <DiscussProject {...discussProjectProps} />
      <Footer />
    </main>
  )
}
