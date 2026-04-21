import Image from "next/image"

export function ServicesIntro() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="text-center text-[11px] tracking-[0.28em] uppercase text-tan">
          Our practice areas
        </p>

        <div className="mt-10 font-serif text-dark-bg">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 text-4xl md:text-6xl leading-tight">
            <span>Conveyancing</span>
            <span className="relative inline-block h-14 w-24 md:h-16 md:w-28 overflow-hidden align-middle">
              <Image
                src="/elegant-law-office-interior-dark-navy.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="112px"
              />
            </span>
            <span>Family Law</span>
          </div>

          <div className="mt-6 text-center text-4xl md:text-6xl leading-tight">
            <span>Serving clients across South Africa</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 text-4xl md:text-6xl leading-tight">
            <span>Litigation</span>
            <span className="relative inline-block h-14 w-24 md:h-16 md:w-28 overflow-hidden align-middle">
              <Image
                src="/courtroom-gavel-detail-warm-tones.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="112px"
              />
            </span>
            <span>Estate Law</span>
          </div>
        </div>
      </div>
    </section>
  )
}
