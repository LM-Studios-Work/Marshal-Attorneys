"use client"

import Image from "next/image"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="bg-dark-bg text-white overflow-hidden">
      {/* ===================== MOBILE LAYOUT ===================== */}
      <div className="lg:hidden">
        <div className="relative h-[36rem] w-full overflow-hidden sm:h-[42rem]">
          <Image
            src="/team/customer care.webp"
            alt="Marshal Ndlovu Attorneys team hero image"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-dark-bg/60 to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-bg/15 to-transparent"
          />

          <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center text-white">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Meet our team
            </p>
            <h1 className="mt-4 font-serif text-3xl leading-[1.15] text-balance">
              The professionals behind the firm
            </h1>
          </div>

          <div className="absolute bottom-7 left-4 z-10">
            <div className="w-[17.5rem] bg-background p-5 shadow-lg">
              <h2 className="font-serif text-[1.65rem] leading-[1.12] text-dark-bg text-balance">
                Meet our team
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                Get to know the lawyers and support professionals behind our
                client-focused legal service.
              </p>
              <Link
                href="/about#team"
                className="mt-4 inline-flex items-center justify-center px-5 py-2.5 bg-tan text-white text-[10px] tracking-[0.2em] uppercase hover:bg-dark-bg transition-colors"
              >
                View Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== DESKTOP LAYOUT ===================== */}
      <div className="mx-auto hidden max-w-[1400px] px-6 md:px-10 lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:min-h-[480px]">
          {/* Left copy */}
          <div className="flex flex-col justify-center py-20 pr-0 lg:pr-16">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              About us
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-white text-balance md:text-6xl">
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
                href="/about#team"
                className="inline-flex items-center justify-center px-7 py-3 border border-white/30 text-white text-[11px] tracking-[0.22em] uppercase hover:border-tan hover:text-tan transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block min-h-[480px]">
            <Image
              src="/team/home hero image.webp"
              alt="Marshal Ndlovu Attorneys office interior"
              fill
              priority
              className="object-cover opacity-70"
              style={{ objectPosition: "center 20%" }}
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
