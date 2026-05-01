import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white border border-border rounded-xl p-6 flex flex-col h-full hover:border-accent/40 hover:shadow-sm transition-all duration-200">
      <div className="flex-1">
        <h3 className="font-semibold text-text mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 mt-4 border-t border-border">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors cursor-pointer"
          >
            <GithubIcon size={15} /> 原始碼
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors cursor-pointer"
          >
            <ExternalLink size={15} /> 查看 Demo
          </a>
        )}
      </div>
    </div>
  );
}
