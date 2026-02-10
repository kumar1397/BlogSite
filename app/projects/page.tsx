import { projects } from "@/data/mock";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-3">Projects</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A selection of things I've built, explored, and shipped.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
