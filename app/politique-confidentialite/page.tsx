'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"

export default function PolitiqueConfidentialite() {
  const t = useTranslations('politiqueConfidentialite')

  const responsibleFields = [
    [t('responsible.fields.company'), t('responsible.fields.companyValue')],
    [t('responsible.fields.companyName'), t('responsible.fields.companyNameValue')],
    [t('responsible.fields.address'), t('responsible.fields.addressValue')],
    [t('responsible.fields.email'), t('responsible.fields.emailValue')],
  ]

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Navigation backgrounded={false} />
      <header className="border-b border-stone-200 bg-white px-6 py-10 md:px-16 mt-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">{t('header.brand')}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            {t('header.title')}
          </h1>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-12">

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('introduction.title')}</h2>
          <p 
            className="text-sm text-stone-600 leading-relaxed mb-3"
            dangerouslySetInnerHTML={{ __html: t('introduction.content1') }}
          />
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('introduction.content2')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('responsible.title')}</h2>
          <p className="text-sm text-stone-500 mb-4">{t('responsible.description')}</p>
          <dl className="space-y-3 text-sm">
            {responsibleFields.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-56 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">
                  {label === t('responsible.fields.email') ? (
                    <a href={`mailto:${value}`} className="underline underline-offset-4 hover:text-stone-900 transition-colors">{value}</a>
                  ) : value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('dataCollected.title')}</h2>
          <p className="text-sm text-stone-500 mb-4">{t('dataCollected.description')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('dataCollected.items').map((item: string) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('purposes.title')}</h2>
          <p className="text-sm text-stone-500 mb-4">{t('purposes.description')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('purposes.items').map((item: string) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('legalBasis.title')}</h2>
          <p className="text-sm text-stone-500 mb-4">{t('legalBasis.description')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('legalBasis.items').map((item: string) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('retention.title')}</h2>
          <p 
            className="text-sm text-stone-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('retention.content') }}
          />
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('recipients.title')}</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">{t('recipients.content1')}</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('recipients.content2')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('security.title')}</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('security.content')}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('rights.title')}</h2>
          <p className="text-sm text-stone-500 mb-4">{t('rights.description')}</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-6">
            {t.raw('rights.items').map((item: string) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600">
            {t('rights.contact')}{" "}
            <a href="mailto:contact@deoya-capital.com" className="underline underline-offset-4 hover:text-stone-900 transition-colors font-medium text-stone-700">
              {t('responsible.fields.emailValue')}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('cookies.title')}</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('cookies.content1')}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('cookies.content2')}{" "}
            <a href="/politique-cookies" className="underline underline-offset-4 hover:text-stone-900 transition-colors font-medium text-stone-700">
              {t('cookies.policyLink')}
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('modification.title')}</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {t('modification.content')}
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}