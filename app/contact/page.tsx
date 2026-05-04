import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Locale } from "@/i18n/config"

type ContactPageProps = {
  locale?: Locale
}

export default function ContactPage({ locale = "fr" }: ContactPageProps) {
  return (
    <main>
      <Navigation backgrounded={false} />
      <Contact locale={locale} />
      <Footer />
    </main>
  )
}
