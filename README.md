# 旧识桥 - ailmel 的博客

基于 Astro 5.0 + Tailwind CSS + TypeScript 构建的极简风格静态博客。

## 特性

- **极简设计** - 柔和浅蓝/浅灰/米白配色，细线条贯穿，无多余装饰
- **流畅动画** - 页面淡入、卡片微动效、平滑过渡，时长精心调校
- **完美响应式** - 适配手机/平板/桌面，触摸优化
- **暗色模式** - 手动切换，平滑过渡
- **轻量搜索** - 客户端实时搜索，⌘K 快捷键
- **Giscus 评论** - GitHub Discussions 驱动，极简风格
- **SEO 优化** - 自动生成 sitemap、RSS、OG 标签、JSON-LD 结构化数据
- **运行天数** - 自动计算网站运行天数
- **文章归档** - 按年份时间轴展示所有文章
- **置顶文章** - 首页突出显示置顶内容
- **随机封面** - 未设置封面时自动随机选取
- **打字机效果** - 首页 Hero 区域动态文字效果
- **高性能** - 静态生成，图片优化，Prefetch 预加载

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/ailmel/astro-blog.git
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

## 写作指南

在 `src/content/posts/` 目录下创建 `.md` 或 `.mdx` 文件：

```markdown
---
title: "文章标题"              # 必需：文章标题（最多100字符）
description: "文章简介"        # 必需：文章描述（最多200字符）
publishedAt: 2026-01-01      # 必需：发布日期
updatedAt: 2026-01-20        # 可选：更新日期
cover: ../../assets/cover.webp # 可选：封面图片路径
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
| `cover` | - | string | 封面图片路径，如：`../../assets/image.webp` |
| `category` | - | string | 文章分类，默认"未分类" |
| `tags` | - | array | 标签列表，如：`["标签1", "标签2"]` |
| `draft` | - | boolean | 草稿模式，设为true则不发布 |
| `featured` | - | boolean | 置顶文章，设为true则在首页突出显示 |
| `slug` | - | string | 自定义URL路径，如：`my-post` |

## 项目结构

```
astro/
├── public/                # 静态资源
│   ├── avatar.png        # 头像
│   ├── favicon.svg       # SVG 图标
│   ├── favicon.ico       # ICO 图标
│   ├── robots.txt        # SEO 爬虫规则
│   └── fonts/            # 字体文件
├── src/
│   ├── assets/           # 资源文件（封面图片等）
│   ├── components/       # Astro 组件
│   │   ├── Navbar.astro      # 导航栏
│   │   ├── Footer.astro      # 页脚
│   │   ├── PostCard.astro    # 文章卡片
│   │   ├── SEO.astro         # SEO 组件
│   │   ├── JsonLd.astro      # JSON-LD 结构化数据
│   │   ├── Giscus.astro      # Giscus 评论
│   │   ├── Search.astro      # 搜索组件
│   │   ├── SearchData.astro  # 搜索数据注入
│   │   ├── Pagination.astro  # 分页组件
│   │   ├── TagList.astro     # 标签列表
│   │   ├── ThemeToggle.astro # 主题切换
│   │   └── HeaderLink.astro  # 导航链接
│   ├── content/          # 内容集合
│   │   └── posts/        # 文章内容（.md/.mdx）
│   ├── layouts/          # 布局模板
│   │   ├── BaseLayout.astro  # 基础布局
│   │   └── PostLayout.astro  # 文章页布局
│   ├── pages/            # 页面路由
│   │   ├── index.astro        # 首页
│   │   ├── archive.astro      # 归档页
│   │   ├── friends.astro      # 友链页
│   │   ├── about.astro        # 关于页
│   │   ├── 404.astro          # 404 页面
│   │   ├── rss.xml.js         # RSS 订阅
│   │   ├── posts/             # 文章列表/详情页
│   │   │   ├── [...page].astro    # 文章列表（分页）
│   │   │   └── [...slug].astro    # 文章详情页
│   │   ├── categories/        # 分类页
│   │   │   └── [slug].astro
│   │   └── tags/              # 标签页
│   │       └── [slug].astro
│   ├── styles/           # 样式文件
│   │   └── global.css   # 全局样式
│   ├── utils/            # 工具函数
│   │   └── content.ts   # 内容处理
│   ├── consts.ts        # 配置常量
│   ├── types.ts         # TypeScript 类型定义
│   └── content.config.ts # 内容集合配置
├── astro.config.mjs     # Astro 配置
├── tailwind.config.js    # Tailwind 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目依赖
```

## ️ 技术栈

- [Astro](https://astro.build) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架
- [TypeScript](https://typescriptlang.org) - 类型安全
- [Alpine.js](https://alpinejs.dev) - 轻量级交互

## 部署

支持多种静态托管平台：

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**


## 配置

### 站点信息

编辑 `src/consts.ts`：

```typescript
export const SITE = {
  name: '旧识桥',
  title: '什么都略懂一点，生活更多彩一些',
  description: '我是ailmel，这里是旧识桥博客，博客内有技术分享与生活记录。',
  shortDescription: '什么都略懂一点，生活更多彩一些',
  url: 'https://ailmel.top',
  defaultAuthor: 'ailmel',
  language: 'zh-CN',
  charset: 'UTF-8',
  ogImage: '/og-image.jpg',
  favicon: {
    svg: '/favicon.svg',
    ico: '/favicon.ico',
  },
};
```

### 导航菜单

编辑 `src/consts.ts` 中的 `NAVIGATION`：

```typescript
export const NAVIGATION = {
  home: '/',
  posts: '/posts',
  archive: '/archive',
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
  postsPerPage: 10,       // 首页每页文章数
  dateFormat: 'yyyy-MM-dd',
  readingSpeed: 300,      // 每分钟阅读字数
};
```

### 首页打字机效果

编辑 `src/consts.ts` 中的 `HERO_TYPEWRITER`：

```typescript
export const HERO_TYPEWRITER = {
  texts: [
    'Per asprera ad astra.',
    '循此苦旅，终抵群星。',
  ],
  typeSpeed: 150,     // 打字速度（毫秒）
  deleteSpeed: 100,   // 删除速度（毫秒）
  pauseTime: 2000,    // 打完后的停顿时间（毫秒）
};
```

### SEO 配置

编辑 `src/consts.ts` 中的 `META`：

```typescript
export const META = {
  keywords: ['博客', '技术', '设计', '生活', "旧识桥", "旧识桥博客", "技术分享", "开源阅读", "ailmel官网", "ailmel博客", "ailmel","Astro"],
  author: SITE.defaultAuthor,
  robots: 'index, follow',
  themeColor: '#f0f9ff',
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

## 许可证

MIT License © 2026 ailmel

---

欢迎 Star ⭐ 和 Fork！
