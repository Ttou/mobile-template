import { defineComponent } from 'vue'

import { ROUTE } from '@/router'

import styles from './index.module.css'

export default defineComponent({
  name: ROUTE.CATEGORY.name,
  render() {
    return <div class={styles.view}>分类</div>
  }
})
