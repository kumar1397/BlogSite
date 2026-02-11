import { posts } from "@/data/mock";
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const INITIAL_COUNT = 3;

const BlogSection = () => {
    const visible = posts.slice(0, INITIAL_COUNT);

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
                    {visible.map((post) => (
                        <BlogCard key={post.id} post={post} id={post.id} />
                    ))}
                </div>
                {posts.length > INITIAL_COUNT && (
                    <div className="text-center mt-10">
                        <Button variant="outline" asChild className="gap-2">
                            <Link href="/blogs">
                                View All Posts
                                <ArrowRight size={16} />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
