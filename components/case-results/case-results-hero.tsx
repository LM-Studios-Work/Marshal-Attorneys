export function CaseResultsHero() {
  return (
    <section className="bg-dark-bg text-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="py-20 md:py-28 max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
            Client Testimonials
          </p>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] text-white text-balance">
            Real outcomes. Real clients.
          </h1>
          <p className="mt-7 text-sm leading-relaxed text-white/70 max-w-xl">
            The measure of our firm is not only found in the law we practice,
            but in the lives we impact. Here is what our clients say about
            working with Marshal Ndlovu Attorneys Inc.
          </p>
          {/* Decorative rule */}
          <div className="mt-10 h-px w-24 bg-tan" />
        </div>
      </div>
      {/* Bottom accent strip */}
      <div className="h-1 bg-tan" />
    </section>
  )
}
