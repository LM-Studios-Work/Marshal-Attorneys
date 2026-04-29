"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Faq = {
  category: string
  question: string
  answer: string
}

const faqs: Faq[] = [
  {
    category: "Family Law",
    question: "How long does an uncontested divorce take in South Africa?",
    answer:
      "If both parties are in agreement, an uncontested divorce can be finalized in as little as 4 to 8 weeks. At Marshal Ndlovu Attorneys, we focus on swift, practical resolutions to save you from unnecessary emotional and financial strain.",
  },
  {
    category: "Notarial Services",
    question: "Why do I need a Notary Public for an Antenuptial Contract (ANC)?",
    answer:
      "In South Africa, an Antenuptial Contract must be drafted and executed by a registered Notary Public before your marriage. If you marry without one, you are automatically married 'In Community of Property.' We can draft and register your ANC efficiently before your big day.",
  },
  {
    category: "Conveyancing",
    question: "How long does the property transfer (conveyancing) process take?",
    answer:
      "Typically, a property transfer takes between 6 to 12 weeks from the date of sale, depending on factors like bond approvals and rates clearance. Our dedicated conveyancing team ensures a frictionless process with constant updates along the way.",
  },
  {
    category: "Conveyancing",
    question: "Who is responsible for paying the conveyancing fees?",
    answer:
      "The buyer is responsible for paying the conveyancing fees and transfer duties, while the seller is responsible for choosing the conveyancing attorney. We offer transparent fee structures so there are no surprises.",
  },
  {
    category: "Labour Law",
    question: "I was unfairly dismissed. How long do I have to take my case to the CCMA?",
    answer:
      "You only have 30 days from the date of your dismissal to refer an unfair dismissal dispute to the CCMA. Time is critical. Contact our Labour Law department immediately to ensure your rights are protected.",
  },
  {
    category: "Litigation",
    question: "How do I institute a civil claim against someone who owes me money?",
    answer:
      "The litigation process begins with a formal letter of demand, followed by issuing a summons. Whether through the Magistrate's Court or the High Court, our Litigation team cuts through the red tape to recover what is owed to you as efficiently as possible.",
  },
  {
    category: "Consumer Law",
    question: "How does the Consumer Protection Act (CPA) protect me from defective goods?",
    answer:
      "Under the CPA, you have the right to return unsafe or defective goods within 6 months for a repair, replacement, or full refund. If a supplier refuses to honor this, our consumer law experts can step in to enforce your rights.",
  },
  {
    category: "Insolvency Law",
    question: "What does it mean to be voluntarily sequestrated?",
    answer:
      "Voluntary sequestration is a process that allows you to write off up to 80% of your debt, giving you a fresh financial start. We handle sequestration applications with the utmost confidentiality and dignity.",
  },
  {
    category: "Estate Law",
    question: "What is the first step in winding up a deceased estate?",
    answer:
      "The first step is reporting the estate to the Master of the High Court within 14 days of passing. Estate administration can be deeply complex, but our Estate Law team handles the entire process to lift the administrative burden off your family.",
  },
  {
    category: "Our Firm",
    question: "Where are your offices located, and do you offer virtual consultations?",
    answer:
      "Our offices are centrally located on the 6th Floor of Klamson Towers, 151 Commissioner Street, Marshalltown, Johannesburg. However, we also offer secure virtual consultations via Zoom or Teams for clients across South Africa.",
  },
]

export function WhoDoITalkToFaqs() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* Left: section intro */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Common Questions
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              Find the right department for your matter
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-md">
              Each question is tagged with the practice area it falls under, so
              you can identify the right team to assist you. If your question
              isn&apos;t listed below, our consultation form will route your
              enquiry to the appropriate attorney.
            </p>

            <div className="mt-10 hidden lg:block">
              <p className="text-[10px] tracking-[0.28em] uppercase text-tan">
                Direct Line
              </p>
              <a
                href="tel:+27672727475"
                className="mt-2 block font-serif text-2xl text-dark-bg hover:text-tan transition-colors"
              >
                067 272 7475
              </a>
              <a
                href="mailto:info@manattorneys.co.za"
                className="mt-2 block text-sm text-dark-bg/70 hover:text-tan transition-colors"
              >
                info@manattorneys.co.za
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${idx}`}
                  className="border-b border-border/70 first:border-t first:border-border/70"
                >
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <div className="flex flex-col gap-2 pr-4">
                      <span className="text-[10px] tracking-[0.28em] uppercase text-tan text-left">
                        {faq.category}
                      </span>
                      <span className="font-serif text-xl md:text-2xl leading-snug text-dark-bg text-balance text-left">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-[15px] leading-relaxed text-muted-foreground pr-8 pb-2">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
