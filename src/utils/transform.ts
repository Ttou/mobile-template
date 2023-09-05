/**
 * 样式单位转换
 * @param {number} value 像素
 */
export function pxToVw(value: number) {
  return (
    ((value / Number(import.meta.env.VITE_APP_DESIGN_WIDTH)) * 100).toFixed(
      Number(import.meta.env.VITE_APP_DESIGN_UNIT_PRECISION)
    ) + 'vw'
  )
}
