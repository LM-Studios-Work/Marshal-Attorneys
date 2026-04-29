import Link from "next/link"

const leftLinks = [
  { label: "067 272 7475", href: "tel:0672727475" },
  { label: "info@manattorneys.co.za", href: "mailto:info@manattorneys.co.za" },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Marshal-Ndlovu-Attorneys-Inc-61557156562642/",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marshal-ndlovu-81212295/",
    external: true,
  },
]

export function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-dark-bg text-white/80 text-[11px] tracking-[0.18em] uppercase">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-11 flex items-center justify-between">
        <ul className="hidden md:flex items-center gap-0">
          {leftLinks.map((l, i) => (
            <li key={l.label} className="flex items-center">
              <Link
                href={l.href}
                className="px-3 py-1 hover:text-tan transition-colors"
              >
                {l.label}
              </Link>
              {i < leftLinks.length - 1 && (
                <span aria-hidden className="text-tan/70">
                  •
                </span>
              )}
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-0 ml-auto">
          {socialLinks.map((l, i) => (
            <li key={l.label} className="flex items-center">
              {"external" in l && l.external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 hover:text-tan transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  href={l.href}
                  className="px-3 py-1 hover:text-tan transition-colors"
                >
                  {l.label}
                </Link>
              )}
              {i < socialLinks.length - 1 && (
                <span aria-hidden className="text-tan/70">
                  •
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
