import { Icon } from '@iconify/vue'
import { Button, Popup, Space } from 'vant'
import { defineComponent } from 'vue'

import { ROUTE } from '@/router'

import { useCount, useInit, usePopup } from './hooks'
import styles from './index.module.css'

export default defineComponent({
  name: ROUTE.INDEX.name,
  setup() {
    const countHook = useCount()
    const initHook = useInit()
    const popupHook = usePopup()

    return {
      ...countHook,
      ...initHook,
      ...popupHook
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
          <h3>框架图标</h3>
          <Space>
            <Icon icon={'ant-design:account-book-filled'} />
            <Icon icon={'ant-design:aim-outlined'} />
            <Icon icon={'ant-design:alert-filled'} />
          </Space>
        </div>
        <div class={styles.section}>
          <h3>弹出层</h3>
          <Button type={'primary'} onClick={this.handleShow}>
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
        <Popup
          ref="popupRef"
          v-model:show={this.show}
          position={'center'}
          teleport="#app"
          closeable
          onOpen={this.handleOpen}
          v-slots={{
            ['default']: () => <div class={styles.popupContent}>哈哈</div>
          }}
        />
      </div>
    )
  }
})
