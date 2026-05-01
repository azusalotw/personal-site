import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "個人網站",
    description: "用 Next.js 14 + Tailwind CSS 建立的個人網站，包含 Blog、專案展示，部署在 Vercel。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "任務管理 App",
    description: "支援拖曳排序、標籤分類的看板式任務管理工具，使用 React + Zustand 狀態管理。",
    tags: ["React", "TypeScript", "Zustand", "dnd-kit"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "CLI 工具集",
    description: "一組提升開發效率的命令列工具，支援自動生成程式碼模板、批次處理檔案。",
    tags: ["Node.js", "TypeScript", "Commander.js"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: "project-4",
    title: "API 監控儀表板",
    description: "即時監控 REST API 健康狀態、回應時間、錯誤率的視覺化儀表板。",
    tags: ["React", "Recharts", "Node.js", "WebSocket"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];
