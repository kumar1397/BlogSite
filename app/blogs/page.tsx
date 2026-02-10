import { posts } from "@/data/mock";
import BlogCard from "@/components/BlogCard";

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-3">Blog</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Thoughts on building software, design thinking, and personal growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} id={post.id}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
