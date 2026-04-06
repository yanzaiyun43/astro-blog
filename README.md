# 旧识桥 - ailmel 的博客

基于 Astro 5.0 + Tailwind CSS + TypeScript 构建的极简风格静态博客。

**在线访问**: [https://ailmel.top](https://ailmel.top)

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
git clone https://github.com/ailmel/old-bridge.git
cd old-bridge
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
title: "文章标题"
description: "文章简介"
publishedAt: 2024-01-01
category: "分类"
tags: ["标签1", "标签2"]
featured: true  # 是否置顶
---

正文内容...
```

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

详细部署指南见 [DEPLOY.md](./DEPLOY.md)

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

### Giscus 评论

编辑 `src/components/Giscus.astro`，配置你的 GitHub 仓库信息。

## 📄 许可证

MIT License © 2024 ailmel

---

欢迎 Star ⭐ 和 Fork！
