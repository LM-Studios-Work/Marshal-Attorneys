import type { Metadata } from "next"
import {
  ScrollText,
  Landmark,
  Users,
  Briefcase,
  TrendingUp,
  FileSignature,
  Scale,
  BookOpen,
  Shield,
} from "lucide-react"
import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceOverview } from "@/components/services/service-overview"
import { ServiceDetails } from "@/components/services/service-details"
import { ServiceFramework } from "@/components/services/service-framework"
import { ServiceCTA } from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Estate Law | Marshal Ndlovu Attorneys Inc.",
  description:
    "Estate planning and deceased estate administration: wills, testamentary and inter vivos trusts, executor services and Master's Office compliance.",
}

export default function EstateLawPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <ServiceHero
          title="Estate Law"
          breadcrumb="Estate Law"
          description="Estate law encompasses the planning and administration of assets during a person's lifetime and after death. This practice is governed by the Administration of Estates Act 66 of 1965 and the Wills Act 7 of 1953."
          imageSrc="/elegant-will-document-fountain-pen-lamp.jpg"
          imageAlt="Estate planning documents and quill"
        />

        <ServiceOverview
          eyebrow="Overview"
          heading="Preserving wealth across generations"
          body="Estate law is the architecture of intergenerational wealth. We structure estates during our clients' lifetimes to minimise estate duty and capital gains tax, and we administer estates after death with the precision the Master of the High Court requires. Every instrument is drafted to express the testator's intention and to survive legal scrutiny."
          imageSrc="/family-trust-meeting-warm-library.jpg"
          imageAlt="Family trust consultation setting"
          badgeLabel="Administration of Estates Act"
          badgeTitle="Structured. Efficient. Enforceable."
          highlights={[
            {
              icon: TrendingUp,
              title: "Tax-Efficient Structuring",
              desc: "Estates designed to mitigate estate duty and capital gains tax where the law permits.",
            },
            {
              icon: ScrollText,
              title: "Testator's Intention Preserved",
              desc: "Wills drafted to be clear, unambiguous and compliant with the formalities of the Wills Act.",
            },
            {
              icon: Shield,
              title: "Beneficiary Protection",
              desc: "Trust structures and testamentary arrangements that shelter vulnerable beneficiaries.",
            },
          ]}
        />

        <ServiceDetails
          eyebrow="What we deliver"
          heading="Planning, drafting and administering estates"
          intro="From strategic estate planning and the drafting of wills through to the administration of deceased estates and the creation of trusts for asset protection, our estate practice handles the complete lifecycle of intergenerational wealth."
          items={[
            {
              icon: TrendingUp,
              title: "Strategic Estate Planning",
              desc: "Legal and tax strategies structuring estates to minimise Estate Duty and Capital Gains Tax, ensuring the efficient transfer of wealth to beneficiaries.",
            },
            {
              icon: ScrollText,
              title: "Drafting of Wills & Testaments",
              desc: "Drafting wills that comply strictly with the Wills Act, including the creation of Testamentary Trusts and the appointment of executors to ensure the testator's intentions are enforceable.",
            },
            {
              icon: Landmark,
              title: "Administration of Deceased Estates",
              desc: "Winding up of estates involving reporting to the Master of the High Court, procurement of Letters of Executorship and drafting of the Liquidation and Distribution Account.",
            },
            {
              icon: Users,
              title: "Inter Vivos & Testamentary Trusts",
              desc: "Counsel on the creation of trusts for asset protection, managing registration of trusts and ensuring trustees adhere to the Trust Property Control Act.",
            },
            {
              icon: Briefcase,
              title: "Executor & Trustee Services",
              desc: "Acting as professional executors: collecting assets, settling debts and distributing the residue to the heirs, and serving as independent trustees where required.",
            },
            {
              icon: FileSignature,
              title: "Living Wills & Powers of Attorney",
              desc: "Drafting advance directives and enduring powers of attorney, ensuring our clients' wishes are respected if they lose legal or physical capacity.",
            },
          ]}
          ctaTitle="Speak to an estate planning attorney about your legacy."
        />

        <ServiceFramework
          eyebrow="Statutory framework"
          heading="Anchored in the Wills Act and the Administration of Estates Act"
          intro="Estate law in South Africa is a highly formal discipline. Every will we draft and every estate we administer is measured against the strict requirements of the governing legislation."
          primary={{
            icon: BookOpen,
            eyebrow: "Wills Act 7 of 1953",
            title: "Form, formality and testamentary freedom",
            body: "A will that does not comply with the Wills Act may be invalid, with catastrophic consequences for beneficiaries. We draft and execute wills that survive every formal challenge.",
            bullets: [
              "Formal execution, witnessing and signature requirements",
              "Revocation, alteration and the doctrine of dependent relative revocation",
              "Testamentary capacity and undue influence considerations",
              "Cross-border wills and the Hague Convention on Wills",
            ],
          }}
          secondary={{
            icon: Scale,
            eyebrow: "Administration of Estates Act",
            title: "Administered under the Master's supervision",
            body: "Every deceased estate in South Africa falls under the supervisory jurisdiction of the Master of the High Court. We navigate that process with the precision and documentary rigour the Master requires.",
            bullets: [
              "Reporting of the estate and appointment of the executor",
              "Advertisements to creditors and the inventory of assets",
              "Liquidation and Distribution Account preparation",
              "Final discharge and transfer of residue to heirs",
            ],
          }}
        />

        <ServiceCTA
          eyebrow="Plan today. Protect tomorrow."
          heading="Let our estate law team structure and safeguard your legacy."
        />
      </main>
      <SiteFooter />
    </>
  )
}
