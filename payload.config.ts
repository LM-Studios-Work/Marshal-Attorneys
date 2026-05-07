import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { buildConfig } from "payload"
import sharp from "sharp"
import { fileURLToPath } from "url"

import { Media } from "./collections/Media.js"
import { Posts } from "./collections/Posts.js"
import { TeamMembers } from "./collections/TeamMembers.js"
import { Users } from "./collections/Users.js"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, TeamMembers],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.DATABASE_URL?.includes("supabase") &&
        !process.env.DATABASE_URL.includes("sslmode=")
          ? { rejectUnauthorized: false }
          : undefined,
    },
  }),
  editor: lexicalEditor(),
  secret:
    process.env.PAYLOAD_SECRET ||
    "marshal-ndlovu-attorneys-local-development-secret",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
})
