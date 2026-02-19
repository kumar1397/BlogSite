import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar } from "lucide-react";
import type { Post } from "@/types";
import { urlFor } from "@/lib/image";
export const revalidate = 60; 
export default function BlogCard({ post }: { post: Post }) {
   const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Link href={`/blogs/${post.slug}`}>
      <article className="group bg-card rounded-xl overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="aspect-video overflow-hidden bg-secondary">
          {post.coverImage && (
            <Image
              src={urlFor(post.coverImage).width(800).height(500).url()}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={800}
              height={500}
            />
          )}
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={12} />
              Article
            </span>
          </div>

          <h3 className="font-serif text-lg text-card-foreground group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

