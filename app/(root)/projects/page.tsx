import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { sanityClient } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import { Project, Post } from "@/types";
import { urlFor } from "@/lib/image";

export const revalidate = 60;

export default async function AllProjects() {
  const posts = await sanityClient.fetch(
    postsQuery,
    {},
    {
      next: {
        revalidate: 60,
        tags: ["post"],
      },
    },
  );
  const financePosts = posts.filter((post: Post) => post.category === "finance");

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <h1 className="mb-2 font-display text-5xl font-bold">Projects</h1>
        <p className="mb-10 max-w-xl text-foreground/70">
          A complete collection of things I&apos;ve built, explored, and shipped.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {financePosts.length === 0 ? (
            <div className="col-span-full window p-8 text-center">
              <p className="font-mono text-sm text-foreground/60">No projects yet</p>
            </div>
          ) : (
            financePosts.map((project: Project) => (
              <Link href={`/projects/${project.slug}`} key={project._id}>
                <div className="window h-full">
                  <div className="halftone aspect-[16/9] overflow-hidden border-b-2 border-border bg-muted">
                    {project.coverImage && (
                      <img
                        src={urlFor(project.coverImage).width(800).height(500).url()}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover mix-blend-multiply contrast-110 saturate-50"
                      />
                    )}
                  </div>
                  <div className="space-y-2 p-5">
                    <h3 className="font-display text-xl font-bold">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {(project.tags ?? []).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="mt-2 inline-block text-sm underline decoration-accent decoration-2 underline-offset-4">
                      View project →
                    </span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}