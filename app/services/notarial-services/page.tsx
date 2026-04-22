import type { Metadata } from "next"
import {
  Seal,
  Path,
  Globe,
  Link,
  FileDotted,
  CheckCircle,
  ScrollText,
  BookOpen,
  Building,
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
  title: "Notarial Services | Marshal Ndlovu Attorneys Inc.",
  description:
    "Appointed Notaries Public: notarial deeds of servitude, apostille and legalisation, tie agreements and notarial contracts executed with full public faith.",
}

export default function NotarialServicesPage() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <ServiceHero
          title="Notarial Services"
          breadcrumb="Notarial Services"
          description="A Notary Public is a legal practitioner appointed by the Minister of Justice to execute documents that require a higher level of public faith. Notarial acts are often registered as Notarial Deeds in the Deeds Office."
          imageSrc="/notary-wax-seal-and-fountain-pen-on-parchment.jpg"
          imageAlt="Notarial seal and legal documents"
        />

        <ServiceOverview
          eyebrow="Overview"
          heading="Executing instruments of public faith"
          body="Our notary brings the highest standard of attestation to instruments that demand it. Whether it is the binding of land in perpetuity, the authentication of documents for foreign jurisdictions or the execution of statutory notarial contracts, every instrument is prepared and executed with meticulous care."
          imageSrc="/notarial-deed-ledger-and-brass-seal.jpg"
          imageAlt="Notarial deed ledger and official seal"
          badgeLabel="Appointed by the Minister of Justice"
          badgeTitle="Executed. Sealed. Legally authenticated."
          highlights={[
            {
              icon: Seal,
              title: "Full Public Faith",
              desc: "Documents executed before our notary carry the heightened evidentiary value of a notarial instrument.",
            },
            {
              icon: Globe,
              title: "International Recognition",
              desc: "Apostille and legalisation services for documents destined for use in foreign jurisdictions.",
            },
            {
              icon: Building,
              title: "Deeds Office Registration",
              desc: "Notarial deeds prepared for and registered in the relevant Deeds Office to bind successors in title.",
            },
          ]}
        />

        <ServiceDetails
          eyebrow="What we deliver"
          heading="Core notarial instruments"
          intro="From notarial deeds of servitude registered in the Deeds Office to the apostille of documents under the Hague Convention, our notary handles the complete range of instruments reserved to the notarial profession."
          items={[
            {
              icon: Path,
              title: "Notarial Servitudes & Property Rights",
              desc: "Drafting and execution of notarial deeds of servitude for legal creation of rights of way or utility easements, registered as notarial deeds to be binding on all future successors in title.",
            },
            {
              icon: Globe,
              title: "Apostille & International Legalisation",
              desc: "Certification of authenticity of signatures and seals on official documents under the Hague Convention, so that they are recognised in foreign jurisdictions.",
            },
            {
              icon: Link,
              title: "Notarial Tie Agreements",
              desc: "Execution of tie agreements in property development that legally link two or more properties, ensuring obligations are met before properties can be transferred independently.",
            },
            {
              icon: FileDotted,
              title: "Notarial Contracts & Affidavits",
              desc: "Overseeing the signing and sealing of contracts that statute requires be executed before a Notary, ensuring the instrument is executed strictly in accordance with the law.",
            },
            {
              icon: ScrollText,
              title: "Antenuptial Contracts",
              desc: "Drafting and execution of antenuptial contracts before registration in the Deeds Office, securing matrimonial property regimes between spouses and against third parties.",
            },
            {
              icon: CheckCircle,
              title: "Authentication of Copies",
              desc: "Certified true copies of original documents for use in domestic and foreign administrative, commercial and judicial proceedings.",
            },
          ]}
          ctaTitle="Speak to our Notary Public about your instrument."
          ctaButton="Request Notarial Assistance"
        />

        <ServiceFramework
          eyebrow="Notarial authority"
          heading="The heightened evidentiary value of a notarial act"
          intro="Our notarial practice operates within the narrow but critical mandate granted by statute, executing instruments that carry greater legal weight than those prepared by an attorney alone."
          primary={{
            icon: Stamp,
            eyebrow: "Notarial Execution",
            title: "Acts of public faith under South African law",
            body: "A notarial act is deemed to have greater evidentiary weight than a privately executed document. We take meticulous care to ensure every notarial instrument meets the formal and substantive requirements of law.",
            bullets: [
              "Verification of identity and capacity of all parties",
              "Strict compliance with statutory execution formalities",
              "Secure retention of the Protocol for future reference",
              "Protocol extracts issued on request to parties in interest",
            ],
          }}
          secondary={{
            icon: BookOpen,
            eyebrow: "Hague Convention",
            title: "Cross-border document recognition",
            body: "For documents destined to be used abroad, we manage the full apostille or consular-legalisation chain, ensuring they are accepted by foreign authorities without unnecessary delay.",
            bullets: [
              "Apostille via the High Court and DIRCO",
              "Consular legalisation for non-Convention states",
              "Sworn translations arranged where required",
              "Expedited processing for time-sensitive matters",
            ],
          }}
        />

        <ServiceCTA
          eyebrow="Sealed with authority"
          heading="Entrust your notarial instruments to a qualified Notary."
          primaryLabel="Request Notarial Assistance"
        />
      </main>
      <SiteFooter />
    </>
  )
}
