# Astro v5 迁移适配记录

本项目已从 Astro v4 迁移到 Astro v5，以下是所有适配修改的汇总。

## 主要变更

### 1. 内容集合 API 变更

#### `post.slug` → `post.id`

在 Astro v5 中，内容集合项不再自动包含 `slug` 属性，需要使用 `id` 属性代替。

**修复的文件：**
- `src/pages/posts/[...slug].astro` - 动态路由参数
- `src/pages/rss.xml.js` - RSS 链接生成
- `src/components/SearchData.astro` - 搜索数据
- `src/utils/content.ts` - `mapToBlogPost` 函数
- `src/pages/posts/[...slug].astro` - 上一篇/下一篇导航

**转换代码：**
```typescript
// 旧代码
const slug = post.slug;

// 新代码
const slug = post.id.replace(/\.mdx?$/, '').replace(/\/index$/, '');
```

### 2. `render()` 函数导入方式

在 Astro v5 中，`render()` 函数需要从 `astro:content` 显式导入，而不是作为集合项的方法。

**修复的文件：**
- `src/pages/posts/[...slug].astro`

**变更：**
```typescript
// 旧代码
import { getCollection } from 'astro:content';
const { Content, headings } = await post.render();

// 新代码
import { getCollection, render } from 'astro:content';
const { Content, headings } = await render(post);
```

### 3. 内容集合配置

Astro v5 使用新的内容集合配置方式，配置文件位于 `src/content.config.ts`（而非 `src/content/config.ts`）。

**配置文件：** `src/content.config.ts`

**关键变更：**
- 使用 `astro/loaders` 中的 `glob` 加载器
- 需要显式定义 `posts` 和 `blog` 集合

```typescript
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    // ... schema definition
  }),
});
```

### 4. Slug 生成函数修复

中文分类和标签的 slug 生成需要正确处理中文字符。

**修复的文件：** `src/utils/content.ts`

**变更：**
```typescript
// 旧代码 - 会移除所有中文字符
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  // 移除了中文
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// 新代码 - 保留中文字符
export function generateSlug(text: string): string {
  if (!text || text.trim() === '') return '';
  
  return text
    .trim()
    .replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s-]/g, '')  // 保留中文
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}
```

## 文件修改清单

| 文件 | 修改内容 |
|------|----------|
| `src/content.config.ts` | 添加 posts 集合配置 |
| `src/utils/content.ts` | 修复 slug 生成，适配 mapToBlogPost |
| `src/pages/posts/[...slug].astro` | 使用 post.id，导入 render 函数 |
| `src/pages/rss.xml.js` | 使用 post.id 生成链接 |
| `src/components/SearchData.astro` | 使用 post.id 生成 slug |
| `src/pages/categories/[slug].astro` | 过滤空 slug 分类 |
| `src/pages/tags/[slug].astro` | 过滤空 slug 标签 |

## 验证清单

- [x] 文章列表页面正常显示
- [x] 文章详情页面可正常访问
- [x] 分类页面可正常访问
- [x] 标签页面可正常访问
- [x] RSS 订阅源链接正确
- [x] 搜索功能正常工作
- [x] 上一篇/下一篇导航链接正确
- [x] 构建成功无错误

## 注意事项

1. **slug 一致性**：所有 slug 生成必须使用相同的逻辑 `post.id.replace(/\.mdx?$/, '').replace(/\/index$/, '')`

2. **空值检查**：分类和标签需要检查空字符串，避免生成无效路由

3. **类型安全**：使用 TypeScript 类型检查确保所有集合项属性正确

## 参考文档

- [Astro v5 升级指南](https://docs.astro.build/en/guides/upgrade-to/v5/)
- [内容集合文档](https://docs.astro.build/en/guides/content-collections/)
