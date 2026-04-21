import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative bg-dark-bg text-white overflow-hidden">
      {/* Subtle overlay pattern using an image of law books, darkened */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/dimly-lit-law-library-with-leather-bound-books-cin.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/80 to-dark-bg" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-white/60"
        >
          <Link href="/" className="hover:text-tan transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="text-tan">Contact</span>
        </nav>

        <div className="mt-6 max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
            Marshal Ndlovu Attorneys Inc.
          </p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Let&apos;s discuss your legal matter
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl text-pretty">
            Whether you have a complex legal issue or need straightforward
            advice, we&apos;re here to help. Reach out to our team and take the
            first step toward finding the right solution for your situation.
          </p>
        </div>
      </div>
    </section>
  )
}
