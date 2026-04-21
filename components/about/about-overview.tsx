import Image from "next/image"

export function AboutOverview() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/rows-of-leather-bound-law-books-on-shelf.jpg"
              alt="Law library at Marshal Ndlovu Attorneys"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Tan inset accent */}
            <div className="absolute bottom-8 right-0 w-3/4 bg-tan px-8 py-6">
              <p className="font-serif text-2xl text-white leading-tight">
                A new-generation law firm leading transformation.
              </p>
            </div>
          </div>

          {/* Right copy */}
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Who we are
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              More than a law firm — a partner in your journey
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                We offer a full range of corporate and commercial legal services,
                including conveyancing, notarial services, comprehensive BEE
                consulting, dispute resolution, litigation, arbitration,
                employment, finance, company restructuring, real estate, tax,
                trusts, and estates.
              </p>
              <p>
                Our client base includes local and national companies across a
                broad range of sectors — from emerging businesses to
                multinationals, as well as public sector organizations.
              </p>
              <p>
                We recognize diversity and equal opportunity as key issues for
                meaningful and sustainable participation in the Broad-Based Black
                Economic Empowerment initiative. To this end, the firm has a
                well-established transformation policy.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="border-l-2 border-tan pl-5">
                <p className="font-serif text-lg text-dark-bg">Our Mission</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  To provide lasting legal solutions.
                </p>
              </div>
              <div className="border-l-2 border-tan pl-5">
                <p className="font-serif text-lg text-dark-bg">Our Vision</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Superior, efficient, and responsive service — through talent,
                  collaboration, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
