import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { ServicesIntro } from "@/components/services-intro"
import { NavigateLaw } from "@/components/navigate-law"
import { StatsBar } from "@/components/stats-bar"
import { GuidanceSection } from "@/components/guidance-section"
import { PeaceOfMind } from "@/components/peace-of-mind"
import { ConsultationFormSection } from "@/components/contact/consultation-form-section"
import { SiteFooter } from "@/components/site-footer"
import { HomeScrollReveal } from "@/components/home-scroll-reveal"

export default function HomePage() {
  return (
    <main className="home-page min-h-screen bg-background">
      <HomeScrollReveal />
      <TopBar />
      <SiteNav />
      <HeroSection />
      <ServicesIntro />
      <NavigateLaw />
      <StatsBar />
      <GuidanceSection />
      <PeaceOfMind />
      <ConsultationFormSection />
      <SiteFooter />
    </main>
  )
}
