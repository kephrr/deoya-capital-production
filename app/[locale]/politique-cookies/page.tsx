import PolitiqueCookiesPageClient from './page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedPolitiqueCookiesPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedPolitiqueCookiesPage({params}: LocalizedPolitiqueCookiesPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <PolitiqueCookiesPageClient locale={locale as Locale} />
}
