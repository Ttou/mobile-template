import { defineComponent } from 'vue'

import { ROUTE } from '@/router'

import * as css from './index.css'

export default defineComponent({
  name: ROUTE.CART.name,
  render() {
    return <div class={css.view}>购物车</div>
  }
})
