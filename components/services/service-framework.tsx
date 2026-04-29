"use client"

import { Check } from "lucide-react"
import { PhosphorIcon } from "@/components/services/phosphor-icon"
import type { PhosphorIconName } from "@/lib/phosphor-icon-names"

type FrameworkCard = {
  icon?: PhosphorIconName
  eyebrow: string
  title: string
  body: string
  bullets: string[]
}

type ServiceFrameworkProps = {
  eyebrow: string
  heading: string
  intro: string
  primary: FrameworkCard
  secondary: FrameworkCard
}

export function ServiceFramework({
  eyebrow,
  heading,
  intro,
  primary,
  secondary,
}: ServiceFrameworkProps) {
  const primaryIcon = primary.icon ?? "ShieldCheck"
  const secondaryIcon = secondary.icon ?? "Scales"
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
            {heading}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-dark-bg text-white p-10 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-shrink-0">
                <PhosphorIcon
                  name={primaryIcon}
                  size={32}
                  weight="bold"
                  color="#b9896a"
                  aria-hidden
                />
              </div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                {primary.eyebrow}
              </p>
            </div>
            <h3 className="font-serif text-3xl leading-tight text-balance">
              {primary.title}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {primary.body}
            </p>
            <ul className="mt-8 space-y-4 border-t border-white/15 pt-8">
              {primary.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-tan/20 text-tan">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-soft-bg text-dark-bg p-10 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-shrink-0">
                <PhosphorIcon
                  name={secondaryIcon}
                  size={32}
                  weight="bold"
                  color="#b9896a"
                  aria-hidden
                />
              </div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                {secondary.eyebrow}
              </p>
            </div>
            <h3 className="font-serif text-3xl leading-tight text-balance">
              {secondary.title}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {secondary.body}
            </p>
            <ul className="mt-8 space-y-4 border-t border-dark-bg/15 pt-8">
              {secondary.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-tan/20 text-tan">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-dark-bg/85">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
