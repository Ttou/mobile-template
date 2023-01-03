import { showLoadingToast } from 'vant'
import { onBeforeMount, reactive, toRefs } from 'vue'

import { commonApi } from '@/apis'

export function useInit() {
  const state = reactive({
    title: '-'
  })

  async function init() {
    const loading = showLoadingToast({
      message: '加载中',
      duration: 0,
      forbidClick: true
    })

    try {
      const res = await commonApi.getInfo()

      state.title = res.title
    } finally {
      loading.close()
    }
  }

  onBeforeMount(() => {
    init()
  })

  return {
    ...toRefs(state)
  }
}
