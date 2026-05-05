import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getTranslations } from "next-intl/server"
import type { Locale } from "@/i18n/config"

type CgvPageProps = {
  locale: Locale
}

export default async function CgvPage({ locale }: CgvPageProps) {
  const t = await getTranslations({ locale, namespace: 'cgv' })

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 mt-12">
      <Navigation backgrounded={false} />

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-14">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
            {t('hero.subtitle')}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            {t('hero.title')}
          </h1>
        </div>

        {/* Dynamic Sections */}
        {t.raw('sections').map((section: any, index: number) => (
          <section key={index}>
            <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
              {section.title}
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </section>
        ))}

        {/* Footer Contact */}
        <section className="border-t border-stone-200 pt-8">
          <p className="text-sm text-stone-500 mb-4">
            {t('footer.contact')}
          </p>
          <div className="space-y-2">
            <p className="text-sm text-stone-600">
              <span className="font-medium">Email:</span>{" "}
              <a href={`mailto:${t('footer.email')}`} className="text-stone-800 hover:text-stone-900 underline">
                {t('footer.email')}
              </a>
            </p>
            <p className="text-sm text-stone-600">
              <span className="font-medium">Téléphone:</span>{" "}
              <a href={`tel:${t('footer.phone')}`} className="text-stone-800 hover:text-stone-900 underline">
                {t('footer.phone')}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}