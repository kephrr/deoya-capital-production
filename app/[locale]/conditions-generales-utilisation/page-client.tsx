'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type ConditionGeneraleUtilisationClientProps = {
  locale?: Locale
}

export default function ConditionGeneraleUtilisationClient({ locale = "fr" }: ConditionGeneraleUtilisationClientProps) {
  const t = useTranslations('conditionsGeneralesUtilisation')

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Navigation backgrounded={false} />
      <header className="border-b border-stone-200 bg-white px-6 py-10 md:px-16 mt-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-stone-400 mt-2">{t('header.brand')}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            {t('header.title')}
          </h1>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-12">

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('object.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('object.content')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('siteAccess.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('siteAccess.content1')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            {t('siteAccess.content2')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('siteContent.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('siteContent.content1')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            {t('siteContent.content2')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('responsibility.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('responsibility.content1')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            {t('responsibility.content2')}
          </p>
          <ul className="space-y-2 text-sm text-stone-600 mt-3 ml-6">
            {t.raw('responsibility.items').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('intellectualProperty.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('intellectualProperty.content1')}
          </p>
          <ul className="space-y-2 text-sm text-stone-600 mt-3 ml-6">
            {t.raw('intellectualProperty.items').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            {t('intellectualProperty.content2')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('externalLinks.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('externalLinks.content1')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            {t('externalLinks.content2')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('personalData.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('personalData.content')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('modification.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('modification.content')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('applicableLaw.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('applicableLaw.content1')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            {t('applicableLaw.content2')}
          </p>
        </section>
      </div>
      <Footer />
    </main>
  )
}
