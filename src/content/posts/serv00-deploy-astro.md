---
title: "用 Serv00 免费主机部署 Astro 博客"
description: "记录一下怎么用 Serv00 这个免费虚拟主机来部署 Astro 博客"
publishedAt: 2026-02-10
updatedAt: 2026-03-05
category: "教程"
tags: ["Serv00", "虚拟主机", "Astro", "部署"]
featured: false
---

> 更新：后来觉得在虚拟主机上更新博客太麻烦，已经迁移到 Vercel 了。但这篇教程还是留着，给想试试 Serv00 的朋友参考。

之前想找个免费的地方放博客，搜了一圈发现 Serv00 挺火的。虽然配置过程有点折腾，但毕竟是免费的，还要啥自行车。

## Serv00 是啥

一个免费的虚拟主机，提供：
- 3GB 存储空间
- 每月不限流量（但 CPU 有限制）
- 支持 Node.js
- 能绑定自己的域名

官网：https://www.serv00.com/

**注意**：现在好像暂停新用户注册了，显示 "The server user limit has reached"。有账号的还能用，没账号的可能得等等。

## 准备工作

需要准备：
1. Serv00 账号（已有的前提下）
2. 一个域名（可以用 Serv00 送的免费子域名）
3. 耐心（这个很重要）

登录面板地址：https://panel7.serv00.com/

## 创建网站

1. 登录面板，找到 **WWW websites**，点进去
2. 点 **Add new website**
3. **Domain** 填你的域名（主域名或子域名都行）
4. 点开 **Advanced settings**：
   - Website type 选 **nodejs**
   - Node.js binary 选 **v20** 或 **v22**
   - Environment 保持 **production**
5. 保存

## 部署博客

下面要用 SSH 连到服务器操作。Windows 用户可以用 PowerShell 或者装个 Git Bash。

### 1. 进到你的域名目录

```bash
cd ~/domains/你的域名
```

### 2. 下载 Astro 模板

我用的是这个模板，挺简洁的：

```bash
npm create astro@latest -- --template uxiaohan/vhAstro-Theme astro-blog --yes
```

### 3. 安装依赖

```bash
cd astro-blog
npm install
```

### 4. 构建项目

```bash
npm run build
```

这会生成一个 `dist` 文件夹，里面就是静态文件。

## 把文件放到正确位置

Serv00 的 Node.js 站点默认运行目录是：
```
~/domains/你的域名/public_nodejs/public
```

需要把 `dist` 里的文件复制过去：

```bash
# 先清空原来的文件
rm -rf ~/domains/你的域名/public_nodejs/public/*

# 复制新文件
cp -rf dist/* ~/domains/你的域名/public_nodejs/public/

# 修复权限（有时候需要）
chmod -R 755 ~/domains/你的域名/public_nodejs/public
```

## 完成

现在打开你的域名，应该就能看到博客了。

## 一些坑

- **更新麻烦**：每次改完文章都要 SSH 上去重新构建、复制文件
- **速度慢**：免费主机，别指望有多快
- **偶尔抽风**：有时候连不上，过会儿再试

所以后来我迁移到 Vercel 了，一键部署真香。但如果你就是想试试 Serv00，上面的步骤应该能帮到你。
