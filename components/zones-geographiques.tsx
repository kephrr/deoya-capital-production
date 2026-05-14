import { MapPin } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { images } from "@/content/images"
import { useTranslations } from "next-intl"

type Zone = {
  title: string
  description: string
  countries: string[]
}

const COLUMN_DELAYS_MS = [100, 250, 400]

export function ZonesGeographiques() {
  const t = useTranslations("cabinet.zonesGeographiques")
  const zones = t.raw("zones") as Zone[]

  return (
    <section id="zones" className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-32">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('${images.cabinet.zonesGeographiques.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
              {t("label")}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-accent md:text-5xl">{t("title")}</h2>
            <h3 className="font-serif font-semibold text-balance md:text-4xl">{t("subtitle")}</h3>
            <div className="mt-4 h-px w-16 bg-gold" />
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70 whitespace-pre-line">
              {t("intro")}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {zones.map((zone, index) => (
            <FadeIn key={zone.title} delay={COLUMN_DELAYS_MS[index] ?? 100 + index * 150}>
              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20">
                    <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold">{zone.title}</h3>
                </div>

                <p className="text-sm leading-relaxed text-primary-foreground/70 whitespace-pre-line">
                  {zone.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {zone.countries.map((country, countryIndex) => (
                    <span
                      key={`${zone.title}-${countryIndex}`}
                      className="rounded-full border border-primary-foreground/15 px-3 py-1 text-xs text-primary-foreground/60"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
