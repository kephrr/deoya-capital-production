'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"
import { DiscussProject } from "@/components/discuss-project"

type CgvPageClientProps = {
  locale?: Locale
}

export default function ConditionsGeneralesDeVente({ locale = "fr" }: CgvPageClientProps) {
  const t = useTranslations('cgv')

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 mt-12">
      <Navigation backgrounded={false} />

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-14">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
            Deoya Capital
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            {t('hero.title')}
          </h1>
        </div>

        {/* 1. Objet */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.0.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.0.content')}
          </p>
        </section>

        {/* 2. Prestations */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.1.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.1.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {[
              t('sections.1.services.0'),
              t('sections.1.services.1'),
              t('sections.1.services.2'),
              t('sections.1.services.3'),
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.1.conclusion')}
          </p>
        </section>

        {/* 3. Devis et commande */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.2.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.2.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {[t('sections.2.items.0'), t('sections.2.items.1')].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.2.conclusion')}
          </p>
        </section>

        {/* 4. Tarifs */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.3.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.3.intro')}
          </p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {[t('sections.3.criteria.0'), t('sections.3.criteria.1'), t('sections.3.criteria.2')].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.3.conclusion')}
          </p>
        </section>

        {/* 5. Modalités de paiement */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.4.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.4.subtitle')}</p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            {[
              { label: t('sections.4.paymentSchedule.0.label'), value: t('sections.4.paymentSchedule.0.value') },
              { label: t('sections.4.paymentSchedule.1.label'), value: t('sections.4.paymentSchedule.1.value') },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-lg border border-stone-200 bg-white px-5 py-4 text-center">
                <p className="font-serif text-2xl font-semibold text-stone-900">{value}</p>
                <p className="text-xs text-stone-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.4.paymentMethod')}
          </p>
        </section>

        {/* 6. Retard de paiement */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.5.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.5.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {[t('sections.5.consequences.0'), t('sections.5.consequences.1')].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.5.conclusion')}
          </p>
        </section>

        {/* 7. Obligations du client */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.6.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.6.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {[t('sections.6.obligations.0'), t('sections.6.obligations.1'), t('sections.6.obligations.2')].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.6.conclusion')}
          </p>
        </section>

        {/* 8. Responsabilité */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.7.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.7.intro')}
          </p>
          <p className="text-sm text-stone-500 mb-3">
            {t('sections.7.subtitle')}
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            {[t('sections.7.exclusions.0'), t('sections.7.exclusions.1')].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 9. Confidentialité */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.8.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.8.content')}
          </p>
        </section>

        {/* 10. Propriété intellectuelle */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.9.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.9.points.0')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.9.points.1')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.9.points.2')}
          </p>
        </section>

        {/* 11. Résiliation */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.10.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('sections.10.subtitle')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {[t('sections.10.consequences.0'), t('sections.10.consequences.1')].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 12. Force majeure */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.11.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.11.content')}
          </p>
        </section>

        {/* 13. Droit applicable */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.12.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.12.points.0')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('sections.12.points.1')}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

