import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { SITE } from './src/consts.ts';

export default defineConfig({
  site: SITE.url,
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
    alpinejs()
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-light',
      wrap: true,
      transformers: [
        {
          pre(node) {
            node.properties.class = 'relative group';
            // 移除 pre 标签上的颜色样式，让代码自己控制颜色
            if (node.properties.style) {
              node.properties.style = node.properties.style.replace(/color:[^;]+;?/g, '');
            }
          }
        }
      ]
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: [],
    remotePatterns: []
  },
  prefetch: {
    prefetchAll: true
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
