import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import { Blogs, Post } from "@/types";
import { urlFor } from "@/lib/image";

export const revalidate = 60;
const INITIAL_COUNT = 4;

export default async function BlogSection() {
 
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
  const visible = blogPosts.slice(0, INITIAL_COUNT);
  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6">
        <h2 className="font-display text-3xl font-bold">From the blog</h2>
        <Link
          href="/blogs"
          className="text-sm underline underline-offset-4 hover:text-accent"
        >
          View all blog posts
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {blogPosts.length === 0 ? (
          <div className="col-span-full window p-8 text-center">
            <p className="font-mono text-sm text-foreground/60">No blogs yet</p>
          </div>
        ) : (
          visible.map((post: Blogs, i: number) => (
            <Link href={`/blogs/${post.slug}`} key={post._id}>
              <div className="window h-full">
                <div className="halftone aspect-[4/3] overflow-hidden border-b-2 border-border bg-muted">
                  {post.coverImage && (
                    <img
                      src={urlFor(post.coverImage).width(800).height(500).url()}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover mix-blend-multiply contrast-110 saturate-50"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs text-foreground/60">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      : "Date unavailable"}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {blogPosts.length > INITIAL_COUNT && (
        <div className="mt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded border-2 border-border bg-card px-5 py-2.5 font-medium shadow-[4px_4px_0_0_var(--color-border)] transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
          >
            View All Blogs
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  );
}