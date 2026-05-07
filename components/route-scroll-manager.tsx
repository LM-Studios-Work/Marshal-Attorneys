"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function getHeaderOffset() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--site-header-offset")
    .trim()

  const parsed = Number.parseFloat(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function jumpTo(top: number) {
  const root = document.documentElement
  const previousBehavior = root.style.scrollBehavior

  root.style.scrollBehavior = "auto"
  window.scrollTo({ top, left: 0, behavior: "auto" })
  root.style.scrollBehavior = previousBehavior
}

export function RouteScrollManager() {
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash

      if (!hash) {
        jumpTo(0)
        return
      }

      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (!target) return

      const top =
        target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()

      jumpTo(Math.max(0, top))
    }

    const frame = window.requestAnimationFrame(handleScroll)
    window.addEventListener("hashchange", handleScroll)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("hashchange", handleScroll)
    }
  }, [pathname])

  return null
}
