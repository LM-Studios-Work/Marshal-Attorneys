import { Phone, Mail, MapPin } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type InfoItem = {
  icon: LucideIcon
  label: string
  lines: string[]
  href?: string
}

const items: InfoItem[] = [
  {
    icon: Phone,
    label: "Call the Office",
    lines: ["067 272 7475"],
    href: "tel:+27672727475",
  },
  {
    icon: Mail,
    label: "Send an Email",
    lines: ["info@manattorneys.co.za"],
    href: "mailto:info@manattorneys.co.za",
  },
  {
    icon: MapPin,
    label: "Visit the Firm",
    lines: [
      "702 — 7th Floor, Klamson Towers",
      "151 Commissioner Street",
      "Marshalltown, Johannesburg",
    ],
  },
]

export function ContactInfo() {
  return (
    <section className="bg-background -mt-16 md:-mt-20 relative z-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-background shadow-[0_20px_60px_-20px_rgba(15,29,53,0.25)] border border-border/60">
          {items.map((item, i) => {
            const Icon = item.icon
            const content = (
              <div
                className={`flex items-start gap-5 p-8 md:p-10 h-full ${
                  i < items.length - 1 ? "md:border-r border-border/60" : ""
                } ${i > 0 ? "border-t md:border-t-0 border-border/60" : ""}`}
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center bg-soft-bg text-tan">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-tan">
                    {item.label}
                  </p>
                  <div className="mt-2 space-y-1">
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-[15px] leading-relaxed text-dark-bg"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="group hover:bg-soft-bg/60 transition-colors"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
