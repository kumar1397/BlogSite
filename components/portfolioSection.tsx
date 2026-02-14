import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import { Project, Post } from "@/types";

const INITIAL_COUNT = 3;

export default async function PortfolioSection() {
  const posts = await sanityClient.fetch(postsQuery);
  const graphicPosts = posts.filter((post: Post) => post.category === "graphic");
  const visible = graphicPosts  .slice(0, INITIAL_COUNT);
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-3">
            Portfolios
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A selection of things I&apos;ve designed and shipped.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project: Project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {graphicPosts.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/portfolio">
                View All Portfolios
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
