const stats = [
  { value: "500+", label: "Cases Successfully Resolved" },
  { value: "15+", label: "Years of Combined Experience" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "8", label: "Practice Areas" },
]

export function CaseResultsStats() {
  return (
    <section className="bg-dark-bg py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-dark-bg px-8 py-10 flex flex-col items-start gap-2"
            >
              <span className="font-serif text-4xl md:text-5xl text-tan leading-none">
                {stat.value}
              </span>
              <span className="text-[11px] tracking-[0.22em] uppercase text-white/60 leading-relaxed text-balance">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
