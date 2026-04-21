const phases = [
  {
    number: "01",
    name: "Contractual Phase",
    desc: "Vetting the Offer to Purchase (OTP) and ensuring all suspensive conditions — such as bond approval — are met before progressing.",
  },
  {
    number: "02",
    name: "Compliance Phase",
    desc: "Conducting FICA verification for all parties in accordance with the Financial Intelligence Centre Act to ensure full statutory compliance.",
  },
  {
    number: "03",
    name: "Financial Phase",
    desc: "Calculation and payment of Transfer Duty to SARS and the collection of all transfer costs from the purchaser.",
  },
  {
    number: "04",
    name: "Documentation Phase",
    desc: "Drafting and execution of the formal Power of Attorney and all associated transfer documents required for registration.",
  },
  {
    number: "05",
    name: "Lodgement Phase",
    desc: "Submission of all prepared documents to the relevant Deeds Office for examination by the registrar.",
  },
  {
    number: "06",
    name: "Registration Phase",
    desc: "Final registration of the transfer and any mortgage bonds — resulting in the legal change of ownership.",
  },
]

export function ConveyancingProcess() {
  return (
    <section id="process" className="bg-soft-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              The transfer process
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              Procedural stages, transparently managed
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">
              To provide complete transparency to our clients, every property
              transfer the firm handles follows the same disciplined six-phase
              sequence — from contract vetting through to final registration at
              the Deeds Office.
            </p>
          </div>
        </div>

        {/* Phase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="bg-background p-8 md:p-10 group hover:bg-dark-bg transition-colors"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-serif text-5xl text-dark-bg group-hover:text-tan transition-colors">
                  {phase.number}
                </span>
                <span className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground group-hover:text-white/60 transition-colors">
                  Phase
                </span>
              </div>
              <div className="w-10 h-px bg-tan mb-5" />
              <p className="font-serif text-xl text-dark-bg group-hover:text-white transition-colors">
                {phase.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70 transition-colors">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
