import { Button } from 'vant'
import { defineComponent, onMounted, ref } from 'vue'

import { commonApi } from '@/apis'
import { useLoading } from '@/hooks'
import { ROUTE } from '@/router'

import { useCount, useInit } from './hooks'
import styles from './index.module.css'

export default defineComponent({
  name: ROUTE.INDEX.name,
  setup() {
    const { ...countHook } = useCount()
    const { ...initHook } = useInit()

    return {
      ...countHook,
      ...initHook
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
