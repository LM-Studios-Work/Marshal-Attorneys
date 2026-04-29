import type { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CaseResultsHero } from "@/components/case-results/case-results-hero"
import { CaseResultsStats } from "@/components/case-results/case-results-stats"
import { CaseResultsTestimonials } from "@/components/case-results/case-results-testimonials"
import { CaseResultsCTA } from "@/components/case-results/case-results-cta"

export const metadata: Metadata = {
  title: "Case Results & Testimonials | Marshal Ndlovu Attorneys Inc.",
  description:
    "Read real client testimonials and case outcomes from Marshal Ndlovu Attorneys Inc. — trusted legal counsel across South Africa.",
}

export default function CaseResultsPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <CaseResultsHero />
        <CaseResultsStats />
        <CaseResultsTestimonials />
        <CaseResultsCTA />
      </main>
      <SiteFooter />
    </>
  )
}
