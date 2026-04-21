import type { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFormSection } from "@/components/contact/contact-form-section"
import { ConsultationFormSection } from "@/components/contact/consultation-form-section"
import { OfficeMap } from "@/components/contact/office-map"

export const metadata: Metadata = {
  title: "Contact Us — Marshal Ndlovu Attorneys Inc.",
  description:
    "Get in touch with Marshal Ndlovu Attorneys Inc. in Marshalltown, Johannesburg. Request a consultation across Conveyancing, Family Law, Litigation, Notarial Services, Consumer Law, Labour Law, Insolvency and Estate Law.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <SiteNav />
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ConsultationFormSection />
      <OfficeMap />
      <SiteFooter />
    </main>
  )
}
