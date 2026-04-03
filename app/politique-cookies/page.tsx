
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PolitiqueCookies() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Navigation backgrounded={false} />
      <header className="border-b border-stone-200 bg-white px-6 py-10 md:px-16 mt-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Deoya Capital</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            Politique de cookies
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-12">

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">1. Introduction</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            Le site <span className="font-medium text-stone-800">DEOYA CAPITAL</span> utilise des cookies
            afin d'améliorer l'expérience utilisateur et de mesurer l'audience.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            La présente politique explique l'utilisation des cookies et vos droits.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">2. Qu'est-ce qu'un cookie ?</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            Un cookie est un fichier déposé sur votre terminal lors de la navigation sur un site internet. Il permet notamment de :
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            {["Reconnaître votre appareil", "Améliorer la navigation", "Collecter des données statistiques"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">3. Types de cookies utilisés</h2>
          <div className="space-y-6">
            {[
              { title: "Cookies nécessaires", desc: "Indispensables au fonctionnement du site (navigation, sécurité)." },
              { title: "Cookies de mesure d'audience", desc: "Permettent d'analyser la fréquentation du site (ex : pages visitées, durée)." },
              { title: "Cookies tiers (le cas échéant)", desc: "Certains services externes peuvent déposer des cookies (ex : outils analytiques)." },
            ].map(({ title, desc }) => (
              <div key={title} className="pl-4 border-l-2 border-stone-200">
                <p className="text-sm font-semibold text-stone-800 mb-1">{title}</p>
                <p className="text-sm text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">4. Gestion des cookies</h2>
          <p className="text-sm text-stone-500 mb-3">Lors de votre première visite, un bandeau vous permet :</p>
          <ul className="space-y-2 text-sm text-stone-600 mb-5">
            {["D'accepter les cookies", "De les refuser", "De les paramétrer"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-500 mb-3">Vous pouvez également configurer votre navigateur pour :</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {["Refuser les cookies", "Supprimer les cookies existants"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">5. Durée de conservation</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Les cookies sont conservés pour une durée maximale de{" "}
            <span className="font-medium text-stone-800">13 mois</span>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">6. Vos droits</h2>
          <p className="text-sm text-stone-500 mb-3">Conformément au RGPD, vous pouvez :</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {["Accepter ou refuser les cookies", "Retirer votre consentement à tout moment"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">7. Contact</h2>
          <p className="text-sm text-stone-600 mb-3">Pour toute question :</p>
          <a
            href="mailto:contact@deoya-capital.com"
            className="text-sm underline underline-offset-4 hover:text-stone-900 transition-colors font-medium text-stone-700"
          >
            contact@deoya-capital.com
          </a>
        </section>
      </div>
      <Footer />
    </main>
  );
}