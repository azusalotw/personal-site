import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          結構工程師，但又有點斜槓想用 AI 做點小東西來玩玩～
          在這裡存放一些 blog 和 sideproject 的 demo
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
            href="https://github.com/azusalotw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors cursor-pointer"
          >
            <GithubIcon size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
