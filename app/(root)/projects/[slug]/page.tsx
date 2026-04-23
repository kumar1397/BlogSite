import { ArrowLeft, Calendar, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import { projectBySlugQuery } from "@/lib/queries";

export const revalidate = 60;

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = await sanityClient.fetch(
    projectBySlugQuery,
    { slug: (await params).slug },
    {
      next: {
        revalidate: 60,
        tags: ["post"],
      },
    },
  );

  if (!project) return notFound();
  console.log(project)
  const formattedDate = project.publishedAt
    ? new Date(project.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24 px-6">
        <article className="container mx-auto max-w-3xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          {project.coverImage && (
            <div className="aspect-2/1 overflow-hidden rounded-xl bg-secondary mb-8">
              <Image
                src={urlFor(project.coverImage).width(1200).height(600).url()}
                alt={project.title}
                className="w-full h-full object-cover"
                width={1200}
                height={600}
              />
            </div>
          )}

          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate || "No publish date"}
              </span>

              <span className="flex items-center gap-1.5">
                <Briefcase size={14} />
                Project
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground">
              {project.title}
            </h1>

            {project.description && (
              <p className="text-foreground/80 leading-relaxed">{project.description}</p>
            )}

            <div className="flex flex-wrap gap-2">
              {(project.tags ?? []).map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm underline decoration-accent decoration-2 underline-offset-4"
              >
                Visit Project
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          {Array.isArray(project.content) && project.content.length > 0 && (
            <div className="prose prose-stone max-w-none">
              <PortableText value={project.content} />
            </div>
          )}
        </article>
      </main>
    </div>
  );
}
