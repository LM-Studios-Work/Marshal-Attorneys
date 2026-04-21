import type { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ConveyancingHero } from "@/components/conveyancing/conveyancing-hero"
import { ConveyancingOverview } from "@/components/conveyancing/conveyancing-overview"
import { ConveyancingServices } from "@/components/conveyancing/conveyancing-services"
import { ConveyancingProcess } from "@/components/conveyancing/conveyancing-process"
import { ConveyancingCompliance } from "@/components/conveyancing/conveyancing-compliance"
import { ConveyancingCTA } from "@/components/conveyancing/conveyancing-cta"

export const metadata: Metadata = {
  title: "Conveyancing & Property Law — Marshal Ndlovu Attorneys Inc.",
  description:
    "Comprehensive conveyancing services in South Africa — sale agreements, property transfers, bond registration, sectional title, township establishment and more, in strict compliance with the Deeds Registries Act.",
}

export default function ConveyancingPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <ConveyancingHero />
        <ConveyancingOverview />
        <ConveyancingServices />
        <ConveyancingProcess />
        <ConveyancingCompliance />
        <ConveyancingCTA />
      </main>
      <SiteFooter />
    </>
  )
}
