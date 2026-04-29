"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  {
    title: "Conveyancing",
    label: "Property transfers, bond registrations & title deeds",
    image: "/services/conveyancing-attorneys-south-africa-8923_1.jpg",
    href: "/services/conveyancing",
  },
  {
    title: "Family Law",
    label: "Divorce, custody, maintenance & domestic matters",
    image: "/services/lawyer-family-law-concepts.webp",
    href: "/services/family-law",
  },
  {
    title: "Litigation",
    label: "Court representation & complex civil disputes",
    image: "/services/civil law.webp",
    href: "/services/litigation",
  },
  {
    title: "Notarial Services",
    label: "Antenuptial contracts, notarial bonds & authentications",
    image: "/services/notary.jpg",
    href: "/services/notarial-services",
  },
  {
    title: "Consumer Law",
    label: "CPA enforcement, defective goods & supplier disputes",
    image: "/services/The-Consumer-Protection-Act.jpg",
    href: "/services/consumer-law",
  },
  {
    title: "Labour Law",
    label: "CCMA disputes, dismissals & employment matters",
    image: "/services/Labor-Law-1-ZI-Attorneys.jpg",
    href: "/services/labour-law",
  },
  {
    title: "Insolvency Law",
    label: "Voluntary sequestration, liquidations & debt relief",
    image: "/services/insolvency-law-south-africa--1024x633.jpg",
    href: "/services/insolvency-law",
  },
  {
    title: "Estate Law",
    label: "Wills, trusts & deceased estate administration",
    image: "/services/WILLS-ESTATES-LAWYERS-IN-PRETORIA.jpg",
    href: "/services/estate-law",
  },
]

export function GuidanceSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollPrev(scrollLeft > 4)
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateButtons()
    el.addEventListener("scroll", updateButtons, { passive: true })
    window.addEventListener("resize", updateButtons)
    return () => {
      el.removeEventListener("scroll", updateButtons)
      window.removeEventListener("resize", updateButtons)
    }
  }, [updateButtons])

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const distance = card ? card.offsetWidth + 24 : Math.round(el.clientWidth * 0.8)
    el.scrollBy({ left: direction * distance, behavior: "smooth" })
  }

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Our practice areas
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance max-w-xl">
              Guiding you through legal challenges
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-3 pb-3">
            <button
              type="button"
              aria-label="Previous services"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              className="h-10 w-10 flex items-center justify-center border border-border text-dark-bg hover:bg-dark-bg hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-dark-bg"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next services"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              className="h-10 w-10 flex items-center justify-center border border-border text-dark-bg hover:bg-dark-bg hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-dark-bg"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Constrained scroller — overflow hidden so off-screen cards aren't visible until you scroll */}
        <div className="overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                data-card
                className="group shrink-0 w-[78vw] sm:w-[58vw] md:w-[44vw] lg:w-[calc((100%-3rem)/4)] snap-start bg-soft-bg"
              >
                <article>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 78vw, (max-width: 768px) 58vw, (max-width: 1024px) 44vw, 320px"
                    />
                    <div className="absolute inset-x-6 bottom-6 bg-background/95 backdrop-blur px-5 py-3">
                      <p className="font-serif text-lg text-dark-bg">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
