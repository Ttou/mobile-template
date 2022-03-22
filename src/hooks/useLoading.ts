import { type ToastOptions, Toast } from 'vant'
import { ref } from 'vue'

export function useLoading(options?: ToastOptions | string) {
  const loading = ref({} as any)

  /** 开始动画 */
  function start() {
    loading.value = Toast.loading(options)
  }

  /** 清除动画 */
  function clear() {
    loading.value.clear()
  }

  return {
    start,
    clear
  }
}
