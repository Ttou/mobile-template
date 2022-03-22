import { Button } from 'vant'
import { computed, defineComponent, onMounted } from 'vue'

import { useLoading } from '@/hooks'
import { ROUTE } from '@/router'
import { useMainStore } from '@/store'

import styles from './index.module.css'

export default defineComponent({
  name: ROUTE.INDEX.name,
  setup() {
    const mainStore = useMainStore()

    const count = computed(() => mainStore.count)

    function init() {
      const { start, clear } = useLoading({
        message: '加载中',
        duration: 0,
        forbidClick: true
      })

      start()

      setTimeout(() => {
        clear()
      }, 1500)
    }

    function handleClick() {
      mainStore.add()
    }

    onMounted(() => {
      init()
    })

    return {
      count,
      handleClick
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <h2>首页</h2>
        <p>{this.count}</p>
        <Button type="primary" onClick={this.handleClick}>
          点击
        </Button>
      </div>
    )
  }
})
