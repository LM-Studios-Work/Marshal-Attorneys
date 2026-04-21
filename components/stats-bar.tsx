import Image from "next/image"

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "1,000+", label: "Happy Clients" },
  { value: "30+", label: "Peer Collaborations" },
  { value: "630+", label: "Finalised Matters" },
]

const avatars = [
  "/young-professional-headshot.png",
  "/business-woman-portrait.png",
  "/placeholder.svg?height=40&width=40",
  "/senior-lawyer-portrait.jpg",
]

export function StatsBar() {
  return (
    <section className="bg-soft-bg relative">
      {/* Customer care badge */}
      <div className="absolute -top-8 right-6 md:right-16 z-10 bg-tan text-white px-5 py-2.5 flex items-center gap-3 shadow-sm">
        <div className="flex -space-x-2">
          {avatars.slice(0, 4).map((src, i) => (
            <div
              key={i}
              className="relative h-7 w-7 rounded-full overflow-hidden ring-2 ring-tan"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
          ))}
        </div>
        <span className="text-[10px] tracking-[0.22em] uppercase">
          Customer Care
        </span>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-4xl md:text-5xl text-dark-bg tabular-nums">
                {s.value}
              </dd>
              <p className="mt-3 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
