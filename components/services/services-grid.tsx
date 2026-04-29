import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Service = {
  number: string
  title: string
  blurb: string
  description: string
  image: string
  href: string
}

const services: Service[] = [
  {
    number: "01",
    title: "Conveyancing",
    blurb: "Property Transfers & Bonds",
    description:
      "We handle property transfers, bond registrations, and title deed work with precision through our network of five Deeds Offices across four provinces.",
    image: "/leather-wallet-and-card-holder-on-linen.jpg",
    href: "/services/conveyancing",
  },
  {
    number: "02",
    title: "Family Law",
    blurb: "Divorce, Custody & Maintenance",
    description:
      "We guide clients through divorce, custody, maintenance, and domestic matters with discretion and care at every stage of the process.",
    image: "/brown-leather-notebook-on-desk.jpg",
    href: "/services/family-law",
  },
  {
    number: "03",
    title: "Litigation",
    blurb: "Court Representation",
    description:
      "We represent clients in court and manage complex civil disputes with strategic, prepared, and tenacious advocacy.",
    image: "/wooden-judge-gavel-on-marble.jpg",
    href: "/services/litigation",
  },
  {
    number: "04",
    title: "Notarial Services",
    blurb: "Antenuptial & Notarial Bonds",
    description:
      "Our qualified notary public prepares antenuptial contracts, notarial bonds, and authentications with meticulous attention to detail.",
    image: "/elegant-law-office-interior-dark-navy.jpg",
    href: "/services/notarial-services",
  },
  {
    number: "05",
    title: "Consumer Law",
    blurb: "CPA Enforcement & Disputes",
    description:
      "We assist with Consumer Protection Act enforcement, defective goods, and supplier disputes to protect consumer rights with rigor and resolve.",
    image: "/placeholder.svg?height=900&width=1200",
    href: "/services/consumer-law",
  },
  {
    number: "06",
    title: "Labour Law",
    blurb: "CCMA & Employment Matters",
    description:
      "We provide clear, decisive representation in CCMA disputes, dismissals, and broader employment matters for both employees and employers.",
    image: "/courtroom-gavel-detail-warm-tones.jpg",
    href: "/services/labour-law",
  },
  {
    number: "07",
    title: "Insolvency Law",
    blurb: "Sequestration & Liquidations",
    description:
      "We help individuals and companies navigate voluntary sequestration, liquidations, and debt relief with a clear path forward.",
    image: "/placeholder.svg?height=900&width=1200",
    href: "/services/insolvency-law",
  },
  {
    number: "08",
    title: "Estate Law",
    blurb: "Wills, Trusts & Estates",
    description:
      "We advise on wills, trusts, and deceased estate administration to preserve legacies with care, foresight, and professional rigor.",
    image: "/rows-of-leather-bound-law-books-on-shelf.jpg",
    href: "/services/estate-law",
  },
]

export function ServicesGrid() {
  return (
    <section
      id="all-services"
      className="bg-background py-24 md:py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              All Practice Areas
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance max-w-xl">
              Choose the area that fits your matter
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Click into any practice area to learn how we work, what we cover,
            and how to get started with our team.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16">
          {services.map((service) => (
            <li key={service.title}>
              <Link
                href={service.href}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-tan"
              >
                <article className="flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-soft-bg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/55 via-dark-bg/10 to-transparent" />
                    <span className="absolute top-5 left-5 font-serif text-2xl text-white/85 tabular-nums">
                      {service.number}
                    </span>
                    <span className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center bg-tan text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="absolute left-5 right-5 bottom-5">
                      <p className="text-[10px] tracking-[0.28em] uppercase text-white/80">
                        {service.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex items-start justify-between gap-6 border-t border-border pt-6">
                    <div>
                      <h3 className="font-serif text-2xl md:text-[28px] leading-tight text-dark-bg group-hover:text-tan transition-colors text-balance">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-md text-pretty">
                        {service.description}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="hidden md:flex flex-shrink-0 items-center text-[11px] tracking-[0.22em] uppercase text-dark-bg/70 group-hover:text-tan transition-colors"
                    >
                      Read More
                    </span>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
