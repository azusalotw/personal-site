# CLAUDE.md

## Project Background

This is a personal portfolio and blog website built with **Next.js 14 (App Router)** and **TypeScript**. The site showcases technical writing, project work, and professional identity. Content is primarily in Traditional Chinese (zh-TW). It is deployed on **Vercel**.

### Tech Stack
- **Framework:** Next.js 14.2.35 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.1 with `@tailwindcss/typography` and a custom color palette
- **Blog Content:** MDX files rendered via `next-mdx-remote`, with `gray-matter` for frontmatter and `reading-time` for read-time estimates
- **Icons:** `lucide-react` (note: v1.x lacks `Github`/`Twitter` icons — use the custom `components/ui/SocialIcons.tsx` instead)
- **Fonts:** Plus Jakarta Sans + Noto Sans TC + JetBrains Mono
- **Utilities:** `date-fns`, `clsx`

### Directory Structure
- `app/` — Next.js App Router pages and root layout
  - `page.tsx` — Homepage (Hero, FeaturedProjects, RecentPosts)
  - `blog/[slug]/page.tsx` — Dynamic blog post pages
  - `projects/page.tsx` — Projects listing
  - `about/page.tsx` — About page
  - `layout.tsx` — Root layout (Navbar + Footer)
- `components/` — Organized by feature: `layout/`, `home/`, `blog/`, `projects/`, `ui/`
- `content/posts/` — MDX blog posts with YAML frontmatter (title, date, summary, tags, cover)
- `lib/` — Core utilities: `mdx.ts` (post retrieval), `types.ts`, `projects.ts` (project data)

### Main Features
- Blog driven by MDX files in `content/posts/`
- Projects showcase sourced from `lib/projects.ts` (title, description, tags, GitHub/demo links, featured flag)
- Homepage with featured projects and recent posts
- Custom-animated sections via `AnimatedSection.tsx` (`"use client"`, Intersection Observer)

### Design System (Modern SaaS Light)
- Background `#FAFAFA`, Surface `#FFFFFF`, Text `#09090B`
- Muted `#71717A`, Border `#E4E4E7`, Accent `#2563EB`

---

## Working Conventions

- All code comments must be written in **Chinese**; variable and function names in **English**.
- Before making changes, **explain what you intend to change and wait for confirmation** before proceeding.
- For new features, write the implementation only — do **not** add tests proactively unless explicitly requested.
- Database table names use **snake_case** (e.g. `user_profile`).

## Prohibitions

- Do **not** proactively refactor files that I did not mention.
- Do **not** delete any file unless I explicitly say so.
- Do **not** run `npm install` to add new dependencies without confirmation.

## Preserve on Compaction

When long conversations are auto-compacted, retain in the following priority order:

1. Architectural decisions and the reasoning behind them
2. Which files were modified and what was changed
3. Current progress / state
4. Outstanding TODOs
