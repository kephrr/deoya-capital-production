'use client'

import { Navigation } from "@/components/navigation"
import { TrustSection } from "@/components/trust-section"
import { NotreVision } from "@/components/notre-vision"
import { ArchitectureEtEquipe } from "@/components/architecture-et-equipe"
import { Footer } from "@/components/footer"
import { DiscussProject } from "@/components/discuss-project"
import { ZonesGeographiques } from "@/components/zones-geographiques"
import { cabinetContent } from "@/content/cabinet"

export default function CabinetPageClient() {
  const content = cabinetContent

  return (
    <main>
      <Navigation backgrounded={false} />
      <TrustSection />
      <NotreVision />
      <ZonesGeographiques />
      <ArchitectureEtEquipe />
      <DiscussProject {...content.discussProject} />
      <Footer />
    </main>
  )
}
