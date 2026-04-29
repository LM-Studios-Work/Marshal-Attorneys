import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone } from "lucide-react"

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Marshal-Ndlovu-Attorneys-Inc-61557156562642/",
    Icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marshal-ndlovu-81212295/",
    Icon: Linkedin,
  },
]

export function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-dark-bg text-white/80 text-[11px] tracking-[0.18em] uppercase">
      <div className="mx-auto max-w-[1400px] px-4 md:px-10 h-11 flex items-center justify-between gap-3">
        {/* Left: contact info */}
        <ul className="flex items-center">
          <li className="flex items-center">
            <Link
              href="tel:0672727475"
              className="flex items-center gap-2 px-2 md:px-3 py-1 hover:text-tan transition-colors"
              aria-label="Call 067 272 7475"
            >
              <Phone className="h-3.5 w-3.5 md:hidden" aria-hidden />
              <span>067 272 7475</span>
            </Link>
          </li>
          <li className="hidden md:flex items-center">
            <span aria-hidden className="text-tan/70">
              •
            </span>
            <Link
              href="mailto:info@manattorneys.co.za"
              className="flex items-center gap-2 px-3 py-1 normal-case tracking-normal hover:text-tan transition-colors"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden />
              <span>info@manattorneys.co.za</span>
            </Link>
          </li>
        </ul>

        {/* Right: socials — text + icon on desktop, icon-only on mobile */}
        <ul className="flex items-center">
          {socialLinks.map(({ label, href, Icon }, i) => (
            <li key={label} className="flex items-center">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 px-2 md:px-3 py-1 hover:text-tan transition-colors"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                <span className="hidden md:inline">{label}</span>
              </a>
              {i < socialLinks.length - 1 && (
                <span aria-hidden className="hidden md:inline text-tan/70">
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
