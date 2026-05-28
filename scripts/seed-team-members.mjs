import path from "node:path"
import { fileURLToPath } from "node:url"

import nextEnv from "@next/env"
import { getPayload } from "payload"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const rootDir = path.resolve(dirname, "..")

const { loadEnvConfig } = nextEnv

loadEnvConfig(rootDir)

const teamMembers = [
  {
    id: "marshal-ndlovu",
    name: "Marshal Ndlovu",
    role: "Founding Director",
    imagePath: path.join(rootDir, "public", "team", "Marshal.webp"),
    imageAlt: "Marshal Ndlovu",
    sortOrder: 10,
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
    imagePath: path.join(rootDir, "public", "team", "Sinothando Mbatha.jpeg"),
    imageAlt: "Sinothando Mbatha",
    sortOrder: 20,
    bio: "Sinothando Mbatha completed both her Paralegal and Conveyancing courses and promptly began working with various law firms and advocates to refine her practice. She joined our Conveyancing team in 2024, collaborating closely with the Director to establish and sustain an outstanding Conveyancing Department. A major portion of her responsibilities involves preparing all registration documents, including but not limited to bonds, bond cancellations, and transfer documents, for lodgement at the Deeds Office. She has cultivated working relationships with all major South African banks, municipalities, the Master of the High Court, and other relevant partners to ensure rapid turnaround times in all her matters.\n\nWith a solid understanding of court procedures, Sino supports the litigation team by drafting pleadings and applications for court and other alternative dispute resolution forums. She has gained valuable experience serving as an assistant to an Advocate specializing in Commercial Litigation, where she assisted with legal and risk matters, conducted contract reviews, and identified operational improvements to reduce legal exposure and enhance efficiency. She is equally proficient in managing litigation for state-owned entities, prominent corporates, and other clients.\n\nSinothando's approach is grounded in thorough legal research and drafting, strategic problem-solving, and a commitment to maintaining strong client relationships through clear communication and consistently high-quality service.",
  },
  {
    id: "busisiwe-ndlovu",
    name: "Busisiwe Ndlovu",
    role: "Second Year Candidate Attorney",
    imagePath: path.join(rootDir, "public", "team", "Busisiwe Ndlovu.jpeg"),
    imageAlt: "Busisiwe Ndlovu",
    sortOrder: 30,
    bio: "Busisiwe Ndlovu is an aspiring legal professional who is passionate about justice and committed to making a positive impact in the legal field. She studied for her LLB degree at the University of South Africa and graduated in 2023. Having worked with a few firms during her studies, she gained valuable practical experience in many legal practice areas. She is very inquisitive, meticulous, and consistent in her deliverables. She thrives both independently and collaboratively, demonstrating adaptability and a strong work ethic. Motivated by a deep desire to address injustices and promote social justice, she often volunteers and participates in community outreach programs. Currently, at Marshal Ndlovu Attorneys Inc., Busisiwe contributes enthusiastically and professionally to diverse legal matters. With her diverse background and unwavering commitment, she is well positioned to make a meaningful and lasting impact in the legal profession generally.",
  },
]

async function findMedia(payload, alt) {
  const result = await payload.find({
    collection: "media",
    limit: 1,
    where: {
      alt: {
        equals: alt,
      },
    },
  })

  return result.docs[0] || null
}

async function upsertMedia(payload, member) {
  const existing = await findMedia(payload, member.imageAlt)

  if (existing) {
    return existing
  }

  return payload.create({
    collection: "media",
    data: {
      alt: member.imageAlt,
    },
    filePath: member.imagePath,
    overwriteExistingFiles: true,
  })
}

async function upsertTeamMember(payload, member, imageId) {
  const existing = await payload.find({
    collection: "team-members",
    limit: 1,
    where: {
      name: {
        equals: member.name,
      },
    },
  })

  const data = {
    bio: member.bio,
    expertise: member.expertise?.map((item) => ({ item })) || [],
    image: imageId,
    isActive: true,
    name: member.name,
    role: member.role,
    sortOrder: member.sortOrder,
  }

  if (existing.docs[0]) {
    return payload.update({
      id: existing.docs[0].id,
      collection: "team-members",
      data,
    })
  }

  return payload.create({
    collection: "team-members",
    data,
  })
}

console.log("Loading Payload config")
const { default: config } = await import("../payload.config.ts")
const payload = await getPayload({ config })
console.log("Connected to Payload")

for (const member of teamMembers) {
  const media = await upsertMedia(payload, member)
  const teamMember = await upsertTeamMember(payload, member, media.id)
  console.log(`Seeded ${teamMember.name}`)
}

const result = await payload.find({
  collection: "team-members",
  limit: 50,
  sort: "sortOrder",
  where: {
    isActive: {
      equals: true,
    },
  },
})

console.log(`Active team members: ${result.totalDocs}`)
process.exit(0)
