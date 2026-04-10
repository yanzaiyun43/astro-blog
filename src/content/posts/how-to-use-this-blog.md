---
title: "如何使用这个 Astro 博客主题"
description: "详细介绍如何安装、配置和使用这个基于 Astro 的极简博客主题，包括文章写作、自定义配置和部署上线"
publishedAt: 2026-04-07
category: "项目介绍"
tags: ["Astro", "博客", "使用指南", "主题"]
featured: true
---

> 这是一个基于 Astro 5.0 构建的极简风格博客主题，具有高性能、SEO 友好、易于定制等特点。

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/yanzaiyun43/astro-blog.git
cd astro-blog
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321 即可预览博客。

### 4. 构建生产版本

```bash
npm run build
```

构建后的静态文件将输出到 `dist` 目录。

---

## 项目结构

```
astro-blog/
├── src/
│   ├── components/     # 可复用的 UI 组件
│   ├── content/        # 博客文章（Markdown/MDX）
│   │   └── posts/      # 文章存放目录
│   ├── layouts/        # 页面布局组件
│   ├── pages/          # 路由页面
│   ├── styles/         # 全局样式
│   └── consts.ts       # 站点配置常量
├── public/             # 静态资源
├── astro.config.mjs    # Astro 配置文件
└── package.json
```

---

## 写作指南

### 创建新文章

在 `src/content/posts/` 目录下创建新的 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章简介，会显示在列表页"
publishedAt: 2026-04-07
category: "分类名称"
tags: ["标签1", "标签2"]
featured: false // 是否置顶文章
pinned: false   // 是否固定置顶（不受时间影响始终排在最前）
slug: "custom-slug" // 可选：自定义URL，只能包含字母、数字、下划线和连字符
---

正文内容支持 Markdown 语法...
```

### 文章前置元数据

| 字段 | 说明 | 必填 |
|------|------|------|
| `title` | 文章标题 | 是 |
| `description` | 文章描述 | 是 |
| `publishedAt` | 发布日期 | 是 |
| `updatedAt` | 更新日期 | 否 |
| `category` | 分类 | 是 |
| `tags` | 标签数组 | 是 |
| `featured` | 是否推荐 | 否 |
| `pinned` | 是否固定置顶（始终排在最前） | 否 |
| `slug` | 自定义URL路径（只能包含字母、数字、下划线和连字符） | 否 |

### Markdown 扩展功能

#### 代码块

支持语法高亮，请指定语言：

```javascript
console.log('Hello World');
```

#### 表格

表格会自动添加横向滚动条，适配移动端：

| 功能 | 状态 |
|------|------|
| 深色模式 | 已移除 |
| 代码复制 | 支持 |
| 响应式设计 | 支持 |

#### 图片

```markdown
![图片描述](/images/example.jpg)
```

#### 引用

> 这是一个引用块

---

## 自定义配置

### 站点信息

编辑 `src/consts.ts` 文件：

```typescript
export const SITE = {
  name: '你的博客名称',
  defaultAuthor: '作者名',
  shortDescription: '博客简介',
  description: '详细描述',
  url: 'https://your-domain.com',
  // ... 其他配置
};
```

### 导航链接

```typescript
export const NAVIGATION = {
  home: '/',
  archive: '/archive',
  friends: '/friends',
  about: '/about',
};
```

### 社交链接

```typescript
export const SOCIAL_LINKS = {
  github: 'https://github.com/username',
  email: 'mailto:email@example.com',
  rss: '/rss.xml',
  sitemap: '/sitemap-index.xml',
};
```

---

## 主题定制

### 修改配色

编辑 `src/styles/global.css` 中的 CSS 变量：

```css
:root {
  --color-primary: #7dd3fc;
  --color-bg: #fafaf9;
  --color-text: #44403c;
  /* ... 其他颜色 */
}
```

### 代码高亮主题

在 `astro.config.mjs` 中修改 Shiki 主题：

```javascript
markdown: {
  shikiConfig: {
    theme: 'one-light', // 可选主题
  },
}
```

可选主题包括：
- `github-light`
- `one-light`
- `material-theme-lighter`
- `vitesse-light`

---

## 部署上线

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目一键部署

---

## 功能特性

### 已集成功能

-  **文章管理**：支持 Markdown/MDX
-  **分类系统**：自动生成分类页面
-  **标签云**：支持标签筛选
-  **归档页面**：按时间展示所有文章
-  **RSS 订阅**：自动生成 RSS 源
-  **站点地图**：自动生成 Sitemap
-  **SEO 优化**：完整的 SEO 元数据
-  **代码复制**：一键复制代码块
-  **响应式设计**：完美适配移动端
-  **表格滚动**：移动端表格横向滚动
-  **搜索功能**：文章标题搜索

### 性能优化

- 静态站点生成（SSG）
- 图片懒加载
- 字体预加载
- 代码分割

---

## 常见问题

### Q: 如何修改置顶文章数量？

在 `src/consts.ts` 中修改 `BLOG_CONFIG.featuredPostsCount`：

```typescript
export const BLOG_CONFIG = {
  postsPerPage: 5, // 每页文章数量
  featuredPostsCount: 2, // 置顶文章数量
  dateFormat: 'yyyy-MM-dd',
  readingSpeed: 300,
} as const;
```

> 置顶文章区域显示的是最新的置顶文章 ，而多余的置顶文章会按时间顺序混入普通文章列表中。

### Q: 如何修改字体？

在 `src/layouts/BaseLayout.astro` 中修改 Google Fonts 链接：

```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
```

### Q: 如何添加评论功能？

可以使用 Giscus（GitHub Discussions）：

编辑 `src/components/Giscus.astro`，配置你的 GitHub 仓库信息： 

```typescript
const GISCUS_CONFIG = {
  repo: '你的用户名/仓库名',
  repoId: '你的仓库ID',
  category: 'Announcements',
  categoryId: '你的分类ID',
  // ... 其他配置
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  lang: 'zh-CN',
};
```

### Q: 如何自定义首页？

编辑 `src/pages/index.astro` 文件，修改首页布局和内容。

---

## 开源协议

本项目基于 MIT 协议开源，你可以自由使用、修改和分发。

GitHub 仓库：https://github.com/yanzaiyun43/astro-blog

如有问题，欢迎提交 Issue 或 PR。

> 祝你使用愉快，写出更多优质文章！
