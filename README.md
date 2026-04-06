# 旧识桥 - ailmel 的博客

基于 Astro 5.0 + Tailwind CSS + TypeScript 构建的极简风格静态博客。

## ✨ 特性

- **极简设计** - 柔和浅蓝/浅灰/米白配色，细线条贯穿，无多余装饰
- **流畅动画** - 页面淡入、卡片微动效、平滑过渡，时长精心调校
- **完美响应式** - 适配手机/平板/桌面，触摸优化
- **暗色模式** - 自动/手动切换，平滑过渡
- **轻量搜索** - 客户端实时搜索，⌘K 快捷键
- **Giscus 评论** - GitHub Discussions 驱动，极简风格
- **SEO 优化** - 自动生成 sitemap、RSS、OG 标签
- **高性能** - 静态生成，图片优化，Prefetch 预加载

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/ailmel/astro.git
cd astro
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321

### 4. 构建生产版本

```bash
npm run build
```

## 📝 写作指南

在 `src/content/posts/` 目录下创建 `.md` 或 `.mdx` 文件：

```markdown
---
title: "文章标题"              # 必需：文章标题（最多100字符）
description: "文章简介"        # 必需：文章描述（最多200字符）
publishedAt: 2026-01-01      # 必需：发布日期
updatedAt: 2026-01-20        # 可选：更新日期
cover: ../../assets/cover.jpg # 可选：封面图片路径
category: "分类"              # 可选：分类（默认"未分类"）
tags: ["标签1", "标签2"]      # 可选：标签列表
draft: false                 # 可选：草稿模式（默认false）
featured: true               # 可选：置顶文章（默认false）
slug: "custom-url"           # 可选：自定义URL路径
---

正文内容...
```

### 字段说明

| 字段 | 必需 | 类型 | 说明 |
|------|------|------|------|
| `title` | ✅ | string | 文章标题，最多100字符 |
| `description` | ✅ | string | 文章描述，最多200字符 |
| `publishedAt` | ✅ | date | 发布日期，格式：YYYY-MM-DD |
| `updatedAt` | - | date | 更新日期，格式：YYYY-MM-DD |
| `cover` | - | string | 封面图片路径，如：`../../assets/image.jpg` |
| `category` | - | string | 文章分类，默认"未分类" |
| `tags` | - | array | 标签列表，如：`["标签1", "标签2"]` |
| `draft` | - | boolean | 草稿模式，设为true则不发布 |
| `featured` | - | boolean | 置顶文章，设为true则在首页突出显示 |
| `slug` | - | string | 自定义URL路径，如：`my-post` |

## 🛠️ 技术栈

- [Astro](https://astro.build) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架
- [TypeScript](https://typescriptlang.org) - 类型安全
- [Alpine.js](https://alpinejs.dev) - 轻量级交互

## 📦 部署

支持多种静态托管平台：

- **Vercel** - `vercel --prod`
- **Netlify** - `netlify deploy --prod`
- **GitHub Pages** - 自动部署（见 `.github/workflows/deploy.yml`）
- **Cloudflare Pages** - `wrangler pages deploy dist`


## ⚙️ 配置

### 站点信息

编辑 `src/consts.ts`：

```typescript
export const SITE = {
  name: '旧识桥',
  title: '旧识桥 - ailmel 的博客',
  description: '记录技术、设计与生活的点滴思考',
  url: 'https://ailmel.top',
  defaultAuthor: 'ailmel',
  // ...
};
```

### 导航菜单

编辑 `src/consts.ts` 中的 `NAVIGATION`：

```typescript
export const NAVIGATION = {
  home: '/',
  posts: '/posts',
  friends: '/friends',
  about: '/about',
  rss: '/rss.xml',
};
```

### 社交链接

编辑 `src/consts.ts` 中的 `SOCIAL_LINKS`：

```typescript
export const SOCIAL_LINKS = {
  github: 'https://github.com/yanzaiyun43',
  sitemap: '/sitemap-index.xml',
  email: 'mailto:ailmel@163.com',
  rss: '/rss.xml',
};
```

### 博客配置

编辑 `src/consts.ts` 中的 `BLOG_CONFIG`：

```typescript
export const BLOG_CONFIG = {
  postsPerPage: 6,        // 首页每页文章数
  dateFormat: 'yyyy-MM-dd',
  readingSpeed: 300,      // 每分钟阅读字数
};
```

### 首页打字机效果

编辑 `src/consts.ts` 中的 `HERO_TYPEWRITER`：

```typescript
export const HERO_TYPEWRITER = {
  texts: [
    '记录技术、设计与生活的点滴思考',
    '分享极简主义的设计理念',
    '探索优雅代码的艺术',
    '连接过去与现在的桥梁',
  ],
  typeSpeed: 150,     // 打字速度（毫秒）
  deleteSpeed: 100,   // 删除速度（毫秒）
  pauseTime: 2500,    // 打完后的停顿时间（毫秒）
};
```

### Giscus 评论

编辑 `src/components/Giscus.astro`，配置你的 GitHub 仓库信息：

```typescript
const GISCUS_CONFIG = {
  repo: '你的用户名/仓库名',
  repoId: '你的仓库ID',
  category: 'Announcements',
  categoryId: '你的分类ID',
  // ...
};
```

## 📄 许可证

MIT License © 2024 ailmel

---

欢迎 Star ⭐ 和 Fork！
