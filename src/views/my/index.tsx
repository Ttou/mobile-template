import { defineComponent } from 'vue'

import { ROUTE } from '@/router'

import styles from './index.module.css'

export default defineComponent({
  name: ROUTE.MY.name,
  render() {
    return <div class={styles.view}>我的</div>
  }
})
