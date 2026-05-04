'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { cgvContent } from "@/content/cgv"

export default function ConditionsGeneralesDeVente() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 mt-12">
      <Navigation backgrounded={false} />

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-16 py-14 space-y-14">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
            {cgvContent.hero.subtitle}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
            {cgvContent.hero.title}
          </h1>
        </div>

        {/* Dynamic Sections */}
        {cgvContent.sections.map((section, index) => (
          <section key={index}>
            <h2 className="font-serif text-xl font-semibold text-stone-900 mb-6 pb-3 border-b border-stone-200">
              {section.title}
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </section>
        ))}

        {/* Footer Contact */}
        <section className="border-t border-stone-200 pt-8">
          <p className="text-sm text-stone-500 mb-4">
            {cgvContent.footer.contact}
          </p>
          <div className="space-y-2">
            <p className="text-sm text-stone-600">
              <span className="font-medium">Email:</span>{" "}
              <a href={`mailto:${cgvContent.footer.email}`} className="text-stone-800 hover:text-stone-900 underline">
                {cgvContent.footer.email}
              </a>
            </p>
            <p className="text-sm text-stone-600">
              <span className="font-medium">Téléphone:</span>{" "}
              <a href={`tel:${cgvContent.footer.phone}`} className="text-stone-800 hover:text-stone-900 underline">
                {cgvContent.footer.phone}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}