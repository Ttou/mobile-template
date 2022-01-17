import { defineComponent } from 'vue'

import { ROUTE } from '@/router'

import * as css from './index.css'

export default defineComponent({
  name: ROUTE.CATEGORY.name,
  render() {
    return <div class={css.view}>分类</div>
  }
})
