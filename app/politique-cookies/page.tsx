'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"

export default function PolitiqueCookies() {
  const t = useTranslations('politiqueCookies')

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
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('whatIsCookie.title')}</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {t('whatIsCookie.content')}
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('whatIsCookie.items').map((item: string) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('cookieTypes.title')}</h2>
          <p className="text-sm text-stone-500 mb-4">{t('cookieTypes.description')}</p>
          <div className="space-y-6">
            {t.raw('cookieTypes.items').map((item: any) => (
              <div key={item.title} className="pl-4 border-l-2 border-stone-200">
                <p className="text-sm font-semibold text-stone-800 mb-1">{item.title}</p>
                <p className="text-sm text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('cookieManagement.title')}</h2>
          <p className="text-sm text-stone-500 mb-3">{t('cookieManagement.description')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('cookieManagement.options').map((item: string) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('cookieDuration.title')}</h2>
          <p 
            className="text-sm text-stone-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('cookieDuration.content') }}
          />
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('userRights.title')}</h2>
          <p className="text-sm text-stone-500 mb-3">{t('userRights.description')}</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-6">
            {t.raw('userRights.items').map((item: string) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600">
            {t('userRights.contact')}{" "}
            <a
              href="mailto:contact@deoya-capital.com"
              className="text-sm underline underline-offset-4 hover:text-stone-900 transition-colors font-medium text-stone-700"
            >
              {t('contact.emailValue')}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('contact.title')}</h2>
          <p className="text-sm text-stone-500 mb-3">{t('contact.description')}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">{t('browserConfiguration.title')}</h2>
          <p className="text-sm text-stone-500 mb-3">{t('browserConfiguration.description')}</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {t.raw('browserConfiguration.options').map((item: string) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
}