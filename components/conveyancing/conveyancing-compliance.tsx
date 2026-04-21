import { ShieldCheck, Receipt, Check } from "lucide-react"

const fica = [
  "Rigorous identity verification for all parties",
  "Address verification & supporting documentation",
  "Source of funds and beneficial-ownership checks",
  "Compliance with the Financial Intelligence Centre Act",
]

const sars = [
  "Submission of transfer duty declarations to SARS",
  "Calculation of transfer duty payable",
  "Collection and settlement of all tax obligations",
  "Confirmation prior to lodgement at the Deeds Office",
]

export function ConveyancingCompliance() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
            Statutory compliance
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
            Built on regulatory rigour
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Every transfer we handle is underpinned by full compliance with
            South African statutory and tax obligations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FICA card */}
          <article className="bg-dark-bg text-white p-10 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 bg-tan/15 flex items-center justify-center">
                <ShieldCheck
                  className="h-5 w-5 text-tan"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                FICA Compliance
              </p>
            </div>
            <h3 className="font-serif text-3xl leading-tight text-balance">
              Identity, address &amp; source-of-funds verification
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              In accordance with the Financial Intelligence Centre Act, we
              perform rigorous identity and address verification on all parties
              to prevent illicit financial activity and ensure the integrity of
              every transaction.
            </p>
            <ul className="mt-8 space-y-4 border-t border-white/15 pt-8">
              {fica.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-tan/20 text-tan">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* SARS card */}
          <article className="bg-soft-bg text-dark-bg p-10 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 bg-tan/15 flex items-center justify-center">
                <Receipt
                  className="h-5 w-5 text-tan"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                SARS &amp; Transfer Duty
              </p>
            </div>
            <h3 className="font-serif text-3xl leading-tight text-balance">
              Tax obligations settled before registration
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We manage the full submission of transfer duty declarations to
              the South African Revenue Service and ensure that all tax
              obligations are settled before the property is registered at the
              Deeds Office.
            </p>
            <ul className="mt-8 space-y-4 border-t border-dark-bg/15 pt-8">
              {sars.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-tan/20 text-tan">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-dark-bg/85">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
