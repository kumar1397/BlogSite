
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import { Blogs, Post } from "@/types";
export const revalidate = 60; 
const INITIAL_COUNT = 3;

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
    <section id="blog" className="py-24 px-6 bg-secondary/40"> 
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-3">Blogs</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Thoughts on building software, design thinking, and personal growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-14 px-6 border border-dashed rounded-2xl bg-muted/30 text-center">
              <p className="text-base font-medium text-foreground">
                No blogs yet
              </p>

            </div>
          ) : (
            visible.map((post: Blogs) => (
              <BlogCard key={post._id} post={post} />
            ))
          )}
        </div>
        {blogPosts.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/blogs">
                View All Blogs
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
