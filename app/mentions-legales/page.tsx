'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 mt-12">
      <Navigation backgrounded={false} />

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-14">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
            Deoya Capital
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            Mentions légales
          </h1>
        </div>

        {/* Section 1 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            Éditeur du site
          </h2>
          <p className="text-sm text-stone-500 mb-4 leading-relaxed">
            Le site <span className="font-medium text-stone-700">DEOYA CAPITAL</span> est édité par :
          </p>
          <dl className="space-y-3 text-sm">
            {[
              ["Nom de la société", "Société en cours de création"],
              ["Forme juridique", "Société en cours de création"],
              ["Capital social", "Société en cours de création"],
              ["Siège social", "Paris, France"],
              ["Immatriculation RCS", "Société en cours de création"],
              ["Numéro de TVA intracommunautaire", "Société en cours de création"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-64 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="w-64 shrink-0 text-stone-400 font-medium">Directeur de la publication</dt>
              <dd className="text-stone-700">Société en cours de création</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="w-64 shrink-0 text-stone-400 font-medium">Email</dt>
              <dd className="text-stone-700">
                <a
                  href="mailto:contact@deoya-capital.com"
                  className="underline underline-offset-4 hover:text-stone-900 transition-colors"
                >
                  contact@deoya-capital.com
                </a>
              </dd>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            Hébergement
          </h2>
          <p className="text-sm text-stone-500 mb-4">Le site est hébergé par :</p>
          <dl className="space-y-3 text-sm">
            {[
              ["Hébergeur", "LWS (Ligne Web Services)"],
              ["Adresse", "10 rue Penthièvre, 75008 Paris – France"],
              ["Site web", "https://www.lws.fr"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-64 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">
                  {label === "Site web" ? (
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-stone-900 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            Propriété intellectuelle
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            L'ensemble des contenus présents sur le site (textes, images, logo, design, structure)
            est la propriété exclusive de{" "}
            <span className="font-medium text-stone-800">DEOYA CAPITAL</span>, sauf mention contraire.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            Toute reproduction, représentation, modification, publication ou adaptation, totale ou
            partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            Responsabilité
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            DEOYA CAPITAL s'efforce d'assurer l'exactitude des informations diffusées sur le site.
            Toutefois, elle ne saurait être tenue responsable des erreurs, omissions ou résultats
            obtenus suite à l'utilisation de ces informations.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            Droit applicable
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Le présent site est soumis au droit français.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            Tout litige relève de la compétence des tribunaux français.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}