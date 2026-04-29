"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
      { label: "Notarial Services", href: "/services/notarial-services" },
      { label: "Consumer Law", href: "/services/consumer-law" },
      { label: "Labour Law", href: "/services/labour-law" },
      { label: "Insolvency Law", href: "/services/insolvency-law" },
      { label: "Estate Law", href: "/services/estate-law" },
    ],
  },
  { label: "Our Team", href: "/about#team" },
  { label: "Who Do I Talk To", href: "/who-do-i-talk-to" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Lock body scroll while drawer open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-11 z-50 bg-background border-b border-border/60 shadow-sm">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/Red%20Modern%20Law%20Consulting%20Firm%20Logo.png"
            alt="Marshal Ndlovu Attorneys Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[12px] tracking-[0.22em] uppercase text-dark-bg/80">
            {navItems.map((item) => {
              const hasSubmenu = "submenu" in item && item.submenu;
              return (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => hasSubmenu && setOpenDropdown(item.label)}
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
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-dark-bg transition-colors"
        >
          Free Consultation
        </Link>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 -mr-2 text-tan hover:text-tan-hover transition-colors"
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </div>

      {/* Mobile drawer */}
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setMobileOpen(false)}
        className={`lg:hidden fixed inset-0 z-[60] bg-dark-bg/40 transition-opacity duration-200 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <aside
        id="mobile-nav-drawer"
        aria-hidden={!mobileOpen}
        className={`lg:hidden fixed top-0 right-0 z-[70] h-[100dvh] w-[85%] max-w-sm bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-border/60">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <Image
              src="/Red%20Modern%20Law%20Consulting%20Firm%20Logo.png"
              alt="Marshal Ndlovu Attorneys Logo"
              width={36}
              height={36}
              className="h-9 w-auto"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center h-11 w-11 -mr-2 text-dark-bg hover:text-tan transition-colors"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const hasSubmenu = "submenu" in item && item.submenu;
              if (!hasSubmenu) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3.5 text-[13px] tracking-[0.22em] uppercase text-dark-bg/85 hover:text-tan border-b border-border/40 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.label} className="border-b border-border/40">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 block px-4 py-3.5 text-[13px] tracking-[0.22em] uppercase text-dark-bg/85 hover:text-tan transition-colors"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`${
                        mobileServicesOpen ? "Collapse" : "Expand"
                      } ${item.label} submenu`}
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="px-4 py-3.5 text-dark-bg/70 hover:text-tan transition-colors"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                  </div>
                  <ul
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      mobileServicesOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <li className="overflow-hidden">
                      <div className="bg-soft-bg/60">
                        {item.submenu!.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-8 py-3 text-[11px] tracking-[0.22em] uppercase text-dark-bg/75 hover:text-tan border-b border-border/30 last:border-b-0 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-5 border-t border-border/60">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-dark-bg transition-colors"
          >
            Free Consultation
          </Link>
        </div>
      </aside>
    </header>
  );
}
