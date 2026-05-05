import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'

import ReseauPage from '@/app/reseau/page'
import {locales, type Locale} from '@/i18n/config'

type LocalizedReseauPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedReseauPage({params}: LocalizedReseauPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <ReseauPage />
}
