# 部署指南

旧识桥支持多种静态托管平台，以下是各平台的部署方法。

## 通用配置

在部署前，请确保以下配置已更新：

- `src/consts.ts` - 站点名称、描述、域名、作者信息
- `astro.config.mjs` - 检查 `site` 配置是否为 `https://ailmel.top`

## Vercel 部署

### 方法一：通过 Git 部署（推荐）

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 登录 [Vercel](https://vercel.com)
3. 点击 "Add New Project"
4. 导入你的仓库
5. 框架预设选择 `Astro`
6. 点击 "Deploy"

### 方法二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

### 自定义域名

1. 在 Vercel 项目设置中选择 "Domains"
2. 添加 `ailmel.top`
3. 按照提示配置 DNS 记录

## Netlify 部署

### 方法一：通过 Git 部署

1. 将代码推送到 GitHub
2. 登录 [Netlify](https://netlify.com)
3. 点击 "Add new site" → "Import an existing project"
4. 选择你的仓库
5. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 "Deploy site"

### 方法二：通过 Netlify CLI

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 登录
netlify login

# 初始化并部署
netlify init
netlify deploy --prod --dir=dist
```

### 自定义域名

1. 在 Netlify 项目设置中选择 "Domain management"
2. 点击 "Add custom domain"
3. 输入 `ailmel.top`
4. 配置 DNS 记录指向 Netlify

## GitHub Pages 部署

### 使用 GitHub Actions 自动部署

1. 在仓库设置中启用 GitHub Pages
2. 选择 "GitHub Actions" 作为源
3. 创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 自定义域名

1. 在仓库根目录创建 `CNAME` 文件，内容为 `ailmel.top`
2. 在域名 DNS 设置中添加 CNAME 记录指向 `<username>.github.io`

## Cloudflare Pages 部署

### 方法一：通过 Git 部署

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 选择 "Pages" → "Create a project"
3. 连接你的 Git 仓库
4. 构建设置：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 点击 "Save and Deploy"

### 方法二：通过 Wrangler CLI

```bash
# 安装 Wrangler
npm i -g wrangler

# 登录
wrangler login

# 部署
wrangler pages deploy dist --project-name=old-bridge
```

### 自定义域名

1. 在 Cloudflare Pages 项目设置中选择 "Custom domains"
2. 添加 `ailmel.top`
3. Cloudflare 会自动处理 DNS 配置

## 本地构建测试

在部署前，建议先在本地构建并测试：

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 部署检查清单

- [ ] 站点名称和描述已更新
- [ ] 域名配置正确
- [ ] 作者信息已更新
- [ ] 社交链接已更新
- [ ] 关于页面已个性化
- [ ] 友链页面已配置
- [ ] 构建成功无错误
- [ ] 自定义域名已配置
- [ ] HTTPS 证书已生效

## 常见问题

### 构建失败

检查 `astro.config.mjs` 中的配置：
```javascript
export default defineConfig({
  site: 'https://ailmel.top',
  // ...
});
```

### 图片不显示

确保图片路径正确，建议使用相对路径或完整的 URL。

### 路由 404

静态托管平台需要配置重定向规则，Astro 已自动生成 `_redirects` 文件。

### 自定义域名不生效

- 检查 DNS 记录是否正确配置
- 等待 DNS 传播（通常需要几分钟到几小时）
- 确保域名已添加到托管平台的自定义域名列表

---

如有问题，欢迎通过邮件 hi@ailmel.top 联系。
