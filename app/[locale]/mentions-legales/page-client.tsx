'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type MentionsLegalesPageClientProps = {
  locale?: Locale
}

export default function MentionsLegalesPageClient({ locale = "fr" }: MentionsLegalesPageClientProps) {
  const t = useTranslations('mentionsLegales')

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 mt-12">
      <Navigation backgrounded={false} />

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-14">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
            {t('company')}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            {t('title')}
          </h1>
        </div>

        {/* Section 1 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.editeur.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4 leading-relaxed">
            {t('sections.editeur.content1')}
            <span className="font-medium text-stone-700"> {t('sections.editeur.companyName')}</span> {t('sections.editeur.content2')}
          </p>
          <dl className="space-y-3 text-sm">
            {t.raw('sections.editeur.info').map(([label, value]: string[]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-64 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 space-y-3 text-sm">
            {t.raw('sections.editeur.additionalInfo').map(([label, value]: string[]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-64 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">
                  {label === t('sections.editeur.emailLabel') ? (
                    <a
                      href={`mailto:${value}`}
                      className="underline underline-offset-4 hover:text-stone-900 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.hebergement.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.hebergement.content1')}</p>
          <dl className="space-y-3 text-sm">
            {t.raw('sections.hebergement.info').map(([label, value]: string[]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-64 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">
                  {label === t('sections.hebergement.websiteLabel') ? (
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-stone-900 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.proprieteIntellectuelle.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.proprieteIntellectuelle.content1')}
            <span className="font-medium text-stone-800"> {t('sections.proprieteIntellectuelle.companyName')}</span>, {t('sections.proprieteIntellectuelle.content2')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            {t('sections.proprieteIntellectuelle.content3')}
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.responsabilite.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.responsabilite.content')}
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.droitApplicable.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.droitApplicable.content1')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            {t('sections.droitApplicable.content2')}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
