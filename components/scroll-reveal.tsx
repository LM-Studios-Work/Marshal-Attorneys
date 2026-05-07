"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const revealSelector = [
  ".home-page .home-section .home-reveal",
  ".home-page .home-section .home-image-stack",
  ".home-page .home-section .home-stat",
  ".home-page .home-section .home-service-card",
  "main > section:not(:first-of-type) .scroll-reveal",
].join(", ")

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(revealSelector)

    if (!elements.length) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [pathname])

  return null
}
