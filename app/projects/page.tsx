import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "專案",
  description: "我建立的一些專案與作品",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-text mb-2">專案</h1>
        <p className="text-muted mb-12">我建立的一些專案與作品</p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 80}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
