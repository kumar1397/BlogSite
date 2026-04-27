import {ArrowLeft, Calendar, ExternalLink, Briefcase} from 'lucide-react'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import {sanityClient} from '@/lib/sanity'
import {urlFor} from '@/lib/image'
import {projectBySlugQuery} from '@/lib/queries'
import type {Project} from '@/types'

export const revalidate = 60

export default async function ProjectPage({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params

  const project: Project | null = await sanityClient.fetch(
    projectBySlugQuery,
    {slug},
    {next: {revalidate: 60, tags: ['post']}},
  )

  if (!project) return notFound()

  const formattedDate = project.publishedAt
    ? new Date(project.publishedAt).toLocaleDateString('en-US', {
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
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          {/* Cover image */}
          {project.coverImage && (
            <div className="aspect-2/1 overflow-hidden rounded-xl bg-secondary mb-8">
              <Image
                src={urlFor(project.coverImage).width(1200).height(600).url()}
                alt={project.coverImage.alt || project.title}
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
                <Briefcase size={14} />
                Project
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground">
              {project.title}
            </h1>

            {project.description && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* External link as primary CTA up top — projects often want this prominent */}
            {project.link && (
              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-border bg-card px-5 py-2.5 text-sm font-medium shadow-[4px_4px_0_0_var(--color-border)] transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                >
                  View live project
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {project.sections?.map((section) => (
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
        </article>
      </main>
    </div>
  )
}