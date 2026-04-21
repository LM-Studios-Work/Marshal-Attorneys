import Image from "next/image"
import Link from "next/link"

export function NavigateLaw() {
  return (
    <section className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left text column */}
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Dedicated to your case
            </p>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl leading-[1.05] text-dark-bg text-balance">
              We navigate the law for you
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              At the core of our mission is a deep commitment to excellence and
              client satisfaction. Our team works tirelessly to provide
              thoughtful solutions, ensuring that every detail reflects care
              and precision.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-dark-bg transition-colors"
            >
              Speak with a Lawyer
            </Link>
          </div>

          {/* Right image stack */}
          <div className="relative min-h-[440px]">
            {/* Background shelf image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/rows-of-leather-bound-law-books-on-shelf.jpg"
                alt="Leather-bound law books on a shelf"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Stat card 1 - tan */}
            <div className="absolute top-6 left-6 md:left-10 bg-tan text-white w-40 md:w-48 aspect-[3/4] flex flex-col items-center justify-center p-4">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 mb-2 opacity-90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M12 3v18M5 8h14M5 16h14" />
                <circle cx="12" cy="3" r="1.5" fill="currentColor" />
              </svg>
              <div className="font-serif text-5xl md:text-6xl leading-none">
                83
              </div>
              <div className="mt-3 text-[10px] tracking-[0.22em] uppercase">
                Mediation
              </div>
            </div>

            {/* Stat card 2 - navy */}
            <div className="absolute bottom-6 right-6 md:right-10 bg-dark-bg text-white w-40 md:w-48 aspect-[3/4] flex flex-col items-center justify-center p-4">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 mb-2 text-tan"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M4 20 20 4M14 4h6v6" />
              </svg>
              <div className="font-serif text-5xl md:text-6xl leading-none">
                32
              </div>
              <div className="mt-3 text-[10px] tracking-[0.22em] uppercase">
                Compliance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
