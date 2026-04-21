import type { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStats } from "@/components/about/about-stats"
import { AboutOverview } from "@/components/about/about-overview"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutServicesChart } from "@/components/about/about-services-chart"
import { AboutMilestones } from "@/components/about/about-milestones"

export const metadata: Metadata = {
  title: "About Us — Marshal Ndlovu Attorneys Inc.",
  description:
    "Learn about Marshal Ndlovu Attorneys Inc. — a well-established boutique firm offering a full range of corporate and commercial legal services across South Africa.",
}

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <AboutHero />
        <AboutStats />
        <AboutOverview />
        <AboutMission />
        <AboutTeam />
        <AboutServicesChart />
        <AboutMilestones />
      </main>
      <SiteFooter />
    </>
  )
}
