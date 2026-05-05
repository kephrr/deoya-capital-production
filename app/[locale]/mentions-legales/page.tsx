import MentionsLegalesPageClient from './page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedMentionsLegalesPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedMentionsLegalesPage({params}: LocalizedMentionsLegalesPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <MentionsLegalesPageClient locale={locale as Locale} />
}
