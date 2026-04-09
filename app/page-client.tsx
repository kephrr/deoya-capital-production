'use client'

import { Navigation } from "@/components/navigation"
import { VideoHero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Differentiators } from "@/components/differentiators"
import { DiscussProject } from "@/components/discuss-project"
import { Footer } from "@/components/footer"
import DomaineSection  from "@/components/domaines-intervention"
import { homeContent } from "@/content/home"

export default function PageClient() {
  const content = homeContent

  return (
    <main>
      <Navigation />
      <VideoHero />
      <ValueProposition />
      <DomaineSection />
      <Differentiators />
      <DiscussProject {...content.discussProject} />
      <Footer />
    </main>
  )
}
