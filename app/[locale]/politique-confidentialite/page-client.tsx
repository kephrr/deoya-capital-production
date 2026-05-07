'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type PolitiqueConfidentialitePageClientProps = {
  locale?: Locale
}

export default function PolitiqueConfidentialitePageClient({ locale = "fr" }: PolitiqueConfidentialitePageClientProps) {
  const t = useTranslations('politiqueConfidentialite')

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Navigation backgrounded={false} />
      <header className="border-b border-stone-200 bg-white px-6 py-10 md:px-16 mt-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">{t('company')}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            {t('title')}
          </h1>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-12">

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.introduction.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.introduction.content1')}
            <span className="font-medium text-stone-800"> {t('sections.introduction.companyName')}</span>{t('sections.introduction.content2')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.introduction.content3')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.responsable.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.responsable.subtitle')}</p>
          <dl className="space-y-3 text-sm">
            {t.raw('sections.responsable.info').map(([label, value]: string[]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-56 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">
                  {label === t('sections.responsable.emailLabel') ? (
                    <a href={`mailto:${value}`} className="underline underline-offset-4 hover:text-stone-900 transition-colors">{value}</a>
                  ) : value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.donneesCollectees.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.donneesCollectees.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('sections.donneesCollectees.items').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.finalites.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.finalites.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('sections.finalites.items').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.baseLegale.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.baseLegale.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('sections.baseLegale.items').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.dureeConservation.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.dureeConservation.content1')}
            <span className="font-medium text-stone-800"> {t('sections.dureeConservation.duration')}</span>{t('sections.dureeConservation.content2')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.destinataires.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">{t('sections.destinataires.content1')}</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.destinataires.content2')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.securite.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.securite.content')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.droitsUtilisateurs.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.droitsUtilisateurs.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-6">
            {t.raw('sections.droitsUtilisateurs.items').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600">
            {t('sections.droitsUtilisateurs.contactText')}{" "}
            <a href={`mailto:${t('sections.droitsUtilisateurs.contactEmail')}`} className="underline underline-offset-4 hover:text-stone-900 transition-colors font-medium text-stone-700">
              {t('sections.droitsUtilisateurs.contactEmail')}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.cookies.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.cookies.content1')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.cookies.content2')}{" "}
            <a href={t('sections.cookies.policyLink')} className="underline underline-offset-4 hover:text-stone-900 transition-colors font-medium text-stone-700">
              {t('sections.cookies.policyLinkText')}
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.modification.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.modification.content')}
          </p>
        </section>
      </div>
      <Footer />
    </main>
  )
}
