/**
 * 获取图片链接
 * @param {string} imgPath 图片路径
 */
export function getImgUrl(imgPath: string) {
  return new URL(`../assets/${imgPath}`, import.meta.url).href
}
