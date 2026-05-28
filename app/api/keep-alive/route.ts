import { getPayload } from "payload"

import config from "@payload-config"

export const dynamic = "force-dynamic"

function isAuthorized(request: Request) {
  const cronSecret = process.env.CRON_SECRET

  if (!cronSecret) {
    return true
  }

  const authHeader = request.headers.get("authorization")

  return authHeader === `Bearer ${cronSecret}`
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ status: "Unauthorized" }, { status: 401 })
  }

  try {
    const payload = await getPayload({ config })

    await payload.find({
      collection: "team-members",
      limit: 1,
      pagination: false,
    })

    return Response.json({
      checkedAt: new Date().toISOString(),
      status: "Database pinged successfully",
    })
  } catch (error) {
    console.error("Keep-alive database ping failed", error)

    return Response.json(
      {
        checkedAt: new Date().toISOString(),
        status: "Failed to ping database",
      },
      { status: 500 },
    )
  }
}
