import { ArrowLeft, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import { PortableText } from "@portabletext/react";
import { postBySlugQuery } from "@/lib/queries";
export const revalidate = 60;
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await sanityClient.fetch(
    postBySlugQuery,
    { slug: (await params).slug },
    {
      next: {
        revalidate: 60,
        tags: ["post"], 
      },
    },
  );
  if (!post) return notFound();

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

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
                alt={post.title}
                className="w-full h-full object-cover"
                width={1200}
                height={600}
              />
            </div>
          )}

          {/* Meta + title */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate}
              </span>

              <span className="flex items-center gap-1.5">
                <BookOpen size={14} />
                Article
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Rich text content from Sanity */}
          <div className="prose prose-stone max-w-none">
            <PortableText value={post.content} />
          </div>
        </article>
      </main>
    </div>
  );
}
