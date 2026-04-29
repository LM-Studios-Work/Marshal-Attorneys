export function ServicesIntro() {
  const areas = ["Conveyancing", "Family Law", "Litigation", "Estate Law"]

  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="text-center text-[11px] tracking-[0.28em] uppercase text-tan">
          Our practice areas
        </p>

        <div className="mt-12 md:mt-16 font-serif text-dark-bg">
          {/* Desktop / tablet layout */}
          <div className="hidden md:flex flex-col items-center">
            <div className="flex items-center justify-center gap-x-12 text-5xl lg:text-6xl leading-tight">
              <span>{areas[0]}</span>
              <span
                aria-hidden="true"
                className="block h-px w-16 bg-tan"
              />
              <span>{areas[1]}</span>
            </div>

            <p className="mt-10 max-w-2xl text-center text-xl lg:text-2xl italic leading-relaxed text-dark-bg/65">
              Serving clients across South Africa
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-12 text-5xl lg:text-6xl leading-tight">
              <span>{areas[2]}</span>
              <span
                aria-hidden="true"
                className="block h-px w-16 bg-tan"
              />
              <span>{areas[3]}</span>
            </div>
          </div>

          {/* Mobile layout */}
          <ul className="md:hidden flex flex-col items-center text-center">
            <li className="text-4xl leading-tight">{areas[0]}</li>
            <li aria-hidden="true" className="my-5 h-px w-12 bg-tan" />
            <li className="text-4xl leading-tight">{areas[1]}</li>

            <li className="my-8 max-w-xs text-base italic leading-relaxed text-dark-bg/65">
              Serving clients across South Africa
            </li>

            <li className="text-4xl leading-tight">{areas[2]}</li>
            <li aria-hidden="true" className="my-5 h-px w-12 bg-tan" />
            <li className="text-4xl leading-tight">{areas[3]}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
