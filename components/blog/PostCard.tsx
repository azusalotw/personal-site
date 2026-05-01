import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import Tag from "@/components/ui/Tag";
import type { PostMeta } from "@/lib/types";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-sm transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {post.date
            ? format(new Date(post.date), "yyyy 年 MM 月 dd 日", { locale: zhTW })
            : ""}
        </span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {post.readingTime}
        </span>
      </div>

      <h2 className="text-lg font-semibold text-text group-hover:text-accent transition-colors mb-2">
        {post.title}
      </h2>
      <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
        {post.summary}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Link>
  );
}
