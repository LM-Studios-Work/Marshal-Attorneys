const testimonials = [
  {
    quote:
      "Marshal Ndlovu Attorneys Inc. made the process of buying our first home seamless and stress-free. Their professionalism and attention to detail were outstanding. Highly recommended!",
    rating: 4,
    area: "Conveyancing",
  },
  {
    quote:
      "I was impressed with the level of dedication shown by the team during my divorce proceedings. They handled everything with care and sensitivity, ensuring a fair outcome.",
    rating: 3,
    area: "Family Law",
  },
  {
    quote:
      "The firm provided exceptional service in drafting our antenuptial contract. Their clear communication and expertise gave us peace of mind.",
    rating: 3,
    area: "Notarial Services",
  },
  {
    quote:
      "When my business faced legal challenges, Marshal Ndlovu Attorneys Inc. was there to guide us through complex litigation. Their strategic approach and commitment to our case were remarkable.",
    rating: 4,
    area: "Litigation",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < rating ? "text-tan" : "text-tan/30"}
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function CaseResultsTestimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-8 bg-tan" />
          <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
            What our clients say
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-background p-10 md:p-12 flex flex-col gap-6 group hover:bg-soft-bg transition-colors duration-300"
            >
              {/* Quote mark */}
              <span className="font-serif text-6xl leading-none text-tan/20 select-none" aria-hidden="true">
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="font-serif text-xl md:text-2xl leading-snug text-dark-bg text-balance -mt-6">
                {t.quote}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                <StarRating rating={t.rating} />
                <span className="text-[11px] tracking-[0.22em] uppercase text-tan">
                  {t.area}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
