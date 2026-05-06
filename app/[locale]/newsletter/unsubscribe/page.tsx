import { NavigationSimple } from "@/components/navigation-simple"
import { Footer } from "@/components/footer"
import { CheckCircle, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLocale } from "next-intl"

export const dynamic = "force-dynamic"

export default function UnsubscribePage() {
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-background">
      <NavigationSimple backgrounded={false} />
      
      <main className="mx-auto max-w-2xl px-6 py-24 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 font-serif text-4xl font-semibold text-primary">
            Désabonnement réussi
          </h1>

          {/* Message */}
          <div className="mb-8 space-y-4">
            <p className="text-lg text-muted-foreground">
              Vous avez été désabonné avec succès de notre newsletter.
            </p>
            <p className="text-muted-foreground">
              Nous regrettons de vous voir partir. Vous ne recevrez plus nos actualités 
              et analyses sur les marchés financiers africains.
            </p>
          </div>

          {/* Info box */}
          <div className="mb-8 rounded-lg border border-border bg-secondary/50 p-6">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <span className="text-sm">
                Si vous changez d'avis, vous pourrez vous réinscrire à tout moment 
                depuis notre page d'accueil.
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
            
            <Link
              href={`/${locale}/newsletter`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" />
              Voir la newsletter
            </Link>
          </div>

          {/* Footer info */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              DEOYA CAPITAL • Expertise en investissement sur les marchés africains
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
