---
title: '给博客加上 IndexNow，让搜索引擎秒收录'
description: '分享如何为 Astro 博客添加 IndexNow 功能，让 Bing 等搜索引擎更快发现你的新文章。'
publishedAt: 2026-04-19
category: '技术分享'
tags: ['SEO', 'IndexNow', 'Bing', 'Astro']
---

前几天写了几篇文章，发现 Bing 搜索一直搜不到，等了快一周才有收录。后来了解到有个叫 IndexNow 的东西，可以让搜索引擎主动来抓取你的新内容，不用干等着爬虫上门。

## 什么是 IndexNow

简单说，IndexNow 就是一个通知系统。你发了新文章，或者改了旧文章，通过这个协议告诉搜索引擎一声，它们就会尽快派爬虫过来看看。比被动等着快多了。

目前支持 IndexNow 的搜索引擎有：
- **Bing**（微软的）
- **Yandex**（俄罗斯的）
- **Naver**（韩国的）
- 还有几个小众的

Google 暂时还不支持，不过 Bing 在国内也能用，加上总没坏处。

## 怎么给博客加上

我的博客是用 Astro 搭建的，添加 IndexNow 其实挺简单，主要就三步。

### 第一步：获取 API Key

先去 [Bing Webmaster Tools](https://www.bing.com/webmasters) 注册账号，添加你的网站。验证通过后，在设置里能找到 IndexNow 的 API Key。

这个 Key 是一串 32 位的字符，类似这样：
```
a1b2c3d4e5f6789012345678abcdef90
```

### 第二步：创建验证文件

在网站根目录创建一个 txt 文件，文件名就是你的 API Key，内容也是这个 Key。

比如我的：
```
public/a1b2c3d4e5f6789012345678abcdef90.txt
```

内容：
```
a1b2c3d4e5f6789012345678abcdef90
```

这样 Bing 能访问 `https://你的域名/a1b2c3d4e5f6789012345678abcdef90.txt` 来验证这个 Key 确实属于你。

### 第三步：写个推送脚本

每次发新文章后，需要把 URL 推送给 IndexNow。我写了个 Node.js 脚本来自动做这个事。

脚本会：
1. 读取 `src/content/posts` 目录下的所有文章
2. 过滤掉草稿（frontmatter 里 `draft: true` 的）
3. 生成完整的 URL 列表
4. 一次性推送给 IndexNow

核心代码就这几行：

```javascript
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    host: 'ailmel.top',
    key: '你的APIKey',
    urlList: [
      'https://ailmel.top/',
      'https://ailmel.top/posts/新文章/',
      // ... 其他 URL
    ]
  })
});
```

我把这个脚本放在 `package.json` 里，跑 `npm run submit:indexnow` 就能一键推送。

## 一些注意事项

- **不要滥用**：虽然 IndexNow 没有严格的频率限制，但也没必要疯狂推送。一般新文章或者重要更新再推。
- **Key 要保密**：虽然验证文件是公开的，但最好别到处宣扬你的 Key。
- **配合 Sitemap 使用**：IndexNow 是主动推送，Sitemap 是被动发现，两个一起用效果更好。

## 总结

IndexNow 是个挺实用的小工具，配置简单，效果明显。对于内容更新不频繁的博客来说，能让搜索引擎更快发现你的内容。

如果你也在用 Astro，可以参考我的实现方式。其他框架思路也差不多，就是读取文章列表然后调个 API 的事。

---

**参考链接：**
- [IndexNow 官方文档](https://www.indexnow.org/)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
