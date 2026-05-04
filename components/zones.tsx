import {
  Compass,
  FileSearch,
  Building2,
  LayoutGrid,
  ArrowLeftRight,
  Users,
} from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { useTranslations } from "next-intl"


export function Expertises() {
  const t = useTranslations('home.expertises')
  const itemsData = t.raw('items') as Array<{title: string, description: string}>
  
  // Map icons to items
  const icons = [FileSearch, Compass, Users]
  const items = itemsData.map((item, index) => ({
    ...item,
    icon: icons[index]
  }))
  
  return (
    <section id="expertises" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              {t('label')}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
              {t('title')}
            </h2>
            <div className="mt-4 h-px w-16 bg-gold" />
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <article
                className="group h-full rounded-lg border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-primary/5">
                  <item.icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
