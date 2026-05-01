import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
      <div className="max-w-2xl">
        <p className="text-accent font-medium text-sm mb-4 animate-fade-up">
          👋 嗨，我是
        </p>
        <h1 className="text-5xl font-bold text-text leading-tight tracking-tight mb-4 animate-fade-up delay-100">
          Azusa
        </h1>
        <p className="text-xl text-muted leading-relaxed mb-8 animate-fade-up delay-200">
          軟體工程師，熱愛建造美觀且實用的產品。
          專注於 Web 全端開發，喜歡探索新技術並分享學習心得。
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up delay-300">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors cursor-pointer"
          >
            查看專案 <ArrowRight size={16} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text rounded-lg font-medium text-sm hover:bg-[#F4F4F5] transition-colors cursor-pointer"
          >
            閱讀 Blog
          </Link>
        </div>

        <div className="flex items-center gap-4 animate-fade-up delay-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors cursor-pointer"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors cursor-pointer"
          >
            <Mail size={16} /> 聯絡我
          </a>
        </div>
      </div>
    </section>
  );
}
