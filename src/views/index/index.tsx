import { Button, Toast } from 'vant'
import { defineComponent, onMounted } from 'vue'

import * as css from './index.css'

export default defineComponent({
  setup() {
    function init() {
      const loading = Toast.loading({
        message: '加载中',
        duration: 0,
        forbidClick: true
      })

      setTimeout(() => {
        loading.clear()
      }, 1500)
    }

    onMounted(() => {
      init()
    })
  },
  render() {
    return (
      <div class={css.view}>
        <h2>首页</h2>
        <Button type="primary">点击</Button>
      </div>
    )
  }
})
