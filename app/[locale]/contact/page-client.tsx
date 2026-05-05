'use client'

import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type ContactPageClientProps = {
  locale?: Locale
}

export default function ContactPageClient({ locale = "fr" }: ContactPageClientProps) {
  const t = useTranslations('contact')
  const discussProjectProps = {
    title: t('discussProject.title'),
    buttonText: t('discussProject.buttonText')
  }

  return (
    <main>
      <Navigation backgrounded={false} />
      <Contact />
      <DiscussProject {...discussProjectProps} />
      <Footer />
    </main>
  )
}
