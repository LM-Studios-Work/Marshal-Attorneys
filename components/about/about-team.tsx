import Image from "next/image"
import Link from "next/link"

const attorneys = [
  {
    name: "Marshal Ndlovu",
    role: "Attorney, Notary & Conveyancer",
    image: "/placeholder.svg?height=480&width=380",
  },
  {
    name: "Nikiwe V Nogemane",
    role: "Attorney, Notary & Conveyancer",
    image: "/placeholder.svg?height=480&width=380",
  },
  {
    name: "Fidelia Ndlovu",
    role: "Labour and HR Specialist",
    image: "/placeholder.svg?height=480&width=380",
  },
]

export function AboutTeam() {
  return (
    <section id="team" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
            Meet our attorneys
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
            The professionals behind the firm
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            At Marshal Ndlovu Attorneys Inc., our team of experienced attorneys
            is dedicated to delivering exceptional legal services. Get to know
            the professionals who bring expertise, dedication, and a
            client-focused approach to every case.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((attorney) => (
            <div key={attorney.name} className="group">
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-soft-bg">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/20 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <p className="font-serif text-xl text-dark-bg">{attorney.name}</p>
                  <p className="mt-1 text-xs tracking-[0.18em] uppercase text-tan">
                    {attorney.role}
                  </p>
                </div>
                <Link
                  href="/team"
                  className="mt-1 text-[11px] tracking-[0.18em] uppercase text-dark-bg/50 hover:text-tan transition-colors border-b border-dark-bg/20 hover:border-tan pb-px"
                >
                  Meet Attorney
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
