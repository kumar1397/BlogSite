import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-24">
      {/* ↑ added pt-24 to push content below header */}

      <div className="container mx-auto max-w-4xl px-6 py-16 space-y-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <section className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3" />
              <Image
                src="/assets/mainImg.png"
                alt="Alex Chen"
                className="relative w-full h-full object-cover rounded-2xl"
                width={384}
                height={384}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl sm:text-4xl text-foreground">About Me</h1>

            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates est magnam ab nemo officia excepturi. Itaque error alias, explicabo eaque libero commodi iste numquam nihil laudantium tempore officia, esse quaerat voluptas voluptatum minima placeat tenetur sapiente dignissimos omnis. Mollitia ea natus molestias iusto itaque quam et voluptate ducimus labore accusamus voluptatibus, quas illo?
            </p>

            <p className="text-muted-foreground leading-relaxed">
              lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates est magnam ab nemo officia excepturi. Itaque error alias, explicabo eaque libero commodi iste numquam nihil laudantium tempore officia, esse quaerat voluptas voluptatum minima placeat tenetur sapiente dignissimos omnis. Mollitia ea natus molestias iusto itaque quam et voluptate ducimus labore accusamus voluptatibus, quas illo?
            </p>

          </div>
        </section>
      </div>
    </div>
  );
}
