import Image from "next/image"
import Link from "next/link"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
          {/* Left: Lawyer portrait with overlay card */}
          <div className="relative overflow-hidden min-h-[520px] lg:min-h-[640px]">
            <Image
              src="/lawyer-in-navy-suit-reading-documents-in-wood-pane.jpg"
              alt="Lawyer reviewing documents in a wood-paneled office"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            {/* Overlay card */}
            <div className="absolute left-0 bottom-0 bg-background p-8 md:p-10 max-w-md">
              <h1 className="font-serif text-4xl md:text-5xl leading-[1.05] text-dark-bg text-balance">
                Providing lasting legal solutions
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-xs">
                Professional expertise and a holistic, multidisciplinary
                approach — serving clients across South Africa.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-dark-bg transition-colors"
              >
                Request a Consultation
              </Link>
            </div>
          </div>

          {/* Right: stacked cards */}
          <div className="grid grid-rows-[auto_1fr] gap-6">
            {/* Top: Soft bg card */}
            <div className="bg-soft-bg px-8 py-12 md:py-14 text-center">
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                What we do
              </p>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl leading-tight text-dark-bg text-balance">
                Defending your rights with expertise
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs mx-auto">
                A well-established boutique firm with national capacity, offering a full range of corporate and commercial legal services.
              </p>
              <div className="mt-7 flex items-center justify-center gap-1.5 text-tan">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
                <span className="sr-only">Rated 5 out of 5</span>
              </div>
            </div>

            {/* Bottom: Dark testimonial card */}
            <div className="bg-dark-bg text-white px-8 py-12 md:py-14 relative flex flex-col items-center justify-center text-center">
              <blockquote className="text-sm md:text-[15px] leading-relaxed max-w-xs mx-auto">
                &ldquo;Marshal Ndlovu Attorneys Inc. made the process of buying
                our first home seamless and stress-free. Their professionalism
                and attention to detail were outstanding.&rdquo;
              </blockquote>

              <div className="mt-8 flex flex-col items-center">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-tan/40">
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
    </section>
  )
}
