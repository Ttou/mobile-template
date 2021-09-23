import { defineComponent } from 'vue'

import * as css from './index.css'

export default defineComponent({
  render() {
    return <div class={css.view}>商铺</div>
  }
})
