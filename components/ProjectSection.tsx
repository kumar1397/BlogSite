import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import {sanityClient} from '@/lib/sanity'
import {postsQuery} from '@/lib/queries'
import {Post, Project} from '@/types'
import {urlFor} from '@/lib/image'

export const revalidate = 60
const INITIAL_COUNT = 4

export default async function ProjectsSection() {
  const posts: Post[] = await sanityClient.fetch(
    postsQuery,
    {},
    {next: {revalidate: 60, tags: ['post']}},
  )

  const financePosts = posts.filter((post): post is Project => post.category === 'finance')
  const visible = financePosts.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-display text-3xl font-bold">Projects</h2>
        <Link href="/projects" className="text-sm underline underline-offset-4 hover:text-accent">
          View all →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {financePosts.length === 0 ? (
          <div className="col-span-full window p-8 text-center">
            <p className="font-mono text-sm text-foreground/60">No projects yet</p>
          </div>
        ) : (
          visible.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project._id}>
              <div className="window h-full rounded-none">
                <div className="halftone aspect-[16/9] overflow-hidden border-b-2 border-border bg-muted">
                  {project.coverImage && (
                    <img
                      src={urlFor(project.coverImage).width(800).height(500).url()}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover contrast-110 saturate-50"
                    />
                  )}
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {project.description}
                  </p>
                  <p className="mt-2 inline-block text-sm underline decoration-accent decoration-2 underline-offset-4">
                    View project →
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {financePosts.length > INITIAL_COUNT && (
        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded border-2 border-border bg-card px-5 py-2.5 font-medium shadow-[4px_4px_0_0_var(--color-border)] transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  )
}