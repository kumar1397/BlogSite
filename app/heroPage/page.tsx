import { ArrowDown } from "lucide-react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section id="about" className="pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary">
              Finance Enthusiat & Writer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
              Hello, I&apos;m ABC XYZ
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              impedit aliquid fugit voluptatum id veniam adipisci, facere
              aspernatur! Aliquid perferendis voluptas quos quo dolores, ipsa
              neque laboriosam culpa rerum eligendi.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                Read Blog
              </a>
            </div>
          </div>
          <div
            className="flex justify-center md:justify-end animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-6" />
              <Image
                src="/assets/mainImg.png"
                alt="Alex Chen illustration"
                className="relative w-full h-full object-cover rounded-3xl"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-16">
          <a
            href="#projects"
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
