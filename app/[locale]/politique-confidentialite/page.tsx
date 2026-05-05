import PolitiqueConfidentialitePageClient from './page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedPolitiqueConfidentialitePageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedPolitiqueConfidentialitePage({params}: LocalizedPolitiqueConfidentialitePageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <PolitiqueConfidentialitePageClient locale={locale as Locale} />
}
