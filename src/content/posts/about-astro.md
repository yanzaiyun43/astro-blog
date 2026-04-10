---
title: "关于 Astro"
description: "Astro 是专为内容型网站设计的静态站点生成器（SSG），用最少的 JavaScript 交付最快的页面"
publishedAt: 2026-01-07
category: "教程"
tags: ["Astro", "架构设计", "性能优化"]
featured: false
---

> Astro 是专为**内容型网站**设计的静态站点生成器（SSG），用最少的 JavaScript 交付最快的页面。

**优势**：

-  **岛屿架构**：只在需要交互的地方加载 JS（比如评论区），首页零JS
-  **多框架自由**：React/Vue/Svelte 组件可混用，老项目平滑迁移
-  **天生 SEO 友好**：纯 HTML 输出，搜索引擎友好（博客/文档站神器）

💡 适合你吗？  

✅ 合适：博客、作品集、企业官网、文档站、营销落地页

❌ 不适合：复杂后台系统、实时聊天应用

---

## 环境准备

1. **检查 Node 版本**（终端执行）：

```bash
node -v
```

2. **要求：Node.js 18.14.0+**（推荐 LTS 20.x）

3. **无需全局安装 Astro**（现代工具链已淘汰 `npm install -g`）

---

## 三步创建项目

### 1. 执行创建命令（自动引导）

```bash
npm create astro@latest
```

### 2. 按提示选择配置

- 项目名称：输入你的项目名
- 模板：选择推荐模板或空白模板
- TypeScript：推荐选择 Yes
- Git 初始化：推荐选择 Yes

### 3. 启动开发服务器

```bash
cd 你的项目名
npm run dev
```

访问 http://localhost:4321 查看效果。