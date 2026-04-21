import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  {
    title: "Conveyancing & Property Law",
    label: "Real estate transfers, bond registrations & title deeds",
    image: "/leather-wallet-and-card-holder-on-linen.jpg",
  },
  {
    title: "Family Law & Estates",
    label: "Divorce, guardianship, wills & estate administration",
    image: "/brown-leather-notebook-on-desk.jpg",
  },
  {
    title: "Litigation & Labour Law",
    label: "Court representation, disputes & employment matters",
    image: "/wooden-judge-gavel-on-marble.jpg",
  },
]

export function GuidanceSection() {
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
              aria-label="Previous"
              className="h-10 w-10 flex items-center justify-center border border-border text-dark-bg hover:bg-dark-bg hover:text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next"
              className="h-10 w-10 flex items-center justify-center border border-border text-dark-bg hover:bg-dark-bg hover:text-white transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="bg-soft-bg group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
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
          ))}
        </div>
      </div>
    </section>
  )
}
