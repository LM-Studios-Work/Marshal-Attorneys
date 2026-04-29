import { AnimatedNumber } from "@/components/animated-number"

const stats: { value: number; suffix: string; label: string }[] = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 30, suffix: "+", label: "Peer Collaborations" },
  { value: 630, suffix: "+", label: "Finalised Matters" },
]

export function StatsBar() {
  return (
    <section className="home-section bg-soft-bg relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="home-stat text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-4xl md:text-5xl text-dark-bg tabular-nums">
                <AnimatedNumber value={s.value} suffix={s.suffix} duration={900} />
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
