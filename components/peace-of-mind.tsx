import Link from "next/link"
import { Check } from "lucide-react"

const engineItems = ["Litigation", "Notarial Services", "Consumer Law"]
const shieldItems = ["Labour Law", "Insolvency Law", "Estate Law"]
const highlights = [
  "National Capacity via Associate Network",
  "Holistic, Multidisciplinary Approach",
  "BEE Certified & Transformation-Led",
]

export function PeaceOfMind() {
  return (
    <section className="bg-soft-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Left copy + lists */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance max-w-xl">
              Your peace of mind starts with us
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Our firm&apos;s client base includes local and national companies
              across a broad range of sectors — from emerging businesses to
              multinationals, as well as public sector organizations. We address
              our clients&apos; needs with a holistic, multidisciplinary approach
              rooted in trust and clear communication.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-xl">
              <div>
                <p className="font-serif text-xl text-dark-bg border-b border-dark-bg/20 pb-3">
                  Corporate & Commercial
                </p>
                <ul className="mt-4 space-y-3 text-sm text-dark-bg/80">
                  {engineItems.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-tan">›</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-serif text-xl text-dark-bg border-b border-dark-bg/20 pb-3">
                  Employment & Estates
                </p>
                <ul className="mt-4 space-y-3 text-sm text-dark-bg/80">
                  {shieldItems.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-tan">›</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right pricing card */}
          <div className="bg-dark-bg text-white p-8 md:p-10">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Focused on results
            </p>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
              Request a free consultation today
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Whether you have a complex legal issue or need straightforward
              advice, our team is ready to help you find the right solutions.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center w-full px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-white hover:text-dark-bg transition-colors"
            >
              Book a Consultation
            </Link>

            <div className="mt-10 pt-8 border-t border-white/15">
              <p className="text-sm font-medium">Why choose us</p>
              <ul className="mt-4 space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-tan/20 text-tan">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-white/85">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
