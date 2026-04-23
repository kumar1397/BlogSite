import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { profileQuery } from "@/lib/queries";

export const revalidate = 60;

export default async function About() {
  const profile = await sanityClient.fetch(
    profileQuery,
    {},
    {
      next: {
        revalidate: 60,
        tags: ["profile"],
      },
    }
  );

  return (
    <div className="bg-background min-h-screen pt-24">
      <div className="container mx-auto max-w-4xl px-6 py-16 space-y-20">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <section className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3" />
              
              {profile?.imageUrl ? (
                <Image
                  src={profile.imageUrl}
                  alt={profile.imageAlt || profile.name}
                  width={384}
                  height={384}
                  className="relative w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center border rounded-2xl">
                  <span className="text-sm text-muted-foreground">No Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl sm:text-4xl text-foreground">
              About Me
            </h1>

            {/* Long Description */}
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {profile?.longDescription || "No description available"}
            </p>

          </div>
        </section>
      </div>
    </div>
  );
}