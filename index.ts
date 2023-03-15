const cachedImages = {};

/**
 * 传入url和唯一id，缓存图片base64数据
 * @param url 敏感文件的一次性url，通常为ticket_url
 * @param id 文件标志的唯一id，通常为file_id或secret_id
 * @returns base64数据，可以直接给img标签的src属性使用
 */
export async function imageLoader(url: string, id: string) {
  if (cachedImages[id]) {
    return cachedImages[id] as string;
  }

  const response = await fetch(url);
  const blob = await response.blob();
  const reader = new FileReader();

  reader.readAsDataURL(blob);
  return new Promise(async (resolve) => {
    reader.onloadend = () => {
      cachedImages[id] = reader.result as string;
      resolve(cachedImages[id] as string);
    };
  });
}
