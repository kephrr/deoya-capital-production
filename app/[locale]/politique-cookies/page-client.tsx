'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

type PolitiqueCookiesPageClientProps = {
  locale?: Locale
}

export default function PolitiqueCookiesPageClient({ locale = "fr" }: PolitiqueCookiesPageClientProps) {
  const t = useTranslations('politiqueCookies')

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
            {t('sections.quEstCeQuUnCookie.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.quEstCeQuUnCookie.content1')}
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('sections.quEstCeQuUnCookie.items').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.typesCookies.title')}
          </h2>
          <div className="space-y-6">
            {t.raw('sections.typesCookies.cookieTypes').map((cookieType: { title: string; desc: string }, index: number) => (
              <div key={index} className="pl-4 border-l-2 border-stone-200">
                <p className="text-sm font-semibold text-stone-800 mb-1">{cookieType.title}</p>
                <p className="text-sm text-stone-600">{cookieType.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.gestionCookies.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-3">{t('sections.gestionCookies.bannerText')}</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-5">
            {t.raw('sections.gestionCookies.bannerOptions').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-500 mb-3">{t('sections.gestionCookies.browserText')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('sections.gestionCookies.browserOptions').map((item: string, index: number) => (
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
            <span className="font-medium text-stone-800"> {t('sections.dureeConservation.duration')}</span>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.vosDroits.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-3">{t('sections.vosDroits.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('sections.vosDroits.items').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.contact.title')}
          </h2>
          <p className="text-sm text-stone-600 mb-3">{t('sections.contact.questionText')}</p>
          <a
            href={`mailto:${t('sections.contact.email')}`}
            className="text-sm underline underline-offset-4 hover:text-stone-900 transition-colors font-medium text-stone-700"
          >
            {t('sections.contact.email')}
          </a>
        </section>
      </div>
      <Footer />
    </main>
  )
}
