import type { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { WhoDoITalkToHero } from "@/components/who-do-i-talk-to/who-do-i-talk-to-hero"
import { WhoDoITalkToFaqs } from "@/components/who-do-i-talk-to/who-do-i-talk-to-faqs"
import { ConsultationFormSection } from "@/components/contact/consultation-form-section"

export const metadata: Metadata = {
  title: "Who Do I Talk To? | Marshal Ndlovu Attorneys Inc.",
  description:
    "Frequently asked questions answered by Marshal Ndlovu Attorneys Inc. — covering divorce, conveyancing, CCMA deadlines, estate administration and more across South Africa.",
}

export default function WhoDoITalkToPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <SiteNav />
      <WhoDoITalkToHero />
      <WhoDoITalkToFaqs />
      <ConsultationFormSection />
      <SiteFooter />
    </main>
  )
}
