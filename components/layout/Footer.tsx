import { Mail } from "lucide-react";
import { GithubIcon, TwitterXIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {year} Azusa. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-text transition-colors cursor-pointer"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted hover:text-text transition-colors cursor-pointer"
          >
            <TwitterXIcon size={18} />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="text-muted hover:text-text transition-colors cursor-pointer"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
