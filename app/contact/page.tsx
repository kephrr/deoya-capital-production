import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main>
      <Navigation backgrounded={false} />
      <Contact />
      <Footer />
    </main>
  )
}
