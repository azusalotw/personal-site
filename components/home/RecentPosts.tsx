import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

export default function RecentPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
      <AnimatedSection className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-text">最新文章</h2>
          <p className="text-muted text-sm mt-1">技術分享與生活記錄</p>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-1.5 text-sm text-accent hover:text-blue-700 font-medium transition-colors cursor-pointer"
        >
          查看全部 <ArrowRight size={15} />
        </Link>
      </AnimatedSection>

      <div className="flex flex-col gap-3">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 bg-white border border-border rounded-xl p-5 hover:border-accent/40 hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-text group-hover:text-accent transition-colors mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-muted line-clamp-2">{post.summary}</p>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 shrink-0">
                <div className="flex items-center gap-1 text-xs text-muted">
                  <Calendar size={12} />
                  {post.date
                    ? format(new Date(post.date), "yyyy/MM/dd", { locale: zhTW })
                    : ""}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted">
                  <Clock size={12} />
                  {post.readingTime}
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
