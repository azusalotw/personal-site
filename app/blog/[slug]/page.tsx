import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPost } from "@/lib/mdx";
import Tag from "@/components/ui/Tag";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors mb-8 cursor-pointer"
      >
        <ArrowLeft size={16} /> 返回 Blog
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 text-xs text-muted mb-4">
          {post.date && (
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {format(new Date(post.date), "yyyy 年 MM 月 dd 日", { locale: zhTW })}
            </span>
          )}
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text leading-tight mb-4">
          {post.title}
        </h1>
        {post.summary && (
          <p className="text-muted text-lg leading-relaxed mb-6">{post.summary}</p>
        )}
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Tag key={tag} label={tag} variant="accent" />
          ))}
        </div>
      </header>

      <div className="bg-white border border-border rounded-2xl p-8 sm:p-10">
        <article className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-accent prose-code:font-mono">
          <MDXRemote source={post.content} />
        </article>
      </div>

      <div className="mt-10 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} /> 返回文章列表
        </Link>
      </div>
    </div>
  );
}
