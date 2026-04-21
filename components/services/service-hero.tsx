import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

type ServiceHeroProps = {
  title: string
  breadcrumb: string
  description: string
  imageSrc: string
  imageAlt: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function ServiceHero({
  title,
  breadcrumb,
  description,
  imageSrc,
  imageAlt,
  primaryCta = { label: "Book a Consultation", href: "/contact" },
  secondaryCta = { label: "View Services", href: "#services" },
}: ServiceHeroProps) {
  return (
    <section className="bg-dark-bg text-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-[520px]">
          <div className="flex flex-col justify-center py-20 pr-0 lg:pr-16">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-white/60 mb-8"
            >
              <Link href="/" className="hover:text-tan transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link
                href="/services"
                className="hover:text-tan transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-tan">{breadcrumb}</span>
            </nav>

            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Practice Area
            </p>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] text-white text-balance">
              {title}
            </h1>
            <p className="mt-7 text-sm leading-relaxed text-white/70 max-w-lg">
              {description}
            </p>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-white hover:text-dark-bg transition-colors"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-7 py-3 border border-white/30 text-white text-[11px] tracking-[0.22em] uppercase hover:border-tan hover:text-tan transition-colors"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block min-h-[520px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
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
