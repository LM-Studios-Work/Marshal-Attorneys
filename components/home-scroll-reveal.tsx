"use client"

import { useEffect } from "react"

export function HomeScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".home-page .home-section .home-reveal, .home-page .home-section .home-image-stack, .home-page .home-section .home-stat, .home-page .home-section .home-service-card",
    )

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
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.16,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return null
}
