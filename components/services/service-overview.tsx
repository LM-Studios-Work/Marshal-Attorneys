"use client"

import Image from "next/image"
import { PhosphorIcon } from "@/components/services/phosphor-icon"
import type { PhosphorIconName } from "@/lib/phosphor-icon-names"

type Highlight = {
  icon: PhosphorIconName
  title: string
  desc: string
}

type ServiceOverviewProps = {
  eyebrow: string
  heading: string
  body: string
  imageSrc: string
  imageAlt: string
  badgeLabel: string
  badgeTitle: string
  highlights: Highlight[]
}

export function ServiceOverview({
  eyebrow,
  heading,
  body,
  imageSrc,
  imageAlt,
  badgeLabel,
  badgeTitle,
  highlights,
}: ServiceOverviewProps) {
  return (
    <section className="bg-soft-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-dark-bg text-white px-7 py-6">
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                {badgeLabel}
              </p>
              <p className="mt-3 font-serif text-xl leading-tight">
                {badgeTitle}
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              {eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              {heading}
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground max-w-xl">
              {body}
            </p>

            <div className="mt-12 space-y-8">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-shrink-0 pt-1">
                      <PhosphorIcon
                        name={Icon}
                        size={40}
                        weight="bold"
                        color="#0f1d35"
                        aria-hidden
                        className="transition-transform hover:scale-110"
                      />
                    </div>
                    <div>
                      <p className="font-serif text-lg text-dark-bg">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground max-w-md">
                        {item.desc}
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
