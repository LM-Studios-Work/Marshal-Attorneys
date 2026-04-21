"use client"

import Link from "next/link"
import { Scale, ChevronDown } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Conveyancing", href: "/services/conveyancing" },
      { label: "Family Law", href: "/services/family-law" },
      { label: "Litigation", href: "/services/litigation" },
      { label: "Labour Law", href: "/services/labour-law" },
      { label: "Estate Law", href: "/services/estate-law" },
    ],
  },
  { label: "Our Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export function SiteNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-background border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2 group">
          <Scale className="h-5 w-5 text-tan" aria-hidden />
          <span className="font-serif text-xl tracking-wide text-dark-bg">
            MN Attorneys
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[12px] tracking-[0.22em] uppercase text-dark-bg/80">
            {navItems.map((item) => {
              const hasSubmenu = "submenu" in item && item.submenu
              return (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =>
                    hasSubmenu && setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="hover:text-tan transition-colors"
                    >
                      {item.label}
                    </Link>
                    {hasSubmenu && (
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    )}
                  </div>

                  {hasSubmenu && (
                    <div className="absolute top-full left-0 mt-0 min-w-max bg-background border border-border/60 rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase text-dark-bg/80 hover:bg-soft-bg hover:text-tan transition-colors border-b border-border/30 last:border-b-0"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-dark-bg transition-colors"
        >
          Free Consultation
        </Link>
      </div>
    </header>
  )
}
