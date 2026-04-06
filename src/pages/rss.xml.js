import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE } from '../consts';
import { filterPublished, sortPosts } from '../utils/content';

export async function GET(context) {
  const posts = await getCollection('posts');
  const published = filterPublished(posts);
  const sorted = sortPosts(published);
  
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: sorted.slice(0, 20).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/posts/${post.id.replace(/\.mdx?$/, '').replace(/\/index$/, '')}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>${SITE.language}</language>`,
  });
}
