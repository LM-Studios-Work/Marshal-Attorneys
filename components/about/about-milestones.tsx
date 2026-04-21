import Link from "next/link"

const milestones = [
  {
    year: "2022",
    events: [
      {
        title: "Company Incorporated",
        desc: "Our firm was officially established, marking the beginning of our journey in the legal sector.",
      },
      {
        title: "Partnership with ATNS",
        desc: "Successfully collaborated as a sub-contractor, delivering specialized legal services.",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        title: "Formal Incorporation",
        desc: "Re-registered as a Personal Liability Company, expanding our operations with the capability to lodge at five Deeds Offices across four provinces.",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        title: "Expanding Horizons",
        desc: "We continue to break new ground, achieving greater heights and setting new standards in the legal industry.",
      },
    ],
  },
]

export function AboutMilestones() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Our journey
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              Milestones
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Explore the key achievements and significant moments that have
              shaped our journey. From landmark cases to major growth
              milestones, this section highlights our firm&apos;s successes and
              the strides we&apos;ve made in delivering exceptional legal
              services.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[88px] md:left-[120px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-0">
            {milestones.map((milestone, mi) => (
              <div
                key={milestone.year}
                className={`flex gap-0 md:gap-0 ${mi < milestones.length - 1 ? "mb-0" : ""}`}
              >
                {/* Year */}
                <div className="hidden md:flex flex-col items-end pt-1 w-[120px] flex-shrink-0 pr-10">
                  <span className="font-serif text-3xl text-dark-bg">
                    {milestone.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="mt-2 h-3 w-3 rounded-full bg-tan ring-4 ring-background flex-shrink-0" />
                </div>

                {/* Events */}
                <div className="flex-1 pl-0 md:pl-10 pb-14">
                  {/* Mobile year */}
                  <p className="md:hidden font-serif text-2xl text-dark-bg mb-6">
                    {milestone.year}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {milestone.events.map((event) => (
                      <div
                        key={event.title}
                        className="border border-border p-7 hover:border-tan transition-colors group"
                      >
                        <div className="w-8 h-px bg-tan mb-5" />
                        <p className="font-serif text-lg text-dark-bg group-hover:text-tan transition-colors">
                          {event.title}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {event.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
          <p className="font-serif text-2xl md:text-3xl text-dark-bg text-balance">
            Discover how our milestones reflect our dedication to excellence.
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center justify-center px-8 py-4 bg-dark-bg text-white text-[11px] tracking-[0.22em] uppercase hover:bg-tan transition-colors"
          >
            Get Your Case Review Now
          </Link>
        </div>
      </div>
    </section>
  )
}
