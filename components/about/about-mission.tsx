import { Check } from "lucide-react"

const pillars = [
  "Recruit, train & retain talented lawyers dedicated to excellence",
  "Maintain a collaborative, diverse & inclusive environment",
  "Drive business growth through innovation and technology",
  "Deliver superior, efficient & responsive client service",
]

export function AboutMission() {
  return (
    <section className="bg-soft-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission */}
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Our purpose
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              Mission &amp; Vision
            </h2>
            <div className="mt-8 space-y-8">
              <div>
                <p className="font-serif text-2xl text-dark-bg">Mission</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To provide lasting legal solutions — delivered with
                  professionalism, integrity, and an unwavering commitment to
                  our clients&apos; best interests.
                </p>
              </div>
              <div className="w-16 h-px bg-tan" />
              <div>
                <p className="font-serif text-2xl text-dark-bg">Vision</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We will continue to provide superior, efficient, and responsive
                  service by recruiting, training, and retaining talented lawyers
                  and team members dedicated to excellence in client service. We
                  maintain a collaborative, diverse, and inclusive environment
                  that provides opportunities to drive business growth and
                  productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="bg-dark-bg text-white p-10 md:p-14">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              How we deliver
            </p>
            <h3 className="mt-5 font-serif text-3xl md:text-4xl leading-tight">
              Our commitment to you
            </h3>
            <ul className="mt-10 space-y-5">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-4 text-sm text-white/80 leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-tan/20 text-tan">
                    <Check className="h-3 w-3" />
                  </span>
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
