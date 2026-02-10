import { ArrowLeft, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/data/mock";
import NotFound from "@/components/notFound";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) return <NotFound />;

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Mock content paragraphs
  const mockContent = [
    `${post.excerpt} This article explores the ideas and practical approaches that have shaped my thinking on this topic over the past year.`,
    "When we think about building software that lasts, we often focus on the technical decisions—which framework to choose, how to structure the codebase, what patterns to follow. But the most impactful decisions are often the ones that shape how we think about the problem itself.",
    "One approach that has consistently proven valuable is starting with constraints. Rather than asking \"what can we build?\", asking \"what must we solve?\" leads to fundamentally different—and usually better—outcomes.",
    "In practice, this means being intentional about every abstraction we introduce. Each layer of indirection should earn its place by solving a real problem, not a hypothetical one.",
    "Looking ahead, I'm excited about the possibilities that emerge when we combine thoughtful design with modern tooling.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24 px-6">
        <article className="container mx-auto max-w-3xl">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <div className="aspect-2/1 overflow-hidden rounded-xl bg-secondary mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate}
              </span>

              <span className="flex items-center gap-1.5">
                <BookOpen size={14} />
                5 min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-stone max-w-none space-y-6">
            {mockContent.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
