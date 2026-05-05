import CgvPageClient from './page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedCgvPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedCgvPage({params}: LocalizedCgvPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <CgvPageClient locale={locale as Locale} />
}
