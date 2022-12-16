import { showLoadingToast } from 'vant'
import { onBeforeMount, ref } from 'vue'

import { commonApi } from '@/apis'

export function useInit() {
  const title = ref('-')

  async function init() {
    const loading = showLoadingToast({
      message: '加载中',
      duration: 0,
      forbidClick: true
    })

    try {
      const res = await commonApi.getInfo()

      title.value = res.title
    } finally {
      loading.close()
    }
  }

  onBeforeMount(() => {
    init()
  })

  return {
    title
  }
}
