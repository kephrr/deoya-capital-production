import ConditionsGeneralesUtilisationPageClient from './page-client'
import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type Locale} from '@/i18n/config'

type LocalizedConditionsGeneralesUtilisationPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedConditionsGeneralesUtilisationPage({params}: LocalizedConditionsGeneralesUtilisationPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <ConditionsGeneralesUtilisationPageClient locale={locale as Locale} />
}
