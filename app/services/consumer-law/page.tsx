import type { Metadata } from "next"
import {
  ShoppingBag,
  ClipboardCheck,
  HandCoins,
  Package,
  AlertTriangle,
  Scale,
  Gavel,
  BookOpen,
  ShieldCheck,
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
  title: "Consumer Law | Marshal Ndlovu Attorneys Inc.",
  description:
    "Consumer Protection Act and National Credit Act advisory and litigation: credit agreement vetting, responsible-lending compliance, tribunal advocacy and product-liability claims.",
}

export default function ConsumerLawPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <ServiceHero
          title="Consumer Law"
          breadcrumb="Consumer Law"
          description="Consumer law in South Africa is governed by the Consumer Protection Act (CPA) and the National Credit Act (NCA). We ensure that businesses remain compliant with these regulations and represent consumers in the enforcement of their statutory rights."
          imageSrc="/retail-contract-review-dark-warm.jpg"
          imageAlt="Credit agreement and consumer contract"
        />

        <ServiceOverview
          eyebrow="Overview"
          heading="Compliance-led, enforcement-ready"
          body="Consumer protection is a two-sided mandate: credit providers and retailers must structure their businesses to comply with the CPA and NCA; consumers have substantive rights that are enforceable before regulators and in the courts. We advise on both sides of that equation with commercial sensitivity and statutory precision."
          imageSrc="/south-african-consumer-tribunal-hearing.jpg"
          imageAlt="Consumer tribunal hearing in progress"
          badgeLabel="CPA & NCA"
          badgeTitle="Regulated. Transparent. Enforceable."
          highlights={[
            {
              icon: ShieldCheck,
              title: "Regulatory Compliance",
              desc: "Policies, contracts and credit-granting processes aligned with the statutory framework.",
            },
            {
              icon: Scale,
              title: "Tribunal Representation",
              desc: "Advocacy before the National Consumer Tribunal and Provincial Consumer Affairs Courts.",
            },
            {
              icon: Gavel,
              title: "Enforcement of Rights",
              desc: "Assertion of the right to fair, reasonable and safe goods and services, including damages where warranted.",
            },
          ]}
        />

        <ServiceDetails
          eyebrow="What we deliver"
          heading="Consumer law advisory and litigation"
          intro="From credit agreement vetting and responsible lending policies through to tribunal advocacy and product liability claims, our practice covers the full enforcement and compliance spectrum under the CPA and NCA."
          items={[
            {
              icon: ClipboardCheck,
              title: "Credit Agreement Compliance & Vetting",
              desc: "Vetting credit contracts to ensure they do not contain prohibited terms and that all required disclosures are transparent, in line with the NCA's form and content requirements.",
            },
            {
              icon: HandCoins,
              title: "Responsible Lending & Affordability",
              desc: "Advising credit providers on the implementation of affordability assessments before granting credit, to avoid claims of reckless lending under the NCA.",
            },
            {
              icon: AlertTriangle,
              title: "Credit Enforcement & Repossessions",
              desc: "Managing the issuance of Section 129 notices and the subsequent legal steps required before a creditor can approach the court for judgment on a credit agreement.",
            },
            {
              icon: Package,
              title: "Product Liability & CPA Claims",
              desc: "Representation in matters regarding defective goods and services, including enforcement of the implied warranty of quality and damages for hazardous products.",
            },
            {
              icon: Gavel,
              title: "Tribunal & Regulatory Advocacy",
              desc: "Representation before the National Consumer Tribunal (NCT) and Provincial Consumer Affairs Courts, handling regulatory probes and defending against prohibited-conduct allegations.",
            },
            {
              icon: ShoppingBag,
              title: "Consumer Contract Drafting",
              desc: "Preparation of CPA-compliant terms and conditions, warranty policies and promotional competition rules for retailers and service providers.",
            },
          ]}
          ctaTitle="Speak to a consumer law specialist about your matter."
        />

        <ServiceFramework
          eyebrow="Statutory framework"
          heading="Anchored in the CPA and NCA"
          intro="South African consumer law is a codified regime. Every matter we handle is grounded in the relevant statute, regulations and published guidance from the regulators."
          primary={{
            icon: BookOpen,
            eyebrow: "Consumer Protection Act",
            title: "The rights of the consumer, codified",
            body: "The CPA codifies the core consumer rights: equality, privacy, fair value, safe goods and fair and honest dealing. We apply this framework to compliance audits and consumer claims alike.",
            bullets: [
              "Right to safe, good-quality goods",
              "Implied warranty of quality and the six-month rule",
              "Plain-language and disclosure requirements",
              "Prohibited and unfair contract terms",
            ],
          }}
          secondary={{
            icon: ShieldCheck,
            eyebrow: "National Credit Act",
            title: "Responsible credit, rigorously enforced",
            body: "The NCA regulates the entire credit lifecycle, from pre-agreement disclosures through enforcement and debt review. We advise registered credit providers and consumers under this regime.",
            bullets: [
              "Credit provider registration and compliance audits",
              "Affordability assessments and reckless-lending defence",
              "Section 129 notices and enforcement procedure",
              "Debt review, reorganisation and consent orders",
            ],
          }}
        />

        <ServiceCTA
          eyebrow="Protect your rights. Protect your business."
          heading="Let our consumer law team advise on your matter."
        />
      </main>
      <SiteFooter />
    </>
  )
}
