import type { Metadata } from "next"
import {
  TrendDown,
  Buildings,
  Briefcase,
  ArrowClockwise,
  Scales,
  WarningCircle,
  CurrencyDollar,
  BookOpen,
} from "phosphor-react"
import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceOverview } from "@/components/services/service-overview"
import { ServiceDetails } from "@/components/services/service-details"
import { ServiceFramework } from "@/components/services/service-framework"
import { ServiceCTA } from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Insolvency Law | Marshal Ndlovu Attorneys Inc.",
  description:
    "Insolvency advisory and litigation: voluntary and compulsory sequestration, corporate liquidation, trustee representation and rehabilitation under the Insolvency Act.",
}

export default function InsolvencyLawPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <ServiceHero
          title="Insolvency Law"
          breadcrumb="Insolvency Law"
          description="Insolvency law regulates the distribution of a debtor's assets when they are unable to meet their financial obligations. Governed by the Insolvency Act 24 of 1936, this process ensures that creditors are treated according to a legal hierarchy of preference."
          imageSrc="/insolvency-ledger-and-bankruptcy-papers.jpg"
          imageAlt="Insolvency ledger and creditor documents"
        />

        <ServiceOverview
          eyebrow="Overview"
          heading="Orderly resolution of financial distress"
          body="Our insolvency practice guides debtors, creditors, trustees and liquidators through the statutory machinery that governs financial failure. From the first application for sequestration through to the final rehabilitation order, we ensure every step complies with the Insolvency Act and serves our client's strategic objective."
          imageSrc="/creditor-meeting-boardroom-south-africa.jpg"
          imageAlt="Creditor meeting in a boardroom setting"
          badgeLabel="Insolvency Act 24 of 1936"
          badgeTitle="Ordered. Preferential. Properly administered."
          highlights={[
            {
              icon: Scales,
              title: "Creditor Preference Hierarchy",
              desc: "Assets distributed in accordance with the statutory order of secured, preferent and concurrent creditors.",
            },
            {
              icon: Briefcase,
              title: "Trustee & Liquidator Support",
              desc: "Legal counsel to appointed trustees and liquidators on asset realisation and impeachable transactions.",
            },
            {
              icon: ArrowClockwise,
              title: "Rehabilitation Pathway",
              desc: "Applications restoring the insolvent's legal capacity and discharging residual liabilities.",
            },
          ]}
        />

        <ServiceDetails
          eyebrow="What we deliver"
          heading="Comprehensive insolvency services"
          intro="From voluntary surrender applications on behalf of over-indebted individuals through corporate liquidations and the administration of complex estates, we handle the full procedural and substantive work that insolvency matters demand."
          items={[
            {
              icon: TrendDown,
              title: "Voluntary & Compulsory Sequestration",
              desc: "Assisting individuals in applying for voluntary surrender of their estate, or representing creditors in applying for compulsory sequestration, demonstrating that sequestration will result in a dividend for creditors.",
            },
            {
              icon: Buildings,
              title: "Corporate Liquidation",
              desc: "Winding up of companies through a voluntary resolution of the shareholders or a court-ordered compulsory liquidation, including the appointment of a liquidator to realise assets and settle liabilities.",
            },
            {
              icon: Briefcase,
              title: "Trustee & Estate Administration",
              desc: "Acting as legal counsel to trustees or liquidators, identifying voidable preferences which are payments made to certain creditors shortly before insolvency that may be recovered.",
            },
            {
              icon: ArrowClockwise,
              title: "Rehabilitation Proceedings",
              desc: "Applications for rehabilitation, the legal process that discharges the insolvent person from their estate and restores their legal capacity to contract.",
            },
            {
              icon: WarningCircle,
              title: "Impeachable Transactions",
              desc: "Investigation and setting aside of dispositions without value, voidable preferences and collusive transactions under the Insolvency Act.",
            },
            {
              icon: CurrencyDollar,
              title: "Business Rescue Intersections",
              desc: "Advising on the intersection of business rescue under the Companies Act with insolvency proceedings, and transition strategies where rescue is no longer viable.",
            },
          ]}
          ctaTitle="Speak to an insolvency attorney about your matter."
        />

        <ServiceFramework
          eyebrow="Statutory framework"
          heading="Governed by the Insolvency Act"
          intro="The Insolvency Act 24 of 1936 remains the cornerstone statute of South African insolvency law, applied in conjunction with the Companies Act for corporate matters and the Magistrates' Courts Act for smaller estates."
          primary={{
            icon: BookOpen,
            eyebrow: "Insolvency Act 24 of 1936",
            title: "The statutory scheme for sequestration",
            body: "The Act establishes the concursus creditorum, being the collective concurrence of creditors, and regulates every aspect of the administration of an insolvent estate from sequestration to final distribution.",
            bullets: [
              "Friendly vs. compulsory sequestration applications",
              "Statutory meetings of creditors",
              "Proof of claims and the hierarchy of preference",
              "Liquidation and distribution account procedures",
            ],
          }}
          secondary={{
            icon: Scales,
            eyebrow: "Corporate & Cross-Border",
            title: "Companies Act and cross-jurisdictional matters",
            body: "Corporate insolvency and business rescue are regulated by the Companies Act 71 of 2008. Cross-border insolvency raises additional considerations under the Cross-Border Insolvency Act.",
            bullets: [
              "Compulsory and voluntary winding-up procedures",
              "Business rescue applications and practitioner oversight",
              "Cross-border recognition of foreign proceedings",
              "Director liability for trading in insolvent circumstances",
            ],
          }}
        />

        <ServiceCTA
          eyebrow="Facing insolvency?"
          heading="Let our team guide you through an orderly resolution."
        />
      </main>
      <SiteFooter />
    </>
  )
}
