import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Tag from "@/components/ui/Tag";
import { Mail } from "lucide-react";
import { GithubIcon, TwitterXIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "關於我",
  description: "軟體工程師，熱愛建造美觀且實用的產品",
};

const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "PostgreSQL", "Docker", "Git",
  "REST API", "GraphQL", "Figma", "Linux",
];

const experiences = [
  {
    role: "軟體工程師",
    company: "某科技公司",
    period: "2023 – 現在",
    desc: "負責前端架構設計與開發，導入 Next.js App Router 與 TypeScript，提升團隊開發效率與程式碼品質。",
  },
  {
    role: "前端工程師",
    company: "新創公司",
    period: "2021 – 2023",
    desc: "從零建立 SaaS 產品前端，使用 React + Tailwind CSS，與後端工程師協作串接 REST API。",
  },
  {
    role: "資工系學士",
    company: "某大學",
    period: "2017 – 2021",
    desc: "主修資訊工程，修習資料結構、演算法、作業系統、計算機網路等核心課程。",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-text mb-2">關於我</h1>
        <p className="text-muted mb-12">Hello, 我是 Azusa</p>
      </AnimatedSection>

      <AnimatedSection delay={100} className="mb-12">
        <div className="bg-white border border-border rounded-2xl p-8">
          <p className="text-text leading-relaxed mb-4">
            我是一名軟體工程師，熱愛建造美觀且實用的產品。
            對 Web 開發充滿熱情，尤其喜歡在前端效能優化與使用者體驗上深入研究。
          </p>
          <p className="text-text leading-relaxed mb-4">
            平時喜歡閱讀技術文章、嘗試新的工具與框架，並透過寫作整理學習心得。
            也喜歡貢獻開源專案，從社群中學習、也回饋給社群。
          </p>
          <p className="text-muted leading-relaxed">
            目前居住在台灣，歡迎透過下方連結與我聯繫。
          </p>

          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors cursor-pointer"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors cursor-pointer"
            >
              <TwitterXIcon size={16} /> Twitter
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors cursor-pointer"
            >
              <Mail size={16} /> hello@example.com
            </a>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200} className="mb-12">
        <h2 className="text-xl font-bold text-text mb-4">技術能力</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag key={skill} label={skill} variant="accent" />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <h2 className="text-xl font-bold text-text mb-4">經歷</h2>
        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.role + exp.company}
              className="bg-white border border-border rounded-xl p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-semibold text-text">{exp.role}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                </div>
                <span className="text-xs text-muted shrink-0 mt-0.5">{exp.period}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
