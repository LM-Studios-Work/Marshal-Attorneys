import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function NotWhatYoureLookingFor() {
  return (
    <section className="bg-soft-bg py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="bg-background border border-border p-10 md:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                Need a different department?
              </p>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl leading-tight text-dark-bg text-balance">
                Not what you&apos;re looking for?
              </h2>
              <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-muted-foreground text-pretty max-w-xl">
                Please select another area of our specialization via our website
                navigation, or visit the area of our website dedicated to{" "}
                <Link
                  href="/who-do-i-talk-to"
                  className="text-dark-bg underline underline-offset-4 decoration-tan hover:text-tan transition-colors"
                >
                  Who Do I Speak To About
                </Link>
                . Alternatively give us a call.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/who-do-i-talk-to"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-dark-bg text-white text-[11px] tracking-[0.22em] uppercase hover:bg-tan transition-colors"
              >
                Who Do I Talk To
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href="tel:0672727475"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-dark-bg/20 text-dark-bg text-[11px] tracking-[0.22em] uppercase hover:border-tan hover:text-tan transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call 067 272 7475
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
