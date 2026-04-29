import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { AnimatedNumber } from "@/components/animated-number"

export function ServicesIndexHero() {
  return (
    <section className="bg-dark-bg text-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] min-h-[560px]">
          {/* Left: copy */}
          <div className="flex flex-col justify-center py-20 pr-0 lg:pr-16">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-white/60 mb-8"
            >
              <Link href="/" className="hover:text-tan transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-tan">Services</span>
            </nav>

            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Our Practice Areas
            </p>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] text-white text-balance max-w-xl">
              Eight focused practice areas, one trusted firm
            </h1>
            <p className="mt-7 text-sm leading-relaxed text-white/70 max-w-lg text-pretty">
              From property transfers to complex litigation, our attorneys
              deliver clear advice and rigorous representation across every area
              of South African law that matters to our clients.
            </p>

            {/* Inline KPI strip */}
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <Stat value={8} suffix="" label="Practice Areas" />
              <Stat value={6} suffix="+" label="Years Experience" />
              <Stat value={5} suffix="" label="Deeds Offices" />
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#all-services"
                className="inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-white hover:text-dark-bg transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/who-do-i-talk-to"
                className="inline-flex items-center justify-center px-7 py-3 border border-white/30 text-white text-[11px] tracking-[0.22em] uppercase hover:border-tan hover:text-tan transition-colors"
              >
                Who Do I Talk To
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative hidden lg:block min-h-[560px]">
            <Image
              src="/elegant-law-office-interior-dark-navy.jpg"
              alt="Marshal Ndlovu Attorneys office interior"
              fill
              priority
              className="object-cover opacity-70"
              sizes="50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-tan" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  value,
  suffix,
  label,
}: {
  value: number
  suffix?: string
  label: string
}) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="font-serif text-3xl md:text-4xl text-white tabular-nums leading-none">
        <AnimatedNumber value={value} suffix={suffix} />
      </dd>
      <p className="mt-2 text-[10px] tracking-[0.22em] uppercase text-white/60">
        {label}
      </p>
    </div>
  )
}
