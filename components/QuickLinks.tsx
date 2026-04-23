import { ArrowUpRight } from "lucide-react";

const items = [
    { href: "/blogs", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
];

export function QuickLinks() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="mb-5 font-display text-2xl font-bold">Quick links</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {items.map((it) => (
                    <a
                        key={it.href}
                        href={it.href}
                        className="window window-sm group flex items-center justify-between bg-card px-4 py-3 transition-transform hover:-translate-y-0.5 hover:-translate-x-0.5"
                    >
                        <span className="font-medium">{it.label}</span>
                        <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                ))}
            </div>
        </section>
    );
}