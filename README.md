# 旧识桥

基于 Astro 5.0 + Tailwind CSS + TypeScript 构建的极简风格静态博客。

## 特性

- **极简设计** - 柔和浅蓝/浅灰/米白配色，细线条贯穿，无多余装饰
- **One UI Sans 字体** - 本地化 woff2 字体，无外部字体依赖，中文回退系统字体
- **流畅动画** - 页面淡入、卡片微动效、平滑过渡
- **完美响应式** - 适配手机/平板/桌面，触摸优化
- **轻量搜索** - 客户端实时搜索，⌘K 快捷键
- **Giscus 评论** - GitHub Discussions 驱动
- **SEO 优化** - 自动生成 sitemap、RSS、OG 标签、JSON-LD 结构化数据
- **文章归档** - 按年份时间轴展示所有文章
- **置顶文章** - 支持 `featured` 和 `pinned` 两种置顶方式
- **友链页面** - 独立友链展示页
- **高性能** - 静态生成，图片优化，Prefetch 预加载

## 快速开始

```bash
git clone https://github.com/yanzaiyun43/astro-blog.git
cd astro-blog
npm install
npm run dev
```

访问 http://localhost:4321

构建生产版本：

```bash
npm run build
```

## 写作指南

在 `src/content/posts/` 目录下创建 `.md` 或 `.mdx` 文件：

```markdown
---
title: "文章标题"              # 必需：文章标题
description: "文章简介"        # 必需：文章描述
publishedAt: 2026-01-01      # 必需：发布日期
updatedAt: 2026-01-20        # 可选：更新日期
cover: ../../assets/cover.webp # 可选：封面图片路径
category: "分类"              # 可选：分类（默认"未分类"）
tags: ["标签1", "标签2"]      # 可选：标签列表
draft: false                 # 可选：草稿模式（默认false）
featured: true               # 可选：置顶文章（默认false）
slug: custom-slug            # 可选：自定义 URL
---

正文内容...
```

## 技术栈

- Astro 5.0（静态站点生成）
- Tailwind CSS 3.4
- TypeScript 5.7
- MDX 支持
- Alpine.js（轻量交互）
- Giscus（评论系统）

## 字体

站点使用 One UI Sans（`public/fonts/sans.woff2`，329KB），通过 `@font-face` 本地加载，不依赖 Google Fonts。该字体仅覆盖拉丁字符，中文自动回退到系统字体（PingFang SC / Microsoft YaHei 等）。

## 目录结构

```
astro-blog/
├── public/              # 静态资源（字体、图片）
├── src/
│   ├── assets/          # 文章图片
│   ├── components/      # 组件（Navbar、Footer、SEO 等）
│   ├── content/posts/   # 文章 Markdown
│   ├── layouts/         # 布局（BaseLayout、PostLayout）
│   ├── pages/           # 页面路由
│   ├── styles/          # 全局样式
│   ├── utils/           # 工具函数
│   └── consts.ts        # 站点常量
├── astro.config.mjs
└── tailwind.config.js
```

## 部署

静态构建产物在 `dist/`，可部署到任何静态托管服务（Vercel、Netlify、Cloudflare Pages 等）。

## 许可

仅供学习交流使用。
