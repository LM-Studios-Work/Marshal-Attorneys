import type { Metadata } from "next"
import {
  Heart,
  Users,
  Scales,
  FileDotted,
  ScrollText,
  Gavel,
  Baby,
  Coins,
  ShieldCheck,
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
  title: "Family Law | Marshal Ndlovu Attorneys Inc.",
  description:
    "Family law services across South Africa: antenuptial contracts, divorce, parental rights, maintenance and family trusts under the Matrimonial Property, Divorce and Children's Acts.",
}

export default function FamilyLawPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <ServiceHero
          title="Family Law"
          breadcrumb="Family Law"
          description="Family law is governed by the Matrimonial Property Act, the Divorce Act, and the Children's Act 38 of 2005. Our practice focuses on the application of these laws to resolve disputes regarding matrimonial assets and the protection of minor children."
          imageSrc="/warm-family-law-office-interior-south-africa.jpg"
          imageAlt="Family law consultation setting"
        />

        <ServiceOverview
          eyebrow="Overview"
          heading="Protecting families through disciplined legal practice"
          body="We counsel individuals and families through the most significant transitions of their lives: the structuring of a marriage, the dissolution of one, and the protection of children and generational wealth. Every matter is handled with the rigour required by the relevant statutes and the discretion the subject demands."
          imageSrc="/family-meeting-with-lawyer-warm-tones.jpg"
          imageAlt="Attorney counselling a family on matrimonial matters"
          badgeLabel="Children's Act 38 of 2005"
          badgeTitle="Discreet. Child-focused. Enforceable."
          highlights={[
            {
              icon: ShieldCheck,
              title: "Matrimonial Asset Protection",
              desc: "Antenuptial contracts and estate strategies that preserve wealth across generations.",
            },
            {
              icon: Baby,
              title: "Best Interests of the Child",
              desc: "Parenting plans and custody litigation grounded in the Children's Act standard.",
            },
            {
              icon: Scale,
              title: "Court-Ready Representation",
              desc: "Full litigation capability across divorce, maintenance and custody matters.",
            },
          ]}
        />

        <ServiceDetails
          eyebrow="What we deliver"
          heading="Comprehensive family law services"
          intro="From the drafting of antenuptial contracts to complex contested divorces and the creation of family trusts, we cover the complete spectrum of family-related legal work under South African law."
          items={[
            {
              icon: FileDotted,
              title: "Matrimonial Property Regimes & ANCs",
              desc: "Counsel on the selection of matrimonial property regimes including the drafting and registration of Antenuptial Contracts, with or without accrual, registered at the Deeds Office to be effective against third parties.",
            },
            {
              icon: Gavel,
              title: "Dissolution of Marriage",
              desc: "We handle uncontested and contested divorces. In contested matters we manage litigation from summons to the final decree, covering division of the joint estate, accrual claims and spousal maintenance.",
            },
            {
              icon: Users,
              title: "Parental Rights & Responsibilities",
              desc: "Representation under the Children's Act, including drafting Parenting Plans, litigating custody and access disputes and applying for the variation of existing court orders.",
            },
            {
              icon: Coins,
              title: "Maintenance Litigation",
              desc: "Quantification and enforcement of maintenance orders for spouses and children, including the calculation of reasonable maintenance and the pursuit of arrears through the Maintenance Court.",
            },
            {
              icon: ScrollText,
              title: "Family Trusts (Inter Vivos & Testamentary)",
              desc: "Creation of family trusts to safeguard assets, including drafting of the Trust Deed and registration of the trust with the Master of the High Court.",
            },
            {
              icon: Heart,
              title: "Protective Relief & Interdicts",
              desc: "Urgent applications for domestic violence protection orders and related interdicts, providing immediate legal safeguards for vulnerable family members.",
            },
          ]}
          ctaTitle="Speak to a family law attorney about your matter."
        />

        <ServiceFramework
          eyebrow="Legislative framework"
          heading="Governed by the core family statutes"
          intro="Every family law matter we handle is anchored in the principal South African statutes that regulate the formation, conduct and dissolution of the family unit."
          primary={{
            icon: BookOpen,
            eyebrow: "Matrimonial Statutes",
            title: "Matrimonial Property Act & Divorce Act",
            body: "These statutes govern the proprietary consequences of marriage and the dissolution thereof. We apply them rigorously to protect our clients' financial and legal interests.",
            bullets: [
              "Community of property vs. out of community regimes",
              "Accrual calculations and joint estate division",
              "Grounds for divorce and procedural compliance",
              "Spousal maintenance and forfeiture applications",
            ],
          }}
          secondary={{
            icon: Baby,
            eyebrow: "Children's Act 38 of 2005",
            title: "Best interests of the child, paramount",
            body: "Every matter involving a minor child is measured against the statutory best-interests standard. We ensure parental rights and responsibilities are exercised and adjudicated accordingly.",
            bullets: [
              "Parenting plans registered with the Family Advocate",
              "Care, contact and guardianship applications",
              "Relocation disputes and Hague Convention matters",
              "Variation and enforcement of existing court orders",
            ],
          }}
        />

        <ServiceCTA
          eyebrow="Confidential. Compassionate. Thorough."
          heading="Let our family law team protect what matters most."
        />
      </main>
      <SiteFooter />
    </>
  )
}
