'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type PppPageClientProps = {
  locale?: Locale
}

export default function PppPageClient({ locale = "fr" }: PppPageClientProps) {
  const t = useTranslations('ppp')
  const discussProjectProps = {
    title: t('discussProject.title'),
    buttonText: t('discussProject.buttonText')
  }

  return (
    <main>
      <Navigation backgrounded={false} />
      <div className="min-h-screen bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-primary text-balance md:text-5xl">
            {t('hero.title')}
          </h1>
          <div className="mt-8 prose prose-lg max-w-none">
            <p>{t('hero.subtitle')}</p>
          </div>
        </div>
      </div>
      <DiscussProject {...discussProjectProps} />
      <Footer />
    </main>
  )
}
