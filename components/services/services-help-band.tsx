import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function ServicesHelpBand() {
  return (
    <section className="bg-soft-bg py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 items-center">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Not sure where to start?
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight text-dark-bg text-balance max-w-xl">
              Tell us about your matter and we&apos;ll point you to the right
              attorney
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link
              href="/who-do-i-talk-to"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-dark-bg text-white text-[11px] tracking-[0.22em] uppercase hover:bg-tan transition-colors"
            >
              Who Do I Talk To
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="tel:0672727475"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-dark-bg/30 text-dark-bg text-[11px] tracking-[0.22em] uppercase hover:border-tan hover:text-tan transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden />
              067 272 7475
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
