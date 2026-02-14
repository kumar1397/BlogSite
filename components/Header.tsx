const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blogs" },
    { label: "Portfolio", href: "/portfolio" },
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto flex items-center justify-between h-16 px-6">
                <a href="/about" className="font-serif text-xl text-foreground hover:text-primary transition-colors">
                    ABC XYC
                </a>
                <nav className="hidden sm:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
