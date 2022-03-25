import { Button } from 'vant'
import { computed, defineComponent, onMounted, ref } from 'vue'

import { commonApi } from '@/apis'
import { useLoading } from '@/hooks'
import { ROUTE } from '@/router'
import { useMainStore } from '@/store'

import styles from './index.module.css'

export default defineComponent({
  name: ROUTE.INDEX.name,
  setup() {
    const title = ref('-')

    const mainStore = useMainStore()

    const count = computed(() => mainStore.count)

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

    function handleClick() {
      mainStore.add()
    }

    onMounted(() => {
      init()
    })

    return {
      title,
      count,
      handleClick
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <h2>{this.title}</h2>
        <p>{this.count}</p>
        <Button type="primary" onClick={this.handleClick}>
          点击
        </Button>
      </div>
    )
  }
})
