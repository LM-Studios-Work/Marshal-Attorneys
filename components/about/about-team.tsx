import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export type TeamMemberCard = {
  bio: string
  expertise?: string[]
  id: number | string
  image: string
  name: string
  role: string
}

export const fallbackTeamMembers: TeamMemberCard[] = [
  {
    id: "marshal-ndlovu",
    name: "Marshal Ndlovu",
    role: "Founding Director",
    image: "/team/Marshal.webp",
    bio: "Marshal Ndlovu is a specialist property lawyer, corporate, and commercial attorney with over 8 years of progressive legal experience, including 6 years pre-admission and 2 years post-admission. He has substantial experience in providing strategic leadership and senior decision-making, as well as conceptualizing, managing, and coordinating programs and projects. Over his 8-year career with various entities, he has accumulated significant leadership, management, and technical experience in the legal sector. Marshal is a highly driven problem solver, motivator, and communicator.",
    expertise: [
      "Conveyancing and Real Estate Investments: Managing property transactions and advising on real estate investments.",
      "Notarial Services: Providing notarial acts and services.",
      "General High Court Litigation and Arbitrations: Representing clients in high court matters and arbitrations before the Arbitration Foundation of Southern Africa.",
      "Commercial Contracts: Drafting, reviewing, and advising on commercial contracts.",
      "Development Planning Law: Advising on legal aspects of development planning.",
      "Company Law: Offering advice on company law matters and corporate governance.",
      "Construction Law: Handling legal issues related to construction projects.",
      "Labour and Employment Law: Advising and representing clients in employment and labour-related matters.",
      "POPI Act Compliance: Ensuring compliance with the Protection of Personal Information Act.",
      "Legal Opinions and Reports: Drafting legal opinions, conducting due diligence, and preparing investigative reports.",
      "Representation in Various Forums: Providing legal representation at the CCMA, Bargaining Councils, Labour Courts, Labour Appeal Court, High Courts, the Supreme Court of Appeal, and the Constitutional Court.",
    ],
  },
  {
    id: "sinothando-mbatha",
    name: "Sinothando Mbatha",
    role: "Litigation and Conveyancing Secretary",
    image: "/team/Sinothando Mbatha.jpeg",
    bio: "Sinothando Mbatha completed both her Paralegal and Conveyancing courses and promptly began working with various law firms and advocates to refine her practice. She joined our Conveyancing team in 2024, collaborating closely with the Director to establish and sustain an outstanding Conveyancing Department. A major portion of her responsibilities involves preparing all registration documents, including but not limited to bonds, bond cancellations, and transfer documents, for lodgement at the Deeds Office. She has cultivated working relationships with all major South African banks, municipalities, the Master of the High Court, and other relevant partners to ensure rapid turnaround times in all her matters.\n\nWith a solid understanding of court procedures, Sino supports the litigation team by drafting pleadings and applications for court and other alternative dispute resolution forums. She has gained valuable experience serving as an assistant to an Advocate specializing in Commercial Litigation, where she assisted with legal and risk matters, conducted contract reviews, and identified operational improvements to reduce legal exposure and enhance efficiency. She is equally proficient in managing litigation for state-owned entities, prominent corporates, and other clients.\n\nSinothando's approach is grounded in thorough legal research and drafting, strategic problem-solving, and a commitment to maintaining strong client relationships through clear communication and consistently high-quality service.",
  },
  {
    id: "busisiwe-ndlovu",
    name: "Busisiwe Ndlovu",
    role: "Second Year Candidate Attorney",
    image: "/team/Busisiwe Ndlovu.jpeg",
    bio: "Busisiwe Ndlovu is an aspiring legal professional who is passionate about justice and committed to making a positive impact in the legal field. She studied for her LLB degree at the University of South Africa and graduated in 2023. Having worked with a few firms during her studies, she gained valuable practical experience in many legal practice areas. She is very inquisitive, meticulous, and consistent in her deliverables. She thrives both independently and collaboratively, demonstrating adaptability and a strong work ethic. Motivated by a deep desire to address injustices and promote social justice, she often volunteers and participates in community outreach programs. Currently, at Marshal Ndlovu Attorneys Inc., Busisiwe contributes enthusiastically and professionally to diverse legal matters. With her diverse background and unwavering commitment, she is well positioned to make a meaningful and lasting impact in the legal profession generally.",
  },
]

function getDialogDescriptionId(name: string) {
  return `${name.toLowerCase().replace(/\s+/g, "-")}-bio`
}

export function AboutTeam({ teamMembers }: { teamMembers: TeamMemberCard[] }) {
  return (
    <section id="team" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
            Meet our team
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
            The professionals behind the firm
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            At Marshal Ndlovu Attorneys Inc., our team is dedicated to
            delivering exceptional legal services. Get to know the professionals
            who bring expertise, dedication, and a client-focused approach to
            every case.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Dialog key={member.id}>
              <div className="group">
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-soft-bg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/20 transition-colors duration-300" />
                </div>

                {/* Info */}
                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <p className="font-serif text-xl text-dark-bg">
                      {member.name}
                    </p>
                    <p className="mt-1 text-xs tracking-[0.18em] uppercase text-tan">
                      {member.role}
                    </p>
                  </div>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="mt-1 shrink-0 text-[11px] tracking-[0.18em] uppercase text-tan transition-colors border-b border-tan pb-px hover:text-dark-bg hover:border-dark-bg/40"
                    >
                      Meet Team
                    </button>
                  </DialogTrigger>
                </div>

                <DialogContent
                  className="max-h-[calc(100svh-2rem)] w-[calc(100vw-2rem)] overflow-hidden border-border bg-background p-0 sm:max-w-4xl"
                  aria-describedby={getDialogDescriptionId(member.name)}
                >
                  <div className="grid max-h-[calc(100svh-2rem)] min-h-0 gap-0 md:h-[560px] md:grid-cols-[minmax(260px,0.78fr)_1fr]">
                    <div className="relative hidden h-full bg-soft-bg md:block">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center top" }}
                        sizes="280px"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-tan" />
                    </div>
                    <div className="max-h-[calc(100svh-2rem)] min-h-0 overflow-y-auto overscroll-contain p-7 md:h-full md:p-9">
                      <DialogHeader>
                        <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                          Team profile
                        </p>
                        <DialogTitle className="font-serif text-3xl font-normal leading-tight text-dark-bg">
                          {member.name}
                        </DialogTitle>
                        <p className="text-xs tracking-[0.18em] uppercase text-tan">
                          {member.role}
                        </p>
                      </DialogHeader>
                      <div className="my-6 h-px w-16 bg-tan" />
                      <DialogDescription
                        asChild
                        id={getDialogDescriptionId(member.name)}
                        className="text-muted-foreground"
                      >
                        <div className="space-y-5 text-sm leading-relaxed">
                          {member.bio
                            .split(/\n\s*\n/)
                            .map((paragraph) => paragraph.trim())
                            .filter(Boolean)
                            .map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          {member.expertise?.length ? (
                            <div>
                              <h3 className="font-serif text-xl font-normal text-dark-bg">
                                Areas of Expertise
                              </h3>
                              <ul className="mt-3 space-y-2">
                                {member.expertise.map((item) => (
                                  <li key={item} className="border-l border-tan pl-4">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </div>
                      </DialogDescription>
                    </div>
                  </div>
                </DialogContent>
              </div>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
