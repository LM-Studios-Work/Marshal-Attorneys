import Link from "next/link"

export function ConveyancingCTA() {
  return (
    <section className="bg-dark-bg py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Ready to transfer?
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight text-white text-balance">
              Let our conveyancers handle your property transaction.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-white hover:text-dark-bg transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="tel:0672727475"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-[11px] tracking-[0.22em] uppercase hover:border-tan hover:text-tan transition-colors"
            >
              Call 067 272 7475
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
