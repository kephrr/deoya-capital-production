import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'

import PppPage from '@/app/ppp/page'
import {locales, type Locale} from '@/i18n/config'

type LocalizedPppPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedPppPage({params}: LocalizedPppPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <PppPage locale={locale as Locale} />
}
