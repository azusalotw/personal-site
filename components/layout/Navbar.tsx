"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於我" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "專案" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-text hover:text-accent transition-colors"
        >
          Azusa
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer",
                  pathname === href
                    ? "text-accent bg-accent-muted"
                    : "text-muted hover:text-text hover:bg-[#F4F4F5]"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
