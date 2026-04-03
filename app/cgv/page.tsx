'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ConditionsGeneralesDeVente() {
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
            Conditions générales de vente
          </h1>
        </div>

        {/* 1. Objet */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            1. Objet
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            Les présentes Conditions Générales de Vente (CGV) définissent les modalités selon
            lesquelles <span className="font-medium text-stone-800">DEOYA CAPITAL</span> fournit
            des prestations de conseil stratégique, d'analyse, de structuration de projets et
            d'accompagnement à ses clients.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            Toute commande implique l'acceptation sans réserve des présentes CGV.
          </p>
        </section>

        {/* 2. Prestations */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            2. Prestations
          </h2>
          <p className="text-sm text-stone-500 mb-4">DEOYA CAPITAL propose notamment :</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {[
              "Analyse stratégique et études de marché",
              "Structuration de projets d'investissement",
              "Accompagnement à l'implantation et au développement international",
              "Conseil en environnements réglementaires et institutionnels",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            Les prestations sont définies précisément dans une proposition commerciale ou un contrat.
          </p>
        </section>

        {/* 3. Devis et commande */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            3. Devis et commande
          </h2>
          <p className="text-sm text-stone-500 mb-4">Toute mission fait l'objet :</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {["D'un devis signé", "Ou d'un contrat"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            La validation du devis ou du contrat vaut acceptation des CGV.
          </p>
        </section>

        {/* 4. Tarifs */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            4. Tarifs
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            Les tarifs sont exprimés en euros, hors taxes (HT). Ils sont fixés selon :
          </p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {["La nature de la mission", "Sa complexité", "Sa durée"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            DEOYA CAPITAL se réserve le droit de modifier ses tarifs à tout moment.
          </p>
        </section>

        {/* 5. Modalités de paiement */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            5. Modalités de paiement
          </h2>
          <p className="text-sm text-stone-500 mb-4">Sauf mention contraire :</p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            {[
              { label: "À la signature", value: "50 %" },
              { label: "À la livraison", value: "50 %" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-lg border border-stone-200 bg-white px-5 py-4 text-center">
                <p className="font-serif text-2xl font-semibold text-stone-900">{value}</p>
                <p className="text-xs text-stone-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            Les paiements s'effectuent par{" "}
            <span className="font-medium text-stone-800">virement bancaire</span>.
          </p>
        </section>

        {/* 6. Retard de paiement */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            6. Retard de paiement
          </h2>
          <p className="text-sm text-stone-500 mb-4">Tout retard de paiement entraîne :</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {[
              "Des pénalités de retard",
              "Une indemnité forfaitaire de recouvrement (40 € minimum, conformément à la loi)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            DEOYA CAPITAL se réserve le droit de suspendre la mission en cas de non-paiement.
          </p>
        </section>

        {/* 7. Obligations du client */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            7. Obligations du client
          </h2>
          <p className="text-sm text-stone-500 mb-4">Le client s'engage à :</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-4">
            {[
              "Fournir des informations exactes et complètes",
              "Collaborer activement",
              "Respecter les délais convenus",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            DEOYA CAPITAL ne saurait être tenue responsable en cas de données incomplètes ou erronées.
          </p>
        </section>

        {/* 8. Responsabilité */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            8. Responsabilité
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            DEOYA CAPITAL est tenue à une{" "}
            <span className="font-medium text-stone-800">obligation de moyens</span>. Les
            recommandations fournies ne constituent pas une garantie de résultat.
          </p>
          <p className="text-sm text-stone-500 mb-3">
            La responsabilité de DEOYA CAPITAL ne pourra être engagée en cas de :
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            {["Décisions prises par le client", "Pertes financières indirectes"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 9. Confidentialité */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            9. Confidentialité
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Les parties s'engagent à conserver strictement confidentielles toutes les informations
            échangées dans le cadre de la mission.
          </p>
        </section>

        {/* 10. Propriété intellectuelle */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            10. Propriété intellectuelle
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            Les livrables restent la propriété de DEOYA CAPITAL jusqu'au paiement complet.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            Après paiement, le client dispose d'un droit d'utilisation dans le cadre de son activité.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            Toute reproduction ou diffusion sans autorisation est interdite.
          </p>
        </section>

        {/* 11. Résiliation */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            11. Résiliation
          </h2>
          <p className="text-sm text-stone-500 mb-4">En cas de résiliation anticipée :</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {[
              "Les prestations réalisées restent dues",
              "Les sommes versées ne sont pas remboursables",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 12. Force majeure */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            12. Force majeure
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            DEOYA CAPITAL ne pourra être tenue responsable en cas d'événement imprévisible et
            indépendant de sa volonté empêchant l'exécution des prestations.
          </p>
        </section>

        {/* 13. Droit applicable */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
            13. Droit applicable
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            Les présentes CGV sont soumises au droit français.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            Tout litige relève de la compétence des tribunaux français.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}