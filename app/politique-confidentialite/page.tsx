import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Navigation backgrounded={false} />
      <header className="border-b border-stone-200 bg-white px-6 py-10 md:px-16 mt-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Deoya Capital</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            Politique de confidentialité
          </h1>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-12">

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">1. Introduction</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            La présente politique de confidentialité a pour objectif d'informer les utilisateurs du site{" "}
            <span className="font-medium text-stone-800">DEOYA CAPITAL</span> sur la manière dont leurs
            données personnelles sont collectées, utilisées et protégées.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            DEOYA CAPITAL s'engage à assurer la protection des données personnelles conformément au
            Règlement Général sur la Protection des Données (RGPD) et à la législation française en vigueur.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">2. Responsable du traitement</h2>
          <p className="text-sm text-stone-500 mb-4">Le responsable du traitement des données est :</p>
          <dl className="space-y-3 text-sm">
            {[
              ["Société", "DEOYA CAPITAL"],
              ["Nom de la société", "DEOYA CAPITAL"],
              ["Adresse du siège social", "Paris, France"],
              ["Email", "contact@deoya-capital.com"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-56 shrink-0 text-stone-400 font-medium">{label}</dt>
                <dd className="text-stone-700">
                  {label === "Email" ? (
                    <a href={`mailto:${value}`} className="underline underline-offset-4 hover:text-stone-900 transition-colors">{value}</a>
                  ) : value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">3. Données collectées</h2>
          <p className="text-sm text-stone-500 mb-4">Dans le cadre de l'utilisation du site, les données suivantes peuvent être collectées :</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {["Nom et prénom", "Adresse email", "Informations communiquées via les formulaires de contact", "Données de navigation (cookies)"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">4. Finalités du traitement</h2>
          <p className="text-sm text-stone-500 mb-4">Les données personnelles sont collectées pour les finalités suivantes :</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {["Répondre aux demandes de contact", "Échanger avec des prospects, partenaires ou clients", "Assurer le suivi des échanges", "Améliorer l'expérience utilisateur et les services proposés"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">5. Base légale</h2>
          <p className="text-sm text-stone-500 mb-4">Le traitement des données repose sur :</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {["Le consentement de l'utilisateur", "L'intérêt légitime de DEOYA CAPITAL"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">6. Durée de conservation</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Les données personnelles sont conservées pour une durée maximale de{" "}
            <span className="font-medium text-stone-800">3 ans</span> à compter du dernier contact.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">7. Destinataires des données</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">Les données collectées sont exclusivement destinées à DEOYA CAPITAL.</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            Elles peuvent être transmises à des prestataires techniques (hébergement, maintenance) uniquement dans le cadre du fonctionnement du site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">8. Sécurité des données</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            DEOYA CAPITAL met en œuvre des mesures techniques et organisationnelles appropriées afin de garantir la sécurité et la confidentialité des données personnelles.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">9. Droits des utilisateurs</h2>
          <p className="text-sm text-stone-500 mb-4">Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-6">
            {["Droit d'accès", "Droit de rectification", "Droit de suppression", "Droit d'opposition", "Droit à la limitation du traitement"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-600">
            Vous pouvez exercer vos droits en contactant :{" "}
            <a href="mailto:contact@deoya-capital.com" className="underline underline-offset-4 hover:text-stone-900 transition-colors font-medium text-stone-700">
              contact@deoya-capital.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">10. Cookies</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            Le site peut utiliser des cookies afin d'assurer le bon fonctionnement du site, mesurer l'audience et améliorer l'expérience utilisateur.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            Pour en savoir plus, consultez notre{" "}
            <a href="/politique-cookies" className="underline underline-offset-4 hover:text-stone-900 transition-colors font-medium text-stone-700">
              politique de cookies
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">11. Modification de la politique</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            DEOYA CAPITAL se réserve le droit de modifier la présente politique de confidentialité à tout moment afin de garantir sa conformité avec la législation en vigueur.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}