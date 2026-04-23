import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { profileQuery } from "@/lib/queries";

export const revalidate = 60;

export default async function HeroSection() {
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
  console.log(profile)
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 pt-32 pb-24 md:grid-cols-2 md:py-24">

      {/* Left: Text */}
      <div className="space-y-6">
        <p className="font-mono text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          {profile?.designation || "No designation"}
        </p>

        <h1 className="font-display text-5xl leading-[0.95] font-bold sm:text-6xl md:text-7xl">
          Hello.<br />I&apos;m {profile?.name || "Anonymous"}
        </h1>

        <p className="max-w-md text-lg text-foreground/80 leading-relaxed">
          {profile?.shortIntro || "No intro available"}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center rounded border-2 border-border bg-foreground px-5 py-2.5 font-medium text-background shadow-[4px_4px_0_0_var(--color-border)] transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>

          <a
            href="#blog"
            className="inline-flex items-center rounded border-2 border-border bg-card px-5 py-2.5 font-medium shadow-[4px_4px_0_0_var(--color-border)] transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
          >
            Read Blog
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative flex justify-center md:justify-end">
        <div className="absolute -inset-4 -z-10 halftone rounded-lg" />

        {profile?.imageUrl ? (
          <Image
            src={profile.imageUrl}
            alt={profile.imageAlt || profile.name}
            width={320}
            height={320}
            className="relative mx-auto w-full max-w-sm object-cover rounded-lg border-2 border-border shadow-[4px_4px_0_0_var(--color-border)]"
          />
        ) : (
          <div className="w-[320px] h-[320px] flex items-center justify-center border-2 border-border rounded-lg">
            <span className="text-sm text-muted-foreground">No Image</span>
          </div>
        )}
      </div>

      {/* Scroll arrow */}
      <div className="col-span-full flex justify-center pt-8">
        <a
          href="#projects"
          className="text-muted-foreground hover:text-accent transition-colors animate-bounce"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}