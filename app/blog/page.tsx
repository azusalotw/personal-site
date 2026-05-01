import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import PostCard from "@/components/blog/PostCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "技術文章與生活記錄",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-text mb-2">Blog</h1>
        <p className="text-muted mb-12">
          技術筆記、學習心得與生活雜記 · 共 {posts.length} 篇
        </p>
      </AnimatedSection>

      {posts.length === 0 ? (
        <AnimatedSection delay={100}>
          <div className="text-center py-20 text-muted">
            <p className="text-lg mb-2">還沒有文章</p>
            <p className="text-sm">在 content/posts/ 新增 .mdx 檔案即可</p>
          </div>
        </AnimatedSection>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 80}>
              <PostCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  );
}
