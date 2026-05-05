import CabinetPageClient from './page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedCabinetPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedCabinetPage({params}: LocalizedCabinetPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <CabinetPageClient locale={locale as Locale} />
}
