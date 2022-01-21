import { defineComponent } from 'vue'

import { ROUTE } from '@/router'

import styles from './index.module.css'

export default defineComponent({
  name: ROUTE.SHOP.name,
  render() {
    return <div class={styles.view}>商铺</div>
  }
})
