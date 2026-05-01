export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  cover?: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  cover?: string;
  featured?: boolean;
}
