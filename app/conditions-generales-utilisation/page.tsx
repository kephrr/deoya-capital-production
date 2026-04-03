import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ConditionGeneraleUtilisation() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Navigation backgrounded={false} />
      <header className="border-b border-stone-200 bg-white px-6 py-10 md:px-16 mt-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-stone-400 mt-2">DEOYA Capital</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            Conditions générales d'utilisation
          </h1>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-12">

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">1. Objet</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Les présentes CGU définissent les conditions d'utilisation du site DEOYA CAPITAL.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">2. Accès au site</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Le site est accessible gratuitement à tout utilisateur disposant d'un accès internet.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            DEOYA CAPITAL se réserve le droit de modifier ou suspendre le site à tout moment.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">3. Contenu du site</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Les informations diffusées sont fournies à titre informatif.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            Elles ne constituent pas un conseil personnalisé ou une garantie de résultat.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">4. Responsabilité</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            L'utilisateur reconnaît utiliser le site sous sa responsabilité.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            DEOYA CAPITAL ne pourra être tenue responsable :
          </p>
          <ul className="space-y-2 text-sm text-stone-600 mt-3 ml-6">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />des erreurs ou omissions
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />de l'utilisation des informations
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />de dommages indirects
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">5. Propriété intellectuelle</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Tous les contenus du site sont protégés :
          </p>
          <ul className="space-y-2 text-sm text-stone-600 mt-3 ml-6">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />textes
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />logo
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />design
            </li>
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            Toute reproduction est interdite sans autorisation.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">6. Liens externes</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Le site peut contenir des liens vers d'autres sites.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            DEOYA CAPITAL ne peut être tenue responsable de leur contenu.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">7. Données personnelles</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Les données collectées sont traitées conformément à la politique de confidentialité.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">8. Modification</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            DEOYA CAPITAL se réserve le droit de modifier les CGU à tout moment.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">9. Droit applicable</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Les présentes CGU sont soumises au droit français.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            Tout litige relève des tribunaux compétents.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}