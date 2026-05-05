import ExpertisesPageClient from './page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedExpertisesPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedExpertisesPage({params}: LocalizedExpertisesPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <ExpertisesPageClient locale={locale as Locale} />
}
