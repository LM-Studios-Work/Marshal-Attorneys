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
    bio: "Sinothando Mbatha supports the firm's litigation and conveyancing departments with disciplined file management, client communication, and administrative coordination. Her role helps ensure that matters are handled with accuracy, responsiveness, and consistent attention to detail from instruction through completion.",
  },
  {
    id: "busisiwe-ndlovu",
    name: "Busisiwe Ndlovu",
    role: "Second Year Candidate Attorney",
    image: "/team/Busisiwe Ndlovu.jpeg",
    bio: "Busisiwe Ndlovu is a Second Year Candidate Attorney who assists with legal research, drafting, consultations, and matter preparation across the firm's practice areas. She brings diligence, professionalism, and a developing command of legal procedure to the support she provides to clients and the firm.",
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
                  <div className="grid max-h-[calc(100svh-2rem)] gap-0 md:h-[560px] md:grid-cols-[minmax(260px,0.78fr)_1fr]">
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
                    <div className="max-h-[calc(100svh-2rem)] overflow-y-auto p-7 md:h-full md:p-9">
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
                          <p>{member.bio}</p>
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
