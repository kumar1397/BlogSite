import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/60">
      <div className="container mx-auto max-w-5xl text-center space-y-6">
        <p className="font-serif text-lg text-foreground italic">
          "Stay curious, keep building."
        </p>
        <div className="flex justify-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
