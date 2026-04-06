export const SITE = {
  name: '旧识桥',
  title: '旧识桥 - ailmel 的博客',
  description: '记录技术、设计与生活的点滴思考',
  url: 'https://ailmel.top',
  defaultAuthor: 'ailmel',
  language: 'zh-CN',
  charset: 'UTF-8',
  ogImage: '/og-image.jpg',
  favicon: {
    svg: '/favicon.svg',
    ico: '/favicon.ico',
  },
} as const;

export const NAVIGATION = {
  home: '/',
  posts: '/posts',
  friends: '/friends',
  about: '/about',
  rss: '/rss.xml',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/yanzaiyun43',
  sitemap: '/sitemap-index.xml',
  email: 'mailto:ailmel@163.com',
  rss: '/rss.xml',
} as const;

export const BLOG_CONFIG = {
  postsPerPage: 6,
  dateFormat: 'yyyy-MM-dd',
  readingSpeed: 300, // 每分钟阅读字数
} as const;

export const HERO_TYPEWRITER = {
  texts: [
    '记录技术、设计与生活的点滴思考',
    '分享极简主义的设计理念',
  ],
  typeSpeed: 150,
  deleteSpeed: 100,
  pauseTime: 2500,
} as const;

export const META = {
  keywords: ['博客', '技术', '设计', '生活', 'ailmel'],
  author: SITE.defaultAuthor,
  robots: 'index, follow',
  themeColor: '#f0f9ff',
} as const;
