import { projects } from "@/data/mock";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const INITIAL_COUNT = 3;

const ProjectsSection = () => {
  const visible = projects.slice(0, INITIAL_COUNT);

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
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/projects">
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
