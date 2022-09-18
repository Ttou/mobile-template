import { Icon } from '@iconify/vue'
import { Button, Space } from 'vant'
import { defineComponent } from 'vue'

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
        <div class={styles.section}>
          <h3>Store</h3>
          <p>{this.count}</p>
          <Button type="primary" onClick={this.handleClick}>
            点击
          </Button>
        </div>
        <div class={styles.section}>
          <h3>自定义图标</h3>
          <Space>
            <Icon icon={'custom:coffee'} />
            <Icon icon={'custom:chips'} />
            <Icon icon={'custom:ice-cream'} />
            <Icon icon={'custom-coke'} />
            <Icon icon={'custom-hamburg'} />
          </Space>
        </div>
      </div>
    )
  }
})
