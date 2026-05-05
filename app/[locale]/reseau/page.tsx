import ReseauPageClient from './page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedReseauPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedReseauPage({params}: LocalizedReseauPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <ReseauPageClient locale={locale as Locale} />
}
