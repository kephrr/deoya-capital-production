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

        {/* 2. Nature des prestations */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.1.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.1.content')}
          </p>
        </section>

        {/* 3. Formation du contrat */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.2.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.2.content')}
          </p>
        </section>

        {/* 4. Modalités de paiement et pénalités de retard */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.3.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.3.content')}
          </p>
        </section>

        {/* 5. Responsabilité */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.4.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.4.content')}
          </p>
        </section>

        {/* 6. Intervention des experts */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.5.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.5.content')}
          </p>
        </section>

        {/* 7. Confidentialité */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.6.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.6.content')}
          </p>
        </section>

        {/* 8. Propriété intellectuelle */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.7.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.7.content')}
          </p>
        </section>

        {/* 9. Résiliation */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.8.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.8.content')}
          </p>
        </section>

        {/* 10. Force majeure */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.9.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.9.content')}
          </p>
        </section>

        {/* 11. Droit applicable et litiges */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.10.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.10.content')}
          </p>
        </section>

        {/* 12. Acceptation */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('sections.11.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('sections.11.content')}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

