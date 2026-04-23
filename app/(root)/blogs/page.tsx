import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { sanityClient } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import { Blogs, Post } from "@/types";

export const revalidate = 60;

export default async function AllBlogs() {
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
  const blogPosts = posts.filter((post: Post) => post.category === "blogs");

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <h1 className="mb-2 font-display text-5xl font-bold">Blog</h1>
        <p className="mb-10 text-foreground/70">
          Thoughts on building software, design thinking, and personal growth.
        </p>

        <div className="space-y-5">
          {blogPosts.length === 0 ? (
            <div className="window p-8 text-center">
              <p className="font-mono text-sm text-foreground/60">No blogs yet</p>
            </div>
          ) : (
            blogPosts.map((post: Blogs) => (
              <Link href={`/blogs/${post.slug}`} key={post._id}>
                <div className="window">
                  <article className="p-5">
                    <p className="mb-1 font-mono text-xs text-foreground/60">
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                        : "Date unavailable"}
                    </p>
                    <h2 className="font-display text-2xl font-bold">{post.title}</h2>
                    <p className="mt-2 text-foreground/80">{post.description}</p>
                    <span className="mt-3 inline-block text-sm underline decoration-accent decoration-2 underline-offset-4">
                      Read post →
                    </span>
                  </article>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}