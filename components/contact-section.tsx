import Image from "next/image"
import { Play } from "lucide-react"

const steps = [
  { n: 1, label: "Personal\nInformation" },
  { n: 2, label: "Service\nRequested" },
  { n: 3, label: "Contact\nInformation" },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-soft-bg pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
          {/* Form */}
          <div className="bg-background p-8 md:p-12">
            <div className="text-center">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
                Request a consultation today
              </h2>
              <p className="mt-3 text-[11px] tracking-[0.28em] uppercase text-tan">
                Trusted Legal Support
              </p>
            </div>

            {/* Steps */}
            <ol className="mt-10 flex items-start justify-between gap-4 max-w-xl mx-auto">
              {steps.map((s, i) => (
                <li key={s.n} className="flex-1 flex flex-col items-center relative">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute top-4 left-1/2 w-full h-px bg-border"
                    />
                  )}
                  <span
                    className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs ${
                      s.n === 1
                        ? "bg-tan text-white"
                        : "bg-soft-bg text-dark-bg border border-border"
                    }`}
                  >
                    {s.n}
                  </span>
                  <span className="mt-3 text-[10px] tracking-[0.22em] uppercase text-dark-bg/80 whitespace-pre-line text-center leading-relaxed">
                    {s.label}
                  </span>
                </li>
              ))}
            </ol>

            {/* Form fields */}
            <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Name" placeholder="Insert your name" />
              <Field label="Surname" placeholder="Insert your surname" />
              <Field label="Email" type="email" placeholder="Insert your email" />
              <Field label="Your country" placeholder="Country" />
              <Field label="City" placeholder="Your city" />
              <div className="md:col-span-2">
                <label className="block text-[10px] tracking-[0.22em] uppercase text-dark-bg/70 mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Write your message"
                  className="w-full border-b border-dark-bg/20 bg-transparent py-2 text-sm text-dark-bg placeholder:text-muted-foreground/70 focus:outline-none focus:border-tan resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-tan text-white text-[11px] tracking-[0.22em] uppercase py-3.5 hover:bg-dark-bg transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Video */}
          <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden group">
            <Image
              src="/lawyer-working-late-at-desk-with-lamp-cinematic.jpg"
              alt="Lawyer working late in the office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-dark-bg/30" />
            <button
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-dark-bg group-hover:scale-110 transition-transform">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string
  placeholder: string
  type?: string
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.22em] uppercase text-dark-bg/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-dark-bg/20 bg-transparent py-2 text-sm text-dark-bg placeholder:text-muted-foreground/70 focus:outline-none focus:border-tan"
      />
    </div>
  )
}
