export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: Author;
  category: Category;
  tags: Tag[];
  cover?: ImageMetadata;
  isDraft: boolean;
  isFeatured: boolean;
  readingTime: number;
  canonicalUrl?: string;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio?: string;
  avatar?: ImageMetadata;
  social?: {
    twitter?: string;
    github?: string;
    website?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  cover?: ImageMetadata;
  postCount: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  postCount: number;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage?: number;
  prevPage?: number;
}

export interface SEO {
  title: string;
  description: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export type Theme = 'light' | 'dark' | 'system';

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  defaultAuthor: string;
  language: string;
  theme: Theme;
}
