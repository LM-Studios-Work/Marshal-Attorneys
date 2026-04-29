import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { NavigateLaw } from "@/components/navigate-law"
import { StatsBar } from "@/components/stats-bar"
import { GuidanceSection } from "@/components/guidance-section"
import { PeaceOfMind } from "@/components/peace-of-mind"
import { ConsultationFormSection } from "@/components/contact/consultation-form-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <SiteNav />
      <HeroSection />
      <StatsBar />
      <NavigateLaw />
      <GuidanceSection />
      <PeaceOfMind />
      <ConsultationFormSection />
      <SiteFooter />
    </main>
  )
}
