import { SITE } from '../consts';

const INDEXNOW_KEY = '2e7aa7e93852452caad26f4ae390262c';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

/**
 * 推送 URL 到 IndexNow
 * @param urls 要推送的 URL 列表
 */
export async function submitToIndexNow(urls: string[]): Promise<boolean> {
  if (urls.length === 0) return true;

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: new URL(SITE.url).host,
        key: INDEXNOW_KEY,
        urlList: urls,
      }),
    });

    if (response.ok) {
      console.log(`✅ IndexNow: 成功推送 ${urls.length} 个 URL`);
      return true;
    } else {
      console.error(`❌ IndexNow: 推送失败 - ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.error('❌ IndexNow: 推送错误', error);
    return false;
  }
}

/**
 * 推送单个 URL
 */
export async function submitUrl(url: string): Promise<boolean> {
  return submitToIndexNow([url]);
}
