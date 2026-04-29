import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Practice Areas",
    links: [
      { label: "Conveyancing", href: "/services/conveyancing" },
      { label: "Family Law", href: "/services/family-law" },
      { label: "Litigation", href: "/services/litigation" },
      { label: "Notarial Services", href: "/services/notarial-services" },
      { label: "Consumer Law", href: "/services/consumer-law" },
      { label: "Labour Law", href: "/services/labour-law" },
      { label: "Insolvency Law", href: "/services/insolvency-law" },
      { label: "Estate Law", href: "/services/estate-law" },
    ],
  },
  {
    title: "Firm",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Case Results", href: "/case-results" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    items: [
      "614-6th Floor Klamson Towers",
      "151 Commissioner Street",
      "Marshaltown, JHB 2001",
      "067 272 7475",
      "info@manattorneys.co.za",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-dark-bg text-white/80">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Red%20Modern%20Law%20Consulting%20Firm%20Logo.png"
                alt="Marshal Ndlovu Attorneys Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-xs">
              Marshal Ndlovu Attorneys Inc. provides lasting legal solutions
              through professional expertise and a holistic, multidisciplinary
              approach across South Africa.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] tracking-[0.22em] uppercase text-tan">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {("links" in col ? col.links : col.items).map((item) => (
                  <li key={typeof item === "string" ? item : item.label}>
                    {typeof item !== "string" && "href" in item ? (
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-tan transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white/70">
                        {item}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Marshal Ndlovu Attorneys Inc. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-tan">
              Privacy
            </a>
            <a href="#terms" className="hover:text-tan">
              Terms
            </a>
            <a href="#cookies" className="hover:text-tan">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
