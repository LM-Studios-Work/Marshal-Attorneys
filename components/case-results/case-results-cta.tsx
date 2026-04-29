import Link from "next/link"

export function CaseResultsCTA() {
  return (
    <section className="bg-soft-bg py-24 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Start your journey
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              Ready to add your success story?
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-lg">
              Our attorneys are ready to listen and advise. Schedule a free
              consultation today and let us help you find the right path forward.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-dark-bg transition-colors"
            >
              Free Consultation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border border-dark-bg/30 text-dark-bg text-[11px] tracking-[0.22em] uppercase hover:border-tan hover:text-tan transition-colors"
            >
              About the Firm
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
