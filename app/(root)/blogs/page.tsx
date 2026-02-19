import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/BlogCard";
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
    <div className="min-h-screen bg-background">
      <main className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="mb-14">
            <h1 className="text-3xl sm:text-4xl font-serif text-foreground mb-3">
              All Blog Posts
            </h1>
            <p className="text-muted-foreground max-w-lg">
              Thoughts on building software, design thinking, and personal
              growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post: Blogs) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
