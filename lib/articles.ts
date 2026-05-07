export type MediaDoc = {
  alt?: string | null
  filename?: string | null
  height?: number | null
  id?: number | string
  url?: string | null
  width?: number | null
}

export type UserDoc = {
  email?: string | null
  id?: number | string
  name?: string | null
}

export type ArticlePost = {
  author?: number | string | UserDoc | null
  content?: unknown
  featuredImage?: number | string | MediaDoc | null
  id: number | string
  publishedDate?: string | null
  seo?: {
    metaDescription?: string | null
    metaTitle?: string | null
  } | null
  slug?: string | null
  title: string
}

export const getPublishedPostsWhere = () => ({
  publishedDate: {
    less_than_equal: new Date().toISOString(),
  },
})

export function getMediaDoc(media: ArticlePost["featuredImage"]) {
  if (media && typeof media === "object") {
    return media
  }

  return null
}

export function getMediaSrc(media: ArticlePost["featuredImage"]) {
  const doc = getMediaDoc(media)

  if (doc?.url) {
    return doc.url
  }

  if (doc?.filename) {
    return `/api/media/file/${doc.filename}`
  }

  return "/placeholder.jpg"
}

export function formatPostDate(value?: string | null) {
  if (!value) {
    return "Undated"
  }

  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value))
}

function collectText(node: unknown, parts: string[]) {
  if (!node || typeof node !== "object") {
    return
  }

  const candidate = node as { children?: unknown[]; text?: unknown }

  if (typeof candidate.text === "string") {
    parts.push(candidate.text)
  }

  if (Array.isArray(candidate.children)) {
    candidate.children.forEach((child) => collectText(child, parts))
  }
}

export function getPostExcerpt(post: ArticlePost, limit = 170) {
  const seoDescription = post.seo?.metaDescription?.trim()

  if (seoDescription) {
    return seoDescription
  }

  const parts: string[] = []
  collectText(post.content, parts)
  const text = parts.join(" ").replace(/\s+/g, " ").trim()

  if (text.length <= limit) {
    return text
  }

  return `${text.slice(0, limit).trim()}...`
}

export function getAuthorName(author: ArticlePost["author"]) {
  if (author && typeof author === "object") {
    return author.name || author.email || "Marshal Ndlovu Attorneys Inc."
  }

  return "Marshal Ndlovu Attorneys Inc."
}
