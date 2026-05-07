import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { RichText } from "@payloadcms/richtext-lexical/react"
import { ArrowLeft, ArrowUpRight, CalendarDays, ChevronRight, UserRound } from "lucide-react"
import { getPayload } from "payload"

import config from "@payload-config"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ServiceCTA } from "@/components/services/service-cta"
import { TopBar } from "@/components/top-bar"
import {
  type ArticlePost,
  formatPostDate,
  getAuthorName,
  getMediaDoc,
  getMediaSrc,
  getPostExcerpt,
  getPublishedPostsWhere,
} from "@/lib/articles"

export const dynamic = "force-dynamic"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

async function getPost(slug: string) {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: "posts",
    depth: 2,
    limit: 1,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        getPublishedPostsWhere(),
      ],
    },
  })

  return (result.docs[0] || null) as unknown as ArticlePost | null
}

async function getRelatedPosts(currentPost: ArticlePost) {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: "posts",
    depth: 2,
    limit: 3,
    sort: "-publishedDate",
    where: {
      and: [
        getPublishedPostsWhere(),
        {
          slug: {
            not_equals: currentPost.slug,
          },
        },
      ],
    },
  })

  return result.docs as unknown as ArticlePost[]
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: "Article Not Found | Marshal Ndlovu Attorneys Inc.",
    }
  }

  const media = getMediaDoc(post.featuredImage)
  const title = post.seo?.metaTitle || `${post.title} | Marshal Ndlovu Attorneys Inc.`
  const description = post.seo?.metaDescription || getPostExcerpt(post, 155)
  const image = getMediaSrc(post.featuredImage)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/articles/${post.slug}`,
      publishedTime: post.publishedDate || undefined,
      authors: [getAuthorName(post.author)],
      images: [
        {
          url: image,
          alt: media?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const media = getMediaDoc(post.featuredImage)
  const relatedPosts = await getRelatedPosts(post)

  return (
    <>
      <TopBar />
      <SiteNav />
      <main className="bg-background">
        <article>
          <header className="bg-dark-bg text-white">
            <div className="mx-auto max-w-[1120px] px-6 md:px-10 py-16 md:py-24">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-white/60 mb-8"
              >
                <Link href="/" className="hover:text-tan transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3" aria-hidden />
                <Link href="/articles" className="hover:text-tan transition-colors">
                  Articles
                </Link>
                <ChevronRight className="h-3 w-3" aria-hidden />
                <span className="text-tan">Article</span>
              </nav>

              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                Legal Insight
              </p>
              <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.06] text-white text-balance">
                {post.title}
              </h1>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 text-[11px] tracking-[0.18em] uppercase text-white/60">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5 text-tan" />
                  <time dateTime={post.publishedDate || undefined}>
                    {formatPostDate(post.publishedDate)}
                  </time>
                </span>
                <span className="hidden sm:block h-1 w-1 rounded-full bg-tan/80" />
                <span className="inline-flex items-center gap-2">
                  <UserRound className="h-3.5 w-3.5 text-tan" />
                  {getAuthorName(post.author)}
                </span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1120px] px-6 md:px-10">
            <div className="relative -mt-10 md:-mt-14 aspect-[16/9] overflow-hidden bg-soft-bg">
              <Image
                src={getMediaSrc(post.featuredImage)}
                alt={media?.alt || post.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1120px) 1040px, 100vw"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[820px] px-6 md:px-10 py-14 md:py-20">
            <RichText className="article-rich-text" data={post.content as never} />

            <div className="mt-14 border-t border-border pt-8">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-tan hover:text-dark-bg transition-colors"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to Articles
              </Link>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="bg-soft-bg/45 py-16 md:py-20">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                    Related Posts
                  </p>
                  <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight text-dark-bg">
                    Continue reading.
                  </h2>
                </div>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-tan hover:text-dark-bg transition-colors"
                >
                  View All
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => {
                  const relatedMedia = getMediaDoc(relatedPost.featuredImage)

                  return (
                    <article
                      key={relatedPost.id}
                      className="group bg-white border border-border/70"
                    >
                      <Link href={`/articles/${relatedPost.slug}`} className="block">
                        <div className="relative aspect-[4/3] overflow-hidden bg-soft-bg">
                          <Image
                            src={getMediaSrc(relatedPost.featuredImage)}
                            alt={relatedMedia?.alt || relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(min-width: 768px) 31vw, 100vw"
                          />
                        </div>
                        <div className="p-6">
                          <p className="text-[11px] tracking-[0.18em] uppercase text-dark-bg/55">
                            {formatPostDate(relatedPost.publishedDate)}
                          </p>
                          <h3 className="mt-3 font-serif text-xl leading-tight text-dark-bg group-hover:text-tan transition-colors">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </Link>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        <ServiceCTA
          eyebrow="Need legal clarity?"
          heading="Discuss your matter with Marshal Ndlovu Attorneys Inc."
        />
      </main>
      <SiteFooter />
    </>
  )
}
