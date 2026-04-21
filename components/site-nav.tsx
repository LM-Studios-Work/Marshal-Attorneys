import Link from "next/link"
import { Scale } from "lucide-react"

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Prices", href: "#" },
  { label: "Services", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
]

export function SiteNav() {
  return (
    <header className="bg-background border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2 group">
          <Scale className="h-5 w-5 text-tan" aria-hidden />
          <span className="font-serif text-xl tracking-wide text-dark-bg">
            Ashcroft
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[12px] tracking-[0.22em] uppercase text-dark-bg/80">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-tan transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-dark-bg transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}
