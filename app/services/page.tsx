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
    "Eight focused practice areas — Conveyancing, Family Law, Litigation, Notarial Services, Consumer Law, Labour Law, Insolvency Law and Estate Law — delivered with rigour by Marshal Ndlovu Attorneys Inc.",
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
