"use client"

import Image from "next/image"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="bg-dark-bg text-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[480px]">
          {/* Left copy */}
          <div className="flex flex-col justify-center py-20 pr-0 lg:pr-16">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              About us
            </p>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] text-white text-balance">
              A firm built on expertise &amp; trust
            </h1>
            <p className="mt-7 text-sm leading-relaxed text-white/70 max-w-lg">
              Marshal Ndlovu Attorneys Inc. is a well-established boutique firm
              with significant national capacity through a network of associates,
              giving us substantial influence in key financial centers throughout
              the Republic of South Africa.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-white hover:text-dark-bg transition-colors"
              >
                Free Consultation
              </Link>
              <Link
                href="#team"
                className="inline-flex items-center justify-center px-7 py-3 border border-white/30 text-white text-[11px] tracking-[0.22em] uppercase hover:border-tan hover:text-tan transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block min-h-[480px]">
            <Image
              src="/lawyer-in-navy-suit-reading-documents-in-wood-pane.jpg"
              alt="Marshal Ndlovu Attorneys office interior"
              fill
              priority
              className="object-cover opacity-70"
              sizes="50vw"
            />
            {/* Tan accent strip */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-tan" />
          </div>
        </div>
      </div>
    </section>
  )
}
