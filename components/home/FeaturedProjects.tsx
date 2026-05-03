import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/lib/projects";
import Tag from "@/components/ui/Tag";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <AnimatedSection className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-text">Side Project</h2>
          <p className="text-muted text-sm mt-1">我最近做的小東西，不要被主管看到</p>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-1.5 text-sm text-accent hover:text-blue-700 font-medium transition-colors cursor-pointer"
        >
          查看全部 <ArrowRight size={15} />
        </Link>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-4">
        {featured.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 100}>
            <div className="bg-white border border-border rounded-xl p-5 h-full flex flex-col group hover:border-accent/40 hover:shadow-sm transition-all duration-200 cursor-pointer">
              <div className="flex-1">
                <h3 className="font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted hover:text-text transition-colors"
                  >
                    <GithubIcon size={14} /> 原始碼
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted hover:text-text transition-colors"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
