import CabinetPageClient from "./page-client"
import type { Locale } from "@/i18n/config"

type CabinetPageProps = {
  locale: Locale
}

export default function CabinetPage({ locale }: CabinetPageProps) {
  return <CabinetPageClient locale={locale} />
}
