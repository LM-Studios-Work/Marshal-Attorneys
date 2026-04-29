import { AnimatedNumber } from "@/components/animated-number"

const stats: { value: number; suffix: string; label: string }[] = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 30, suffix: "+", label: "Peer Collaborations" },
  { value: 630, suffix: "+", label: "Finalised Matters" },
]

export function AboutStats() {
  return (
    <section className="bg-tan text-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-10 px-6 text-center flex flex-col items-center ${
                i < stats.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              <span className="font-serif text-5xl md:text-6xl leading-none text-white tabular-nums">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-3 text-[10px] tracking-[0.22em] uppercase text-white/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
