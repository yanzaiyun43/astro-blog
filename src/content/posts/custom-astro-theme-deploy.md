---
title: "自定义 Astro 博客主题与部署全攻略"
description: "从本地开发到生产部署，手把手教你定制主题、修改配色、添加插件，让你的 Astro 博客独一无二。"
publishedAt: 2026-09-05
category: "教程"
tags: ["Astro", "主题", "部署", "Tailwind", "自定义"]
featured: false
slug: custom-astro-theme-deploy
---

# 前言

这篇文章面向已经把 **astro‑blog** 项目克隆到本地的开发者，帮助你在 **本地预览**、**自定义主题**、**配置插件**、以及 **生产环境部署**（Vercel、Netlify、GitHub Pages）之间顺畅切换。所有步骤均基于项目当前的结构（`src/consts.ts`、`tailwind.config.js`、`astro.config.mjs`），不需要额外依赖。

---

## 1. 本地开发准备

```bash
# 1. 克隆（已经完成）
# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

打开浏览器访问 `http://localhost:4321`，你会看到默认的 **旧识桥** 首页。接下来我们进入主题定制。

---

## 2. 定制站点信息（站点元数据）

站点的名称、描述、作者、语言等集中在 `src/consts.ts`，修改后所有页面会自动更新。

```typescript
export const SITE = {
  name: "我的星际博客",
  title: "技术与生活的交叉点",
  description: "记录前端、后端、DevOps 等技术分享，也写点生活随笔。",
  shortDescription: "技术+生活",
  url: "https://myblog.example.com",
  defaultAuthor: "myname",
  language: "zh-CN",
  charset: "UTF-8",
  favicon: {
    svg: "/favicon.svg",
    ico: "/favicon.ico",
  },
} as const;
```

> **提示**：修改后直接刷新 `localhost:4321` 即可看到效果，无需重新启动。

---

## 3. 调整导航菜单

`src/consts.ts` 中的 `NAVIGATION` 定义了导航链接。比如想新增 **项目** 页面：

```typescript
export const NAVIGATION = {
  home: "/",
  posts: "/posts",
  archive: "/archive",
  projects: "/projects", // 新增
  friends: "/friends",
  about: "/about",
  rss: "/rss.xml",
} as const;
```

随后在 `src/pages/` 新建 `projects.astro`（可以复制 `about.astro` 的结构），即可在导航栏看到新入口。

---

## 4. 主题配色与全局样式

### 4.1 Tailwind 配色

打开根目录的 `tailwind.config.js`（如果不存在，可自行创建），添加自定义颜色变量：

```javascript
module.exports = {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // 蓝色主色
        accent: "#fbbf24", // 琥珀强调色
      },
    },
  },
  plugins: [],
};
```

### 4.2 CSS 变量（全局）

在 `src/styles/global.css` 中可以覆盖默认变量：

```css
:root {
  --color-primary: #3b82f6;
  --color-bg: #f9fafb;
  --color-text: #1f2937;
}
```

> **注意**：Tailwind 的 `text-primary`、`bg-primary` 等类会自动使用上面的自定义颜色。

---

## 5. 代码高亮主题切换

项目使用 **shiki** 进行代码块高亮，主题在 `astro.config.mjs` 中配置。

```javascript
markdown: {
  shikiConfig: {
    theme: "github-dark", // 更换为暗色主题
    wrap: true,
  },
},
```

可选主题列表请参考 https://github.com/shikijs/shiki/tree/main/packages/themes。

---

## 6. 添加自定义插件

### 6.1 使用 Giscus 评论（已集成）

若想改为自己的 Discussions，编辑 `src/components/Giscus.astro`，替换以下配置：

```tsx
const GISCUS_CONFIG = {
  repo: "yourname/yourrepo",
  repoId: "<repo-id>",
  category: "General",
  categoryId: "<category-id>",
};
```

### 6.2 添加 Google Analytics

在 `src/layouts/BaseLayout.astro` `<head>` 区域加入：

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

---

## 7. 本地构建与预览

```bash
npm run build   # 生成 dist 目录（静态文件）
npm run preview # 本地预览构建产物，默认 http://localhost:4321
```

构建成功后，`dist` 里会出现 `index.html`、`assets/`、`posts/` 等文件，这正是部署到 CDN 或静态托管平台所需的内容。

---

## 8. 部署到生产环境

### 8.1 Vercel（推荐）

1. 登录 Vercel，点击 **New Project** → **Import Git Repository** → 选择 `astro-blog`。
2. 保持默认的 **Framework Preset = Astro**，点击 **Deploy**。
3. 部署完成后 Vercel 会自动运行 `npm install && npm run build`，并把 `dist` 目录作为输出。

### 8.2 Netlify

1. 在 Netlify 新建站点，连接 GitHub 仓库。
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`
4. 保存并部署。

### 8.3 GitHub Pages（手动）

```bash
# 生成静态文件
npm run build

# 将 dist 内容推送到 gh‑pages 分支
git checkout --orphan gh-pages
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy site"
git push origin gh-pages --force
```

> **提醒**：GitHub Pages 需要在仓库设置里把 **Source** 设为 `gh-pages` 分支。

---

## 9. 常见问题排查

| 问题 | 解决方案 |
|------|----------|
| 本地 `npm run dev` 报错 `Cannot find module '@astrojs/tailwind'` | 确认 `node_modules` 已完整安装，重新运行 `npm install`。 |
| 部署后页面样式丢失 | 检查 `tailwind.config.js` 的 `content` 路径是否覆盖所有 `.astro`、`.md` 文件。 |
| 代码块没有高亮 | 确认 `astro.config.mjs` 中 `markdown.shikiConfig.theme` 已设置为有效主题。 |
| 评论区不显示 | 确认 Giscus 的 `repoId` 与 `categoryId` 正确，且仓库已开启 **Discussions**。 |

---

## 10. 小结

通过上述步骤，你已经完成：

1. 本地开发与实时预览
2. 站点元信息、导航、配色、全局样式的自定义
3. 代码块主题切换与插件集成（评论、统计）
4. 完整的生产构建与三大主流托管平台的部署

现在，你的 Astro 博客已经拥有独一无二的外观与完整的 CI/CD 流程，随时可以向全网展示你的技术沉淀与生活记录。祝写作愉快 🚀
