'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"

export default function MentionsLegales() {
  const t = useTranslations('mentionsLegales')

  const editorFields = [
    [t('editor.fields.companyName'), t('editor.fields.companyNameValue')],
    [t('editor.fields.legalForm'), t('editor.fields.legalFormValue')],
    [t('editor.fields.capital'), t('editor.fields.capitalValue')],
    [t('editor.fields.headquarters'), t('editor.fields.headquartersValue')],
    [t('editor.fields.rcs'), t('editor.fields.rcsValue')],
    [t('editor.fields.vat'), t('editor.fields.vatValue')],
  ]

  const hostingFields = [
    [t('hosting.fields.provider'), t('hosting.fields.providerValue')],
    [t('hosting.fields.address'), t('hosting.fields.addressValue')],
    [t('hosting.fields.website'), t('hosting.fields.websiteValue')],
  ]

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 mt-12">
      <Navigation backgrounded={false} />

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-14">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
            {t('header.brand')}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            {t('header.title')}
          </h1>
        </div>

        {/* Section 1 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('editor.title')}
          </h2>
          <p 
            className="text-sm text-stone-500 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('editor.description') }}
          />
          <dl className="space-y-3 text-sm">
            {editorFields.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-64 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="w-64 shrink-0 text-stone-400 font-medium">{t('editor.fields.director')}</dt>
              <dd className="text-stone-700">{t('editor.fields.directorValue')}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="w-64 shrink-0 text-stone-400 font-medium">{t('editor.fields.email')}</dt>
              <dd className="text-stone-700">
                <a
                  href={`mailto:${t('editor.fields.emailValue')}`}
                  className="underline underline-offset-4 hover:text-stone-900 transition-colors"
                >
                  {t('editor.fields.emailValue')}
                </a>
              </dd>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('hosting.title')}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{t('hosting.description')}</p>
          <dl className="space-y-3 text-sm">
            {hostingFields.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-64 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">
                  {label === t('hosting.fields.website') ? (
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
            {t('intellectualProperty.title')}
          </h2>
          <p 
            className="text-sm text-stone-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('intellectualProperty.content1') }}
          />
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            {t('intellectualProperty.content2')}
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            {t('liability.title')}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('liability.content')}
          </p>
        </section>

        {/* Section 5 */}
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
      </main>
      <Footer />
    </div>
  );
}