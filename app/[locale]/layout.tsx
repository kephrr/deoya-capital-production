import type {ReactNode} from 'react'
import {notFound} from 'next/navigation'
import {hasLocale, NextIntlClientProvider} from 'next-intl'
import {getMessages, setRequestLocale} from 'next-intl/server'

import {locales, localeConfig} from '@/i18n/config'

type LocaleLayoutProps = {
  children: ReactNode
  params: Promise<{locale: string}>
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}))
}

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <div lang={locale} dir={localeConfig[locale].dir}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  )
}
