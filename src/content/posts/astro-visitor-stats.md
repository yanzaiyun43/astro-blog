---
title: "Astro 博客添加访客统计"
description: "使用 PHP + MySQL 自建统计后端，搭配 Astro 前端实现访客去重统计、30 天自动更新访客标识、页脚优雅展示"
publishedAt: 2026-02-06
category: "技术分享"
tags: ["Astro", "PHP", "访客统计", "MySQL"]
featured: false
---

## 前言

> 很多 Astro 博客都想展示「访客数」，但纯静态站点无法直接记录数据，第三方统计又难以自定义展示。本教程使用用 PHP + MySQL 自建统计后端，搭配 Astro 前端实现「去重统计、30 天自动更新访客标识、页脚优雅展示」，步骤详细，新手也能跟着做。

## 一、方案说明

### 核心逻辑

1. **前端**：Astro 页脚生成唯一访客标识（visitorId），30 天自动更新，请求 PHP 接口获取统计数据；
2. **后端**：PHP 自动创建数据库和表，通过 visitorId/IP 去重，仅新访客计数；
3. **存储**：MySQL 持久化保存访客记录和总人数，支持直接访问查看统计页面（不计数）。

### 适用场景

- Astro 静态博客/站点
- 有 PHP + MySQL 环境（虚拟主机/云服务器均可）
- 想要自定义访客统计、不依赖第三方服务

## 二、后端搭建：PHP 统计接口

### 2.1 新建 PHP 接口文件

在你的 PHP 环境根目录（如 `public_html/`）新建 `visit.php` 文件，复制以下完整代码：

```php
<?php
// 允许跨域（上线后替换为你的域名，如 https://你的博客域名）
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

// 数据库配置（修改为你的 MySQL 信息）
$db_host = 'localhost';
$db_name = 'astro_visits'; // 数据库名，可自定义
// ... 后续代码
```

## 三、前端集成

在 Astro 页脚组件中引入统计脚本，发送 visitorId 到 PHP 接口并展示数据。

## 四、部署与验证

1. 上传 PHP 文件到服务器
2. 确保 MySQL 数据库可访问
3. 访问博客查看页脚统计数字
