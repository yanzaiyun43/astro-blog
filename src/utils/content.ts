import type { CollectionEntry } from 'astro:content';
import type { BlogPost, Category, Tag, Author } from '../types';

// 日期格式化
export function formatDate(date: Date, locale = 'zh-CN'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// 相对时间
export function getRelativeTime(date: Date, locale = 'zh-CN'): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return '今天';
  if (days === 1) return '昨天';
  if (days < 7) return `${days} 天前`;
  if (days < 30) return `${Math.floor(days / 7)} 周前`;
  if (days < 365) return `${Math.floor(days / 30)} 个月前`;
  return `${Math.floor(days / 365)} 年前`;
}

// 字数统计（支持中英文）
export function countWords(content: string): number {
  if (!content) return 0;
  const trimmed = content.trim();
  // 中文字符数
  const chineseChars = (trimmed.match(/[\u4e00-\u9fa5]/g) || []).length;
  // 英文单词数（按空格分割的非空字符串）
  const englishWords = trimmed.split(/\s+/).filter(w => /[a-zA-Z0-9]+/.test(w)).length;
  return chineseChars + englishWords;
}

// 阅读时长估算（words per minute）
// 中文阅读速度约 400-500 字/分钟，英文约 200-250 词/分钟
// 这里取平均值，按 400 字/分钟计算
export function estimateReadingTime(content: string, wpm = 400): number {
  const words = countWords(content);
  return Math.max(1, Math.ceil(words / wpm));
}

// Slug 生成（支持中文和英文）
export function generateSlug(text: string): string {
  if (!text || text.trim() === '') return '';
  
  // 保留中文、英文、数字，其他字符转为连字符
  return text
    .trim()
    .replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

// 文章排序（置顶优先，时间倒序）
export function sortPosts(posts: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
  return posts.sort((a, b) => {
    // pinned 文章始终排在最前面
    if (a.data.pinned && !b.data.pinned) return -1;
    if (!a.data.pinned && b.data.pinned) return 1;
    // 其次按 featured 排序
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;
    // 最后按发布时间倒序
    return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
  });
}

// 过滤已发布文章
export function filterPublished(posts: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
  return posts.filter(post => !post.data.draft && post.data.publishedAt <= new Date());
}

// 获取分类统计
export function getCategories(posts: CollectionEntry<'posts'>[]): Category[] {
  const categoryMap = new Map<string, number>();
  
  posts.forEach(post => {
    if (post.data.draft) return;
    const cat = post.data.category || '未分类';
    if (!cat || cat.trim() === '') return; // 跳过空分类
    categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
  });
  
  return Array.from(categoryMap.entries()).map(([name, count], index) => ({
    id: String(index),
    name,
    slug: generateSlug(name),
    postCount: count,
  }));
}

// 获取标签统计
export function getTags(posts: CollectionEntry<'posts'>[]): Tag[] {
  const tagMap = new Map<string, number>();
  
  posts.forEach(post => {
    if (post.data.draft) return;
    post.data.tags.forEach(tag => {
      if (!tag || tag.trim() === '') return; // 跳过空标签
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count], index) => ({
      id: String(index),
      name,
      slug: generateSlug(name),
      postCount: count,
    }));
}

// 相关文章推荐（基于标签匹配）
export function getRelatedPosts(
  currentPost: CollectionEntry<'posts'>,
  allPosts: CollectionEntry<'posts'>[],
  limit = 3
): CollectionEntry<'posts'>[] {
  const currentTags = new Set(currentPost.data.tags);
  
  return allPosts
    .filter(post => post.id !== currentPost.id && !post.data.draft)
    .map(post => ({
      post,
      score: post.data.tags.filter(tag => currentTags.has(tag)).length,
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.publishedAt.getTime() - a.post.data.publishedAt.getTime())
    .slice(0, limit)
    .map(item => item.post);
}

// Collection Entry 转换为 BlogPost 类型
export function mapToBlogPost(
  entry: CollectionEntry<'posts'>,
  author: Author
): BlogPost {
  return {
    id: entry.id,
    slug: entry.data.slug || entry.id.replace(/\.mdx?$/, '').replace(/\/index$/, ''),
    title: entry.data.title,
    description: entry.data.description,
    content: entry.body || '',
    publishedAt: entry.data.publishedAt,
    updatedAt: entry.data.updatedAt,
    author,
    category: {
      id: entry.data.category,
      name: entry.data.category,
      slug: generateSlug(entry.data.category),
      postCount: 0,
    },
    tags: entry.data.tags.map((tag, i) => ({
      id: String(i),
      name: tag,
      slug: generateSlug(tag),
      postCount: 0,
    })),
    cover: entry.data.cover,
    isDraft: entry.data.draft,
    isFeatured: entry.data.featured,
    readingTime: estimateReadingTime(entry.body || ''),
  };
}
