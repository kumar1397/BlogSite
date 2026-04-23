
const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blogs" },
    { label: "Portfolio", href: "/portfolio" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b-2 border-border bg-background/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 sm:gap-6">
                <a
                    href="/"
                    className="flex h-9 w-9 items-center justify-center rounded border-2 border-border bg-card font-mono text-lg font-bold"
                    aria-label="Home"
                >
                    ◉
                </a>
                <nav className="flex flex-wrap items-center gap-1 sm:gap-4 font-display text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded px-2 py-1 hover:text-accent transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div >
        </header >
    );
};
