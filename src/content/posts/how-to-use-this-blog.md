---
title: "这个博客怎么用？写篇教程记录一下"
description: "记录一下这个 Astro 博客的使用方法，方便以后忘了回来看"
publishedAt: 2026-04-07
category: "项目介绍"
tags: ["Astro", "博客", "使用指南", "主题"]
featured: false
slug: how-to-blog
---

之前搭了这个博客，怕以后忘了怎么操作，就写篇教程记录一下。如果你也想用，可以参考。

## 快速开始

### 1. 下载代码

```bash
git clone https://github.com/yanzaiyun43/astro-blog.git
cd astro-blog
```

### 2. 安装依赖

```bash
npm install
```

### 3. 本地预览

```bash
npm run dev
```

打开 http://localhost:4321 就能看到效果。

### 4. 打包构建

```bash
npm run build
```

打包后的文件在 `dist` 目录里。

---

## 项目结构

```
astro-blog/
├── src/
│   ├── components/     # 组件
│   ├── content/        # 文章内容
│   │   └── posts/      # 文章放这里
│   ├── layouts/        # 布局
│   ├── pages/          # 页面
│   ├── styles/         # 样式
│   └── consts.ts       # 配置文件
├── public/             # 静态文件
├── astro.config.mjs    # Astro 配置
└── package.json
```

---

## 怎么写文章

### 创建文章

在 `src/content/posts/` 下新建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章简介"
publishedAt: 2026-04-07
category: "分类"
tags: ["标签1", "标签2"]
featured: false  # 是否置顶
pinned: false    # 是否固定置顶
slug: "自定义URL"
---

正文写这里...
```

### 字段说明

| 字段 | 说明 | 必填 |
|------|------|------|
| `title` | 标题 | 是 |
| `description` | 简介 | 是 |
| `publishedAt` | 发布日期 | 是 |
| `updatedAt` | 更新日期 | 否 |
| `category` | 分类 | 是 |
| `tags` | 标签 | 是 |
| `featured` | 是否推荐 | 否 |
| `pinned` | 是否固定置顶 | 否 |
| `slug` | 自定义URL | 否 |

### Markdown 功能

**代码块**（支持语法高亮）：

```javascript
console.log('Hello');
```

**表格**：

| 功能 | 状态 |
|------|------|
| 深色模式 | 支持 |
| 代码复制 | 支持 |

**图片**：

```markdown
![描述](/images/example.jpg)
```

**引用**：

> 引用内容

---

## 自定义配置

### 站点信息

改 `src/consts.ts`：

```typescript
export const SITE = {
  name: '博客名称',
  defaultAuthor: '作者名',
  description: '博客描述',
  url: 'https://你的域名.com',
  // ...
};
```

### 导航菜单

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
  github: 'https://github.com/用户名',
  email: 'mailto:邮箱@example.com',
  rss: '/rss.xml',
};
```

---

## 改样式

### 修改颜色

改 `src/styles/global.css` 里的 CSS 变量：

```css
:root {
  --color-primary: #7dd3fc;
  --color-bg: #fafaf9;
  --color-text: #44403c;
}
```

### 改代码高亮主题

在 `astro.config.mjs` 里改：

```javascript
markdown: {
  shikiConfig: {
    theme: 'one-light',
  },
}
```

可选主题：`github-light`、`one-light`、`material-theme-lighter` 等。

---

## 部署

### Vercel（推荐）

1. 代码推送到 GitHub
2. Vercel 导入项目一键部署

---

## 常见问题

### 置顶文章数量怎么改？

改 `src/consts.ts`：

```typescript
export const BLOG_CONFIG = {
  postsPerPage: 5,        // 每页文章数
  featuredPostsCount: 2,  // 置顶文章数量
};
```

### 怎么加评论？

用 Giscus（基于 GitHub Discussions）：

编辑 `src/components/Giscus.astro`，填你的仓库信息：

```typescript
const GISCUS_CONFIG = {
  repo: '用户名/仓库名',
  repoId: '仓库ID',
  category: 'Announcements',
  categoryId: '分类ID',
};
```

### 怎么改字体？

改 `src/layouts/BaseLayout.astro` 里的 Google Fonts 链接。

---

## 最后

基本就这些。有问题可以提 Issue，虽然我不一定及时回，但会看。


GitHub 仓库：https://github.com/yanzaiyun43/astro-blog
