import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'

import ContactPage from '@/app/contact/page'
import {locales, type Locale} from '@/i18n/config'

type LocalizedContactPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedContactPage({params}: LocalizedContactPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <ContactPage />
}
