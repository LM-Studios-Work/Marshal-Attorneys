import Image from "next/image"
import { ShieldCheck, FileText, Landmark } from "lucide-react"

const objectives = [
  {
    icon: ShieldCheck,
    title: "Legally Sound Transfers",
    desc: "Every transaction conducted in strict compliance with the Deeds Registries Act.",
  },
  {
    icon: FileText,
    title: "Unencumbered Title",
    desc: "Buyers receive clean, registered title with no hidden liabilities or claims.",
  },
  {
    icon: Landmark,
    title: "Seller Protection",
    desc: "Seller interests fully safeguarded throughout the registration process.",
  },
]

export function ConveyancingOverview() {
  return (
    <section className="bg-soft-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/courtroom-gavel-detail-warm-tones.jpg"
              alt="Property documents and conveyancing files"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-dark-bg text-white px-7 py-6">
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                Deeds Registries Act
              </p>
              <p className="mt-3 font-serif text-xl leading-tight">
                Compliant. Transparent. Registered.
              </p>
            </div>
          </div>

          {/* Right copy */}
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Overview
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              Comprehensive conveyancing services
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground max-w-xl">
              Marshal Ndlovu Attorneys Inc. provides comprehensive conveyancing
              services, ensuring that all transactions are conducted in strict
              accordance with South African legislation. Our primary objective
              is to ensure that the transfer of ownership is legally sound, the
              buyer receives an unencumbered title, and the seller&apos;s
              interests are fully protected.
            </p>

            <div className="mt-12 space-y-8">
              {objectives.map((obj) => {
                const Icon = obj.icon
                return (
                  <div key={obj.title} className="flex gap-5">
                    <div className="flex-shrink-0 h-12 w-12 bg-background border border-border flex items-center justify-center">
                      <Icon
                        className="h-5 w-5 text-tan"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </div>
                    <div>
                      <p className="font-serif text-lg text-dark-bg">
                        {obj.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground max-w-md">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
