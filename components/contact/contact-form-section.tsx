import Image from "next/image"

export function ContactFormSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Left: intro + image */}
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Get in Touch
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              We&apos;d love to hear from you
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-dark-bg/70 text-pretty max-w-md">
              Send us a message and one of our attorneys will respond promptly.
              Every enquiry is treated with care, discretion, and the attention
              your matter deserves.
            </p>

            <div className="mt-10 relative aspect-[4/3] overflow-hidden">
              <Image
                src="/elegant-law-office-interior-with-leather-chairs-an.jpg"
                alt="Interior of Marshal Ndlovu Attorneys' office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/80">
                  Office Hours
                </p>
                <p className="mt-2 font-serif text-xl md:text-2xl text-white">
                  Monday — Friday, 08:30 to 17:00
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-soft-bg p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
              <div className="md:col-span-2">
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="What is this regarding?"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[0.28em] uppercase text-dark-bg/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about your matter"
                  className="w-full border-b border-dark-bg/20 bg-transparent py-2 text-sm text-dark-bg placeholder:text-muted-foreground/70 focus:outline-none focus:border-tan resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 bg-tan text-white text-[11px] tracking-[0.28em] uppercase py-4 hover:bg-dark-bg transition-colors"
                >
                  Send Message
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
