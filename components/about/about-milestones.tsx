"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    year: "2022",
    events: [
      {
        title: "Company Incorporated",
        desc: "Our firm was officially established, marking the beginning of our journey in the legal sector.",
      },
      {
        title: "Partnership with ATNS",
        desc: "Successfully collaborated as a sub-contractor, delivering specialized legal services.",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        title: "Formal Incorporation",
        desc: "Re-registered as a Personal Liability Company, expanding our operations with the capability to lodge at five Deeds Offices across four provinces.",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        title: "Expanding Horizons",
        desc: "We continue to break new ground, achieving greater heights and setting new standards in the legal industry.",
      },
    ],
  },
]

export function AboutMilestones() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = timelineRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Begin filling once the timeline top reaches 80% of viewport,
      // complete once the timeline bottom reaches 30% of viewport.
      const start = vh * 0.8
      const end = vh * 0.3
      const totalTravel = rect.height + (start - end)
      const traveled = start - rect.top
      const p = traveled / totalTravel
      setProgress(Math.max(0, Math.min(1, p)))
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Our journey
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              Milestones
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Explore the key achievements and significant moments that have
              shaped our journey. From landmark cases to major growth
              milestones, this section highlights our firm&apos;s successes and
              the strides we&apos;ve made in delivering exceptional legal
              services.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical track — left:24px on mobile, left:120px on desktop. Both lines and all dots are anchored to this exact x. */}
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-6 md:left-[120px] w-px bg-border"
          />
          {/* Scroll-driven progress overlay */}
          <div
            aria-hidden
            className="absolute top-0 left-6 md:left-[120px] w-px bg-tan transition-[height] duration-200 ease-out"
            style={{ height: `${progress * 100}%` }}
          />

          <div className="space-y-14 md:space-y-16">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative">
                {/* Year — desktop sits to the LEFT of the line */}
                <span className="hidden md:block absolute left-0 top-0 w-[100px] pr-6 text-right font-serif text-3xl text-dark-bg leading-none">
                  {milestone.year}
                </span>

                {/* Year — mobile sits to the RIGHT of the line */}
                <p className="md:hidden font-serif text-2xl text-dark-bg pl-12 mb-5 leading-none">
                  {milestone.year}
                </p>

                {/* Dot — perfectly centered on the vertical line */}
                <span
                  aria-hidden
                  className="absolute left-6 md:left-[120px] top-0 -translate-x-1/2 h-3 w-3 rounded-full bg-tan ring-4 ring-background"
                />

                {/* Cards */}
                <div className="pl-12 md:pl-[160px] grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {milestone.events.map((event) => (
                    <div
                      key={event.title}
                      className="border border-border p-7 hover:border-tan transition-colors group"
                    >
                      <div className="w-8 h-px bg-tan mb-5" />
                      <p className="font-serif text-lg text-dark-bg group-hover:text-tan transition-colors">
                        {event.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {event.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
          <p className="font-serif text-2xl md:text-3xl text-dark-bg text-balance">
            Discover how our milestones reflect our dedication to excellence.
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center justify-center px-8 py-4 bg-dark-bg text-white text-[11px] tracking-[0.22em] uppercase hover:bg-tan transition-colors"
          >
            Get Your Case Review Now
          </Link>
        </div>
      </div>
    </section>
  )
}
