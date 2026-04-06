import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://ailmel.top',
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
      theme: 'github-light',
      darkTheme: 'github-dark',
      wrap: true,
      transformers: [
        {
          pre(node) {
            node.properties.class = 'relative group';
          }
        }
      ]
    },
    remarkPlugins: [],
    rehypePlugins: [],
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
