import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { sanityClient } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import { Project, Post } from "@/types";
import PortfolioCard from "@/components/portfolioCard";
export const revalidate = 60; 
export default async function AllProjects() {
  const posts = await sanityClient.fetch(postsQuery);
  const graphicPosts = posts.filter((post: Post) => post.category === "graphic");
  return (
    <div className="min-h-screen bg-background">
      <main className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="mb-14">
            <h1 className="text-3xl sm:text-4xl font-serif text-foreground mb-3">
              All Portfolios
            </h1>
            <p className="text-muted-foreground max-w-lg">
              A complete collection of things I&apos;ve designed, explored, and shipped.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphicPosts.map((project: Project) => (
              <PortfolioCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

