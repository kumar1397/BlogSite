import { Globe, Smartphone, Code, Palette, ExternalLink } from "lucide-react";
import type { Project } from "@/types";

const typeIcons = {
  web: Globe,
  app: Smartphone,
  code: Code,
  design: Palette,
};

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = typeIcons[project.type];

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card rounded-xl overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-16/10 overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Icon size={16} className="text-primary" />
            <h3 className="font-serif text-lg text-card-foreground">{project.title}</h3>
          </div>
          <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
