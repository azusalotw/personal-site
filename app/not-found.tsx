import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <p className="text-7xl font-bold text-border mb-4">404</p>
      <h1 className="text-2xl font-bold text-text mb-2">找不到頁面</h1>
      <p className="text-muted mb-8">你要找的頁面不存在或已被移動。</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors cursor-pointer"
      >
        <ArrowLeft size={16} /> 回到首頁
      </Link>
    </div>
  );
}
