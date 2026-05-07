import type { Metadata } from "next"
import { getPayload } from "payload"

import config from "@payload-config"
import { TopBar } from "@/components/top-bar"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStats } from "@/components/about/about-stats"
import { AboutOverview } from "@/components/about/about-overview"
import { AboutMission } from "@/components/about/about-mission"
import {
  AboutTeam,
  fallbackTeamMembers,
  type TeamMemberCard,
} from "@/components/about/about-team"
import { AboutServicesChart } from "@/components/about/about-services-chart"
import { AboutMilestones } from "@/components/about/about-milestones"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "About Us | Marshal Ndlovu Attorneys Inc.",
  description:
    "Learn about Marshal Ndlovu Attorneys Inc., a well-established boutique firm offering a full range of corporate and commercial legal services across South Africa.",
}

type MediaDoc = {
  filename?: string | null
  url?: string | null
}

type TeamMemberDoc = {
  bio?: string | null
  expertise?: { item?: string | null }[] | null
  id: number | string
  image?: number | string | MediaDoc | null
  name?: string | null
  role?: string | null
}

function getMediaSrc(media: TeamMemberDoc["image"]) {
  if (media && typeof media === "object") {
    if (media.url) {
      return media.url
    }

    if (media.filename) {
      return `/api/media/file/${media.filename}`
    }
  }

  return "/placeholder-user.jpg"
}

async function getTeamMembers(): Promise<TeamMemberCard[]> {
  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: "team-members",
      depth: 1,
      limit: 50,
      sort: "sortOrder",
      where: {
        isActive: {
          equals: true,
        },
      },
    })

    const teamMembers = (result.docs as unknown as TeamMemberDoc[])
      .filter((member) => member.name && member.role && member.bio)
      .map((member) => ({
        bio: member.bio || "",
        expertise:
          member.expertise
            ?.map((entry) => entry.item?.trim())
            .filter((item): item is string => Boolean(item)) || [],
        id: member.id,
        image: getMediaSrc(member.image),
        name: member.name || "",
        role: member.role || "",
      }))

    return teamMembers.length > 0 ? teamMembers : fallbackTeamMembers
  } catch (error) {
    console.error("Failed to load team members from Payload", error)
    return fallbackTeamMembers
  }
}

export default async function AboutPage() {
  const teamMembers = await getTeamMembers()

  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <AboutHero />
        <AboutStats />
        <AboutOverview />
        <AboutMission />
        <AboutTeam teamMembers={teamMembers} />
        <AboutServicesChart />
        <AboutMilestones />
      </main>
      <SiteFooter />
    </>
  )
}
