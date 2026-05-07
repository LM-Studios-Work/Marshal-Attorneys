import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CalendarDays, ChevronRight } from "lucide-react"
import { getPayload } from "payload"

import config from "@payload-config"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ServiceCTA } from "@/components/services/service-cta"
import { TopBar } from "@/components/top-bar"
import {
  type ArticlePost,
  formatPostDate,
  getMediaDoc,
  getMediaSrc,
  getPostExcerpt,
  getPublishedPostsWhere,
} from "@/lib/articles"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Articles | Marshal Ndlovu Attorneys Inc.",
  description:
    "Insights and legal updates from Marshal Ndlovu Attorneys Inc. on South African legal matters, practice areas, and client guidance.",
  openGraph: {
    title: "Insights & Legal Updates | Marshal Ndlovu Attorneys Inc.",
    description:
      "Professional legal updates and practical insights from Marshal Ndlovu Attorneys Inc.",
    type: "website",
    url: "/articles",
  },
}

async function getPosts() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: "posts",
    depth: 2,
    limit: 12,
    sort: "-publishedDate",
    where: getPublishedPostsWhere(),
  })

  return result.docs as unknown as ArticlePost[]
}

export default async function ArticlesPage() {
  const posts = await getPosts()

  return (
    <>
      <TopBar />
      <SiteNav />
      <main className="bg-background">
        <section className="bg-dark-bg text-white overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] min-h-[500px]">
              <div className="flex flex-col justify-center py-20 pr-0 lg:pr-16">
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-white/60 mb-8"
                >
                  <Link href="/" className="hover:text-tan transition-colors">
                    Home
                  </Link>
                  <ChevronRight className="h-3 w-3" aria-hidden />
                  <span className="text-tan">Articles</span>
                </nav>

                <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                  Firm Knowledge
                </p>
                <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] text-white text-balance">
                  Insights & Legal Updates
                </h1>
                <p className="mt-7 text-sm leading-relaxed text-white/70 max-w-xl">
                  Carefully prepared commentary on legal developments, practice
                  area updates, and practical considerations for clients
                  navigating South African law.
                </p>
              </div>

              <div className="relative hidden lg:block min-h-[500px]">
                <Image
                  src="/team/home%20hero%20image.webp"
                  alt="Marshal Ndlovu Attorneys office consultation"
                  fill
                  priority
                  className="object-cover opacity-70"
                  sizes="50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-tan" />
              </div>
            </div>
          </div>
        </section>

        <section id="articles" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
                Latest Articles
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-dark-bg">
                Legal guidance with clarity and discipline.
              </h2>
            </div>

            {posts.length > 0 ? (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const media = getMediaDoc(post.featuredImage)

                  return (
                    <article
                      key={post.id}
                      className="group border border-border/70 bg-white"
                    >
                      <Link
                        href={`/articles/${post.slug}`}
                        className="block"
                        aria-label={`Read ${post.title}`}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-soft-bg">
                          <Image
                            src={getMediaSrc(post.featuredImage)}
                            alt={media?.alt || post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw"
                          />
                        </div>
                        <div className="p-7">
                          <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-dark-bg/55">
                            <CalendarDays className="h-3.5 w-3.5 text-tan" />
                            <time dateTime={post.publishedDate || undefined}>
                              {formatPostDate(post.publishedDate)}
                            </time>
                          </div>
                          <h3 className="mt-4 font-serif text-2xl leading-tight text-dark-bg group-hover:text-tan transition-colors">
                            {post.title}
                          </h3>
                          <p className="mt-4 text-sm leading-7 text-dark-bg/70">
                            {getPostExcerpt(post)}
                          </p>
                          <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-tan">
                            Read Article
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </span>
                        </div>
                      </Link>
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="mt-12 border border-border/70 bg-soft-bg/40 px-8 py-10">
                <p className="font-serif text-2xl text-dark-bg">
                  No articles have been published yet.
                </p>
                <p className="mt-3 text-sm leading-7 text-dark-bg/70">
                  Published posts created in the Payload admin will appear here.
                </p>
              </div>
            )}
          </div>
        </section>

        <ServiceCTA
          eyebrow="Need focused legal guidance?"
          heading="Speak to our team about the issue behind the article."
        />
      </main>
      <SiteFooter />
    </>
  )
}
