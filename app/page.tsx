import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { ServicesIntro } from "@/components/services-intro"
import { NavigateLaw } from "@/components/navigate-law"
import { StatsBar } from "@/components/stats-bar"
import { GuidanceSection } from "@/components/guidance-section"
import { PeaceOfMind } from "@/components/peace-of-mind"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <SiteNav />
      <HeroSection />
      <ServicesIntro />
      <NavigateLaw />
      <StatsBar />
      <GuidanceSection />
      <PeaceOfMind />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
