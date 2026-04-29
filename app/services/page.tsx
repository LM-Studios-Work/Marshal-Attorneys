import type { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ServicesIndexHero } from "@/components/services/services-index-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesHelpBand } from "@/components/services/services-help-band"
import { ConsultationFormSection } from "@/components/contact/consultation-form-section"

export const metadata: Metadata = {
  title: "Our Services | Marshal Ndlovu Attorneys Inc.",
  description:
    "Marshal Ndlovu Attorneys Inc. provides focused legal support in conveyancing, family law, litigation, notarial services, consumer law, labour law, insolvency law, and estate law.",
}

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <SiteNav />
      <ServicesIndexHero />
      <ServicesGrid />
      <ServicesHelpBand />
      <ConsultationFormSection />
      <SiteFooter />
    </main>
  )
}
