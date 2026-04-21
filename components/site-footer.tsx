import Link from "next/link"
import { Scale } from "lucide-react"

const columns = [
  {
    title: "Practice",
    items: ["Litigation", "Mediation", "Compliance", "Advisory"],
  },
  {
    title: "Firm",
    items: ["About", "Team", "Careers", "Press"],
  },
  {
    title: "Contact",
    items: ["Miami Office", "New York Office", "+1 (305) 555-0110", "hello@ashcroft.law"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-dark-bg text-white/80">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-tan" aria-hidden />
              <span className="font-serif text-xl text-white">Ashcroft</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-xs">
              A boutique law firm built on expertise, trust, and unwavering
              dedication to outstanding results.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] tracking-[0.22em] uppercase text-tan">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {col.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-tan transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Ashcroft & Vale. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-tan">Privacy</Link>
            <Link href="#" className="hover:text-tan">Terms</Link>
            <Link href="#" className="hover:text-tan">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
