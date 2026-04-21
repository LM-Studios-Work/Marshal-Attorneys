import {
  FilePen,
  Home,
  Banknote,
  Building2,
  MapPinned,
  Route,
  Layers,
} from "lucide-react"

const services = [
  {
    icon: FilePen,
    title: "Drafting & Vetting of Sale Agreements",
    desc: "Preparation and review of Agreements of Sale to ensure all suspensive conditions, warranties and obligations are clearly defined and legally enforceable, mitigating the risk of future litigation.",
  },
  {
    icon: Home,
    title: "Transfer of Immovable Property",
    desc: "Management of the entire registration process — from initial signing of transfer documents to the final lodgement and registration of the property in the name of the purchaser at the Deeds Office.",
  },
  {
    icon: Banknote,
    title: "Mortgage Bond Registration & Cancellation",
    desc: "Facilitating the registration of mortgage bonds on behalf of financial institutions and the formal cancellation of existing bonds upon settlement of the loan.",
  },
  {
    icon: Building2,
    title: "Sectional Title Administration",
    desc: "Opening and management of sectional title registers, ensuring that the division of units and common property is correctly recorded and compliant with the Sectional Titles Act.",
  },
  {
    icon: MapPinned,
    title: "Township Establishment & Registration",
    desc: "Specialized legal framework required for the establishment of new townships, including registration of township registers and the necessary approvals from local authorities.",
  },
  {
    icon: Route,
    title: "Servitudes & Land Rights",
    desc: "Formal registration and cancellation of servitudes, ensuring that rights of way, water or utility access are legally secured and correctly reflected on the title deed.",
  },
  {
    icon: Layers,
    title: "Subdivisions & Consolidations",
    desc: "Managing the legal processes involved in subdividing a single property into multiple portions or consolidating multiple properties into a single title.",
  },
]

export function ConveyancingServices() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              What we deliver
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              Core professional services
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">
              From the initial sale agreement to the final lodgement at the
              Deeds Office, our conveyancing practice covers the full spectrum
              of immovable property work for individuals, developers and
              financial institutions.
            </p>
          </div>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="bg-background p-8 md:p-10 group hover:bg-soft-bg transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-11 w-11 bg-tan/10 flex items-center justify-center group-hover:bg-tan transition-colors">
                    <Icon
                      className="h-5 w-5 text-tan group-hover:text-white transition-colors"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-serif text-xl text-dark-bg leading-snug text-balance">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </article>
            )
          })}

          {/* Filler "talk to us" cell to complete the 3-col grid */}
          <article className="bg-dark-bg p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                Need guidance?
              </p>
              <h3 className="mt-5 font-serif text-2xl text-white leading-snug text-balance">
                Speak to a qualified conveyancer about your matter.
              </h3>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-white hover:text-dark-bg transition-colors w-fit"
            >
              Request a Quote
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
