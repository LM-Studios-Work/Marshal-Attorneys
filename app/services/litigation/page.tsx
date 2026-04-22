import type { Metadata } from "next"
import {
  Scales,
  FileText,
  Car,
  Warning,
  CurrencyDollar,
  BookOpen,
  Buildings,
  Handshake,
  Briefcase,
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
  title: "Litigation | Marshal Ndlovu Attorneys Inc.",
  description:
    "Civil litigation in the High Court and Magistrates' Courts: RAF claims, unlawful arrest and constitutional litigation, debt recovery and insolvency.",
}

export default function LitigationPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <ServiceHero
          title="Litigation"
          breadcrumb="Litigation"
          description="Litigation is the process of resolving disputes through the application of the Uniform Rules of Court in the High Court and the Magistrates' Courts Rules. We employ a rigorous approach to evidence, pleading and courtroom advocacy."
          imageSrc="/high-court-chamber-south-africa-moody.jpg"
          imageAlt="High Court chamber interior"
        />

        <ServiceOverview
          eyebrow="Overview"
          heading="Disciplined advocacy from pleading to judgment"
          body="Marshal Ndlovu Attorneys Inc. conducts litigation with a singular focus: the strategic, evidence-driven resolution of disputes on behalf of our clients. From the initial letter of demand through the final appeal, our approach is defined by procedural precision and uncompromising courtroom preparation."
          imageSrc="/stacked-court-files-brass-desk-lamp.jpg"
          imageAlt="Court files and legal pleadings prepared for litigation"
          badgeLabel="Uniform Rules of Court"
          badgeTitle="Evidence-led. Procedurally precise."
          highlights={[
            {
              icon: FileText,
              title: "Meticulous Pleading",
              desc: "Particulars of claim and applications drafted to withstand the most rigorous exception and striking-out challenge.",
            },
            {
              icon: Scales,
              title: "Courtroom Advocacy",
              desc: "Experienced representation across the Magistrates' Courts, High Court and specialist tribunals.",
            },
            {
              icon: Scales,
              title: "Strategic Settlement",
              desc: "Where litigation is not the optimal outcome, we negotiate settlements that preserve value and avoid prolonged risk.",
            },
          ]}
        />

        <ServiceDetails
          eyebrow="What we deliver"
          heading="Full-spectrum dispute resolution"
          intro="Our litigation practice handles the full lifecycle of a civil suit, from application proceedings for urgent relief to protracted action proceedings requiring oral evidence, across every forum in the South African judicial system."
          items={[
            {
              icon: Buildings,
              title: "High Court & Magistrate's Court Civil Litigation",
              desc: "Management of the full lifecycle of a civil suit, from drafting Particulars of Claim through discovery and expert reports, specialising in both Application Proceedings for urgent relief and Action Proceedings.",
            },
            {
              icon: Car,
              title: "Road Accident Fund (RAF) Claims",
              desc: "A specialised administrative and legal procedure. We handle quantification of past and future medical expenses, loss of earnings and general damages, and litigate when claims are repudiated.",
            },
            {
              icon: Warning,
              title: "Unlawful Arrest & Detention",
              desc: "Constitutional litigation claiming damages where the state has violated the right to liberty, requiring detailed analysis of the lawfulness of arrest and the legality of subsequent detention.",
            },
            {
              icon: CurrencyDollar,
              title: "Debt Recovery & Insolvency Litigation",
              desc: "Provisional Sentence Summonses for liquidated claims based on written documents, execution of judgments through the Writ of Execution and advice on the transition from litigation to insolvency proceedings.",
            },
            {
              icon: FileText,
              title: "Urgent Applications & Interdicts",
              desc: "Rapid-response applications for urgent relief, including interim and final interdicts, anti-dissipation orders and mandamus applications, prepared to Court Rule standards under tight deadlines.",
            },
            {
              icon: Briefcase,
              title: "Commercial & Contractual Disputes",
              desc: "Enforcement and defence of commercial agreements, including breach-of-contract claims, rectification applications and restraint-of-trade disputes.",
            },
          ]}
          ctaTitle="Speak to our litigation team about your dispute."
        />

        <ServiceFramework
          eyebrow="Procedural rigour"
          heading="Grounded in the Rules of Court"
          intro="Every matter we litigate is conducted in strict compliance with the Uniform Rules of the High Court and the Magistrates' Courts Rules, the procedural backbone of South African civil justice."
          primary={{
            icon: BookOpen,
            eyebrow: "Uniform Rules of Court",
            title: "Rule-compliant pleading and procedure",
            body: "We adhere to the Rules governing pleadings, discovery, expert evidence and trial procedure, mitigating the risk of procedural challenge and preserving our clients' substantive rights.",
            bullets: [
              "Strict compliance with time bars and notice periods",
              "Rule 35 discovery and expert notice management",
              "Rule 37 pre-trial conferences strategically utilised",
              "Rule 43 applications in matrimonial litigation",
            ],
          }}
          secondary={{
            icon: Users,
            eyebrow: "Evidence & Strategy",
            title: "Evidence-first case architecture",
            body: "Every case we accept is built on a solid evidentiary foundation. We brief expert witnesses, obtain counsel's opinion where warranted and align every procedural step with the outcome we seek.",
            bullets: [
              "Counsel briefing and collaborative case strategy",
              "Expert witness selection and report preparation",
              "Forensic accounting and technical evidence",
              "Settlement analysis and Calderbank offers",
            ],
          }}
        />

        <ServiceCTA
          eyebrow="Ready to litigate?"
          heading="Let our courtroom team prepare your matter for success."
        />
      </main>
      <SiteFooter />
    </>
  )
}
