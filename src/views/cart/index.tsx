import { defineComponent } from 'vue'

import { ROUTE } from '@/router'

import styles from './index.module.css'

export default defineComponent({
  name: ROUTE.CART.name,
  render() {
    return <div class={styles.view}>购物车</div>
  }
})
