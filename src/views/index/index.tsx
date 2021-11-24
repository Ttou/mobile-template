import { Button } from 'vant'
import { defineComponent } from 'vue'

import * as css from './index.css'

export default defineComponent({
  render() {
    return (
      <div class={css.view}>
        <h2>首页</h2>
        <Button type="primary">点击</Button>
      </div>
    )
  }
})
