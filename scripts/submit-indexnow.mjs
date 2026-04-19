import { readdir, readFile } from 'fs/promises';
import { join, basename, extname } from 'path';
import matter from 'gray-matter';

const SITE_URL = 'https://ailmel.top';
const INDEXNOW_KEY = '2e7aa7e93852452caad26f4ae390262c';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const POSTS_DIR = './src/content/posts';

async function getAllPosts() {
  const urls = [];
  
  try {
    const files = await readdir(POSTS_DIR);
    
    for (const file of files) {
      if (file.endsWith('.md') || file.endsWith('.mdx')) {
        const content = await readFile(join(POSTS_DIR, file), 'utf-8');
        const { data } = matter(content);
        
        // 跳过草稿
        if (data.draft) continue;
        
        const slug = basename(file, extname(file)).replace(/\/index$/, '');
        urls.push(`${SITE_URL}/posts/${slug}/`);
      }
    }
  } catch (error) {
    console.error('读取文章失败:', error);
  }
  
  return urls;
}

async function submitToIndexNow(urls) {
  if (urls.length === 0) return true;

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: new URL(SITE_URL).host,
        key: INDEXNOW_KEY,
        urlList: urls,
      }),
    });

    if (response.ok) {
      console.log(`✅ IndexNow: 成功推送 ${urls.length} 个 URL`);
      return true;
    } else {
      console.error(`❌ IndexNow: 推送失败 - ${response.status} ${response.statusText}`);
      const text = await response.text();
      console.error('响应:', text);
      return false;
    }
  } catch (error) {
    console.error('❌ IndexNow: 推送错误', error);
    return false;
  }
}

async function submitAllPosts() {
  console.log('🚀 开始推送文章到 IndexNow...\n');

  const postUrls = await getAllPosts();
  
  // 添加首页和归档页
  const urls = [
    `${SITE_URL}/`,
    `${SITE_URL}/archive/`,
    ...postUrls
  ];

  console.log(`📄 准备推送 ${urls.length} 个 URL:`);
  urls.forEach(url => console.log(`   - ${url}`));
  console.log('');

  const success = await submitToIndexNow(urls);

  if (success) {
    console.log('\n✅ 所有 URL 推送成功！');
  } else {
    console.error('\n❌ 推送失败');
    process.exit(1);
  }
}

submitAllPosts();
