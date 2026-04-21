import type { Metadata } from "next"
import {
  FileSignature,
  UserMinus,
  Users,
  Gavel,
  ClipboardList,
  Scale,
  Briefcase,
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
  title: "Labour Law — Marshal Ndlovu Attorneys Inc.",
  description:
    "Labour law advisory and litigation — employment contracts, disciplinary procedures, retrenchments under Section 189, CCMA and Labour Court representation.",
}

export default function LabourLawPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <ServiceHero
          title="Labour Law"
          breadcrumb="Labour Law"
          description="Labour law is governed by the Labour Relations Act (LRA), the Basic Conditions of Employment Act (BCEA) and the Employment Equity Act (EEA). We provide guidance to ensure that employment relationships are managed within the boundaries of the law."
          imageSrc="/boardroom-meeting-employment-dispute.jpg"
          imageAlt="Employment matter consultation"
        />

        <ServiceOverview
          eyebrow="Overview"
          heading="Structured employment relationships, defensibly managed"
          body="Our labour law practice supports employers and employees through the complete employment lifecycle — from the architecture of the contract through performance management, disciplinary procedure, retrenchment and dispute resolution. We build employment relationships that are productive, lawful and defensible when tested."
          imageSrc="/ccma-commissioner-hearing-room.jpg"
          imageAlt="CCMA hearing venue interior"
          badgeLabel="LRA, BCEA & EEA"
          badgeTitle="Fair. Procedural. Substantively sound."
          highlights={[
            {
              icon: ShieldCheck,
              title: "Substantive & Procedural Fairness",
              desc: "Every dismissal and disciplinary process structured to withstand CCMA and Labour Court scrutiny.",
            },
            {
              icon: Scale,
              title: "CCMA & Labour Court Advocacy",
              desc: "Full representation through conciliation, arbitration and subsequent review proceedings.",
            },
            {
              icon: ClipboardList,
              title: "Proactive Compliance",
              desc: "Contracts, handbooks and policies designed to prevent disputes before they arise.",
            },
          ]}
        />

        <ServiceDetails
          eyebrow="What we deliver"
          heading="End-to-end labour law services"
          intro="From the drafting of enforceable employment contracts through retrenchment processes under Section 189 to arbitration at the CCMA and review in the Labour Court, we cover the full labour law spectrum for both employers and employees."
          items={[
            {
              icon: FileSignature,
              title: "Employment Contract Architecture",
              desc: "Drafting employment contracts that define terms of service, confidentiality and restraint of trade — with clauses that are reasonable and enforceable under South African law.",
            },
            {
              icon: ClipboardList,
              title: "Disciplinary Procedures",
              desc: "Guiding employers through Substantive and Procedural Fairness requirements — including drafting charge sheets and presiding over disciplinary hearings — to avoid unfair dismissal claims.",
            },
            {
              icon: UserMinus,
              title: "Retrenchments & Section 189 Process",
              desc: "Managing the mandatory consultation process, drafting of the notice of contemplation of retrenchment and negotiation of severance packages under Section 189 of the LRA.",
            },
            {
              icon: Gavel,
              title: "CCMA & Labour Court Representation",
              desc: "Representation in unfair dismissal, unfair labour practice and discrimination disputes — across conciliation, arbitration and review of awards in the Labour Court.",
            },
            {
              icon: BookOpen,
              title: "Compliance Audits & Policy Drafting",
              desc: "Audits of company policies to ensure alignment with the jurisprudence of the Labour Appeal Court and current CCMA practice.",
            },
            {
              icon: Users,
              title: "Collective Bargaining & Union Matters",
              desc: "Advising on recognition agreements, collective bargaining processes, strike action and essential-service designations under the LRA.",
            },
          ]}
          ctaTitle="Speak to a labour attorney about your matter."
        />

        <ServiceFramework
          eyebrow="Regulatory framework"
          heading="Practised within the tripartite labour statutes"
          intro="South African labour law rests on three pillars: the LRA, BCEA and EEA. Every matter we handle is analysed through the lens of these statutes and the evolving jurisprudence of the specialist labour courts."
          primary={{
            icon: BookOpen,
            eyebrow: "Labour Relations Act",
            title: "The constitutive statute of the workplace",
            body: "The LRA governs the formation and dissolution of the employment relationship, unfair dismissal jurisprudence, collective bargaining and dispute resolution. Mastery of its procedures is central to everything we do.",
            bullets: [
              "Substantive and procedural fairness standards",
              "Unfair dismissal and unfair labour practice claims",
              "Operational requirements (Section 189 / 189A) retrenchments",
              "Arbitration, conciliation and the review of awards",
            ],
          }}
          secondary={{
            icon: Briefcase,
            eyebrow: "BCEA & EEA",
            title: "Minimum standards and equitable treatment",
            body: "The BCEA establishes the minimum conditions of employment, while the EEA outlaws unfair discrimination and mandates affirmative action at designated employers. We align policies and practices with both.",
            bullets: [
              "Working hours, leave and termination notice compliance",
              "Equal pay for work of equal value assessments",
              "Employment equity plans and reporting",
              "Discrimination and harassment investigations",
            ],
          }}
        />

        <ServiceCTA
          eyebrow="Workplace challenge?"
          heading="Let our labour law team protect your position."
        />
      </main>
      <SiteFooter />
    </>
  )
}
