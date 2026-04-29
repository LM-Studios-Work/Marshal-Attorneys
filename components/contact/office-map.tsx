import { PhosphorIcon } from "@/components/services/phosphor-icon"

export function OfficeMap() {
  return (
    <section className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Find Us
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight text-dark-bg text-balance">
              Marshaltown, Johannesburg
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-dark-bg/70 text-pretty">
              Our offices are located in the heart of Johannesburg&apos;s legal
              district, steps from the High Court and Deeds Office.
            </p>

            <address className="mt-8 not-italic">
              <div className="flex items-start gap-3">
                <PhosphorIcon
                  name="MapPin"
                  size={18}
                  weight="bold"
                  color="#b9896a"
                  className="mt-1 flex-none"
                  aria-hidden
                />
                <div className="text-[15px] leading-relaxed text-dark-bg">
                  <p>614-6th Floor Klamson Towers</p>
                  <p>151 Commissioner Street</p>
                  <p>Marshaltown, JHB 2001</p>
                </div>
              </div>
            </address>

            <a
              href="https://maps.google.com/?q=614-6th+Floor+Klamson+Towers+151+Commissioner+Street+Marshaltown+JHB+2001"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center px-8 py-3.5 bg-dark-bg text-white text-[11px] tracking-[0.28em] uppercase hover:bg-tan transition-colors"
            >
              Get Directions
            </a>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden border border-border/60">
            <iframe
              title="Marshal Ndlovu Attorneys office location"
              src="https://www.google.com/maps?q=614-6th+Floor+Klamson+Towers+151+Commissioner+Street+Marshaltown+JHB+2001&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
