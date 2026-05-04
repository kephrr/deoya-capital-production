export const locales = ['fr', 'en', 'es', 'ar'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'

export const localeConfig: Record<
  Locale,
  { label: string; dir: 'ltr' | 'rtl'; flag: string }
> = {
  fr: { label: 'Francais', dir: 'ltr', flag: 'FR' },
  en: { label: 'English', dir: 'ltr', flag: 'EN' },
  es: { label: 'Espanol', dir: 'ltr', flag: 'ES' },
  ar: { label: 'Arabic', dir: 'rtl', flag: 'AR' },
}
