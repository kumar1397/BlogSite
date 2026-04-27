import {ArrowLeft, Calendar, BookOpen} from 'lucide-react'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import {sanityClient} from '@/lib/sanity'
import {urlFor} from '@/lib/image'
import {postBySlugQuery} from '@/lib/queries'
import type {Post} from '@/types'

export const revalidate = 60

export default async function BlogPost({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params

  const post: Post | null = await sanityClient.fetch(
    postBySlugQuery,
    {slug},
    {next: {revalidate: 60, tags: ['post']}},
  )

  if (!post) return notFound()

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24 px-6">
        <article className="container mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          {/* Cover image */}
          {post.coverImage && (
            <div className="aspect-2/1 overflow-hidden rounded-xl bg-secondary mb-8">
              <Image
                src={urlFor(post.coverImage).width(1200).height(600).url()}
                alt={post.coverImage.alt || post.title}
                className="w-full h-full object-cover"
                width={1200}
                height={600}
              />
            </div>
          )}

          {/* Meta + title */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {formattedDate && (
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {formattedDate}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} />
                Article
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {post.sections?.map((section) => (
              <section key={section._key} className="space-y-6">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {section.heading}
                  </h2>
                )}

                {section.content && (
                  <div className="prose prose-stone max-w-none">
                    <PortableText value={section.content} />
                  </div>
                )}

                {section.image?.url && (
                  <div className="aspect-2/1 overflow-hidden rounded-xl bg-secondary">
                    <Image
                      src={section.image.url}
                      alt={section.image.alt || ''}
                      className="w-full h-full object-cover"
                      width={1200}
                      height={600}
                    />
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* External link, if present */}
          {post.link && (
            <div className="mt-12 pt-8 border-t border-border">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Visit external link →
              </a>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}