import SecteursPageClient from './page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedSecteursPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedSecteursPage({params}: LocalizedSecteursPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <SecteursPageClient locale={locale as Locale} />
}
