import { FadeIn } from "@/components/fade-in"

export function ClientsTrust() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
              Ils nous font confiance
            </h2>
            <div className="mt-4 h-px w-16 bg-gold mx-auto" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Grands groupes internationaux, ETI, fonds industriels et investisseurs institutionnels 
              actifs sur l'axe Afrique-Europe.
            </p>
          </div>
          
          {/* Client logos band */}
          <div className="mt-12 overflow-hidden rounded-lg border border-border bg-background">
            <div className="flex items-center justify-center py-12 px-8 min-h-37.5">
              <p className="text-sm text-muted-foreground italic">
                Bande de logos clients / partenaires autorisés — défilement possible
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
