import type { LucideIcon } from "lucide-react"

export type ServiceDetail = {
  icon: LucideIcon
  title: string
  desc: string
}

type ServiceDetailsProps = {
  eyebrow: string
  heading: string
  intro: string
  items: ServiceDetail[]
  ctaLabel?: string
  ctaTitle?: string
  ctaButton?: string
}

export function ServiceDetails({
  eyebrow,
  heading,
  intro,
  items,
  ctaLabel = "Need guidance?",
  ctaTitle = "Speak to a qualified attorney about your matter.",
  ctaButton = "Request a Consultation",
}: ServiceDetailsProps) {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              {eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              {heading}
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">
              {intro}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((service) => {
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

          <article className="bg-dark-bg p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                {ctaLabel}
              </p>
              <h3 className="mt-5 font-serif text-2xl text-white leading-snug text-balance">
                {ctaTitle}
              </h3>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-white hover:text-dark-bg transition-colors w-fit"
            >
              {ctaButton}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
