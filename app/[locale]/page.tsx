import PageClient from '../page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedHomePageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedHomePage({params}: LocalizedHomePageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <PageClient locale={locale as Locale} />
}
