import { onBeforeMount, ref } from 'vue'

import { commonApi } from '@/apis'
import { useLoading } from '@/hooks'

export function useInit() {
  const title = ref('-')

  async function init() {
    const { start, clear } = useLoading({
      message: '加载中',
      duration: 0,
      forbidClick: true
    })

    try {
      start()

      const res = await commonApi.getInfo()

      title.value = res.title
    } finally {
      clear()
    }
  }

  onBeforeMount(() => {
    init()
  })

  return {
    title
  }
}
