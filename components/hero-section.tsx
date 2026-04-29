import Image from "next/image"
import Link from "next/link"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-background">
      {/* ===================== MOBILE LAYOUT ===================== */}
      <div className="lg:hidden bg-dark-bg">
        <div className="relative h-[24rem] w-full overflow-hidden">
          <Image
            src="/team/home hero image.webp"
            alt="Marshal Ndlovu Attorneys office interior"
            fill
            priority
            className="object-cover opacity-75"
            style={{ objectPosition: "center 20%" }}
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-dark-bg/25 via-dark-bg/15 to-dark-bg"
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Marshal attorneys
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-white text-balance">
              A firm built on expertise &amp; trust
            </h1>
          </div>
        </div>

        <div className="px-6 py-10">
          <p className="text-sm leading-relaxed text-white/70">
            Marshal Ndlovu Attorneys Inc. is a well-established boutique firm
            with significant national capacity through a network of associates,
            giving us substantial influence in key financial centers throughout
            the Republic of South Africa.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-white hover:text-dark-bg transition-colors"
            >
              Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3 border border-white/30 text-white text-[11px] tracking-[0.22em] uppercase hover:border-tan hover:text-tan transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* ===================== DESKTOP LAYOUT ===================== */}
      <div className="hidden lg:block">
        <div className="mx-auto w-full max-w-none px-0 py-0">
          <div className="grid h-[calc(100svh-6rem)] min-h-[520px] max-h-[680px] grid-cols-[1.82fr_1fr] gap-3 xl:gap-5">
            {/* Left: Lawyer portrait with overlay card */}
            <div className="relative h-full min-h-0 overflow-hidden">
              <Image
                src="/team/customer care.webp"
                alt="Marshal Ndlovu Attorneys team hero image"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center 38%" }}
                sizes="60vw"
              />

              {/* Overlay card */}
              <div className="absolute left-0 bottom-0 bg-background p-6 xl:p-8 w-[46%] min-w-[390px] max-w-[500px]">
                <h1 className="font-serif text-[2.6rem] xl:text-5xl leading-[1.05] text-dark-bg text-balance">
                  Providing lasting legal solutions
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
                  Professional expertise and a holistic, multidisciplinary
                  approach, serving clients across South Africa.
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-dark-bg transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right: stacked cards */}
            <div className="grid h-full min-h-0 grid-rows-[1fr_1fr] gap-3 xl:gap-5">
              {/* Top: Soft bg card */}
              <div className="bg-soft-bg px-8 py-6 text-center flex flex-col items-center justify-center overflow-hidden">
                <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                  What we do
                </p>
                <h2 className="mt-4 font-serif text-3xl xl:text-[2.35rem] leading-[1.08] text-dark-bg text-balance">
                  Defending your rights with expertise
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-sm mx-auto">
                  A well-established boutique firm with national capacity, offering a full range of corporate and commercial legal services.
                </p>
                <div className="mt-5 flex items-center justify-center gap-1.5 text-tan">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                  <span className="sr-only">Rated 5 out of 5</span>
                </div>
              </div>

              {/* Bottom: Dark testimonial card */}
              <div className="bg-dark-bg text-white px-8 py-6 relative flex flex-col items-center justify-center text-center overflow-hidden">
                <blockquote className="text-sm xl:text-[15px] leading-relaxed max-w-sm mx-auto">
                  &ldquo;Marshal Ndlovu Attorneys Inc. made the process of buying
                  our first home seamless and stress-free. Their professionalism
                  and attention to detail were outstanding.&rdquo;
                </blockquote>

                <div className="mt-5 flex flex-col items-center">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-tan/40">
                    <Image
                      src="/professional-woman-headshot-warm-lighting.jpg"
                      alt="Client testimonial"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium">Verified Client</p>
                  <p className="text-xs text-white/60 mt-0.5">Johannesburg</p>
                </div>

                {/* Carousel arrows */}
                <button
                  aria-label="Previous testimonial"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-tan transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next testimonial"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-tan transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
