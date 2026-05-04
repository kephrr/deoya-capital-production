import {hasLocale} from 'next-intl'
import {notFound} from 'next/navigation'

import NewsletterPage from '@/app/newsletter/page'
import {locales, type Locale} from '@/i18n/config'

type LocalizedNewsletterPageProps = {
  params: Promise<{locale: string}>
}

export default async function LocalizedNewsletterPage({params}: LocalizedNewsletterPageProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return <NewsletterPage locale={locale as Locale} />
}
