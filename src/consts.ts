export const SITE = {
  name: '旧识桥',
  title: '什么都略懂一点，生活更多彩一些',
  description: '我是ailmel，这里是旧识桥博客，博客内有技术分享与生活记录。在这里，你可以找到关于前端开发、博客搭建等实用内容，也能读到随性的日常随笔。希望每一位访客都能有所收获。',
  shortDescription: '什么都略懂一点，生活更多彩一些',
  url: 'https://ailmel.top',
  defaultAuthor: 'ailmel',
  language: 'zh-CN',
  charset: 'UTF-8',
  favicon: {
    svg: '/favicon.svg',
    ico: '/favicon.ico',
  },
} as const;

export const NAVIGATION = {
  home: '/',
  posts: '/posts',
  archive: '/archive',
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
  postsPerPage: 10,
  featuredPostsCount: 2, // 置顶文章数量
  dateFormat: 'yyyy-MM-dd',
  readingSpeed: 300, // 每分钟阅读字数
} as const;

export const HERO_TYPEWRITER = {
  texts: [
    'Per asprera ad astra.',
    '循此苦旅，终抵群星。',
  ],
  typeSpeed: 150,
  deleteSpeed: 100,
  pauseTime: 2000,
} as const;

export const META = {
  keywords: ['博客', '技术', '设计', '生活', "旧识桥", "旧识桥博客", "技术分享", "开源阅读", "ailmel官网", "ailmel博客", "ailmel","Astro"],
  author: SITE.defaultAuthor,
  robots: 'index, follow',
  themeColor: '#f0f9ff',
} as const;
