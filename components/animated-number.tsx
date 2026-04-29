"use client"

import { useEffect, useRef, useState } from "react"

type AnimatedNumberProps = {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  /**
   * Locale-aware thousands grouping (e.g. 1,000). Defaults to true.
   */
  format?: boolean
}

/**
 * Counts up from 0 to `value` once the element scrolls into view.
 * Respects `prefers-reduced-motion` and falls back to the final value.
 */
export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
  className,
  format = true,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion) {
      setDisplay(value)
      startedRef.current = true
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || startedRef.current) return
          startedRef.current = true

          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(Math.round(value * eased))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          obs.disconnect()
        })
      },
      { threshold: 0.35 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, duration])

  const rendered = format ? display.toLocaleString() : String(display)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {rendered}
      {suffix}
    </span>
  )
}
