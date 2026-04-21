"use client"

import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"

const services = [
  "Conveyancing",
  "Family Law",
  "Litigation",
  "Notarial Services",
  "Consumer Law",
  "Labour Law",
  "Insolvency Law",
  "Estate Law",
]

export function ConsultationFormSection() {
  const [service, setService] = useState<string>("")
  const [open, setOpen] = useState(false)

  return (
    <section className="bg-soft-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left: pitch card */}
          <div className="bg-dark-bg text-white p-10 md:p-12 lg:sticky lg:top-8">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Request a Consultation
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
              Take the first step toward the right solution
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/70 text-pretty">
              Whether you have a complex legal issue or need straightforward
              advice, we&apos;re here to help. Request a consultation today and
              one of our attorneys will be in touch to discuss your matter in
              confidence.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Confidential initial assessment",
                "Tailored multidisciplinary approach",
                "Nationwide reach across South Africa",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center bg-tan">
                    <Check className="h-3 w-3 text-white" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[10px] tracking-[0.28em] uppercase text-tan">
                Direct Line
              </p>
              <a
                href="tel:+27672727475"
                className="mt-2 block font-serif text-2xl text-white hover:text-tan transition-colors"
              >
                067 272 7475
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-background p-8 md:p-12">
            <h3 className="font-serif text-2xl md:text-3xl text-dark-bg">
              Consultation Request
            </h3>
            <p className="mt-2 text-sm text-dark-bg/60">
              Fields marked are all required. We respond within one business day.
            </p>

            <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
              <Field
                label="Name & Surname"
                name="fullname"
                placeholder="e.g. Thandi Mokoena"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />

              {/* Service dropdown */}
              <div className="md:col-span-2 relative">
                <label
                  htmlFor="service"
                  className="block text-[10px] tracking-[0.28em] uppercase text-dark-bg/70 mb-2"
                >
                  Service
                </label>
                <button
                  id="service"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={open}
                  onClick={() => setOpen((o) => !o)}
                  className="w-full flex items-center justify-between border-b border-dark-bg/20 bg-transparent py-2 text-sm text-left text-dark-bg hover:border-tan focus:outline-none focus:border-tan"
                >
                  <span className={service ? "text-dark-bg" : "text-muted-foreground/70"}>
                    {service || "Select a practice area"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-dark-bg/60 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {open && (
                  <ul
                    role="listbox"
                    className="absolute left-0 right-0 top-full mt-1 z-20 bg-background border border-border shadow-lg max-h-72 overflow-auto"
                  >
                    {services.map((s) => (
                      <li key={s}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={service === s}
                          onClick={() => {
                            setService(s)
                            setOpen(false)
                          }}
                          className={`w-full text-left px-5 py-3 text-sm transition-colors ${
                            service === s
                              ? "bg-soft-bg text-dark-bg"
                              : "text-dark-bg/80 hover:bg-soft-bg hover:text-dark-bg"
                          }`}
                        >
                          {s}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <input type="hidden" name="service" value={service} />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="consult-message"
                  className="block text-[10px] tracking-[0.28em] uppercase text-dark-bg/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="consult-message"
                  name="message"
                  rows={5}
                  placeholder="Briefly describe your situation"
                  className="w-full border-b border-dark-bg/20 bg-transparent py-2 text-sm text-dark-bg placeholder:text-muted-foreground/70 focus:outline-none focus:border-tan resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 bg-tan text-white text-[11px] tracking-[0.28em] uppercase py-4 hover:bg-dark-bg transition-colors"
                >
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string
  name: string
  placeholder: string
  type?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] tracking-[0.28em] uppercase text-dark-bg/70 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-dark-bg/20 bg-transparent py-2 text-sm text-dark-bg placeholder:text-muted-foreground/70 focus:outline-none focus:border-tan"
      />
    </div>
  )
}
