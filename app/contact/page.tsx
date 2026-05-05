import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Locale } from "@/i18n/config"

type ContactPageProps = {
  locale: Locale
}

export default function ContactPage({ locale }: ContactPageProps) {
  return (
    <main>
      <Navigation backgrounded={false} />
      <Contact />
      <Footer />
    </main>
  )
}
