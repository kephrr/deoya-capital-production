import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'

import ExpertisesPage from '@/app/expertises/page'
import {locales, type Locale} from '@/i18n/config'

type LocalizedExpertisesPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedExpertisesPage({params}: LocalizedExpertisesPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <ExpertisesPage />
}
