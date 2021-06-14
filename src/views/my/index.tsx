import { defineComponent } from 'vue'
import { Banner, Entry, Header, Order, Wallet } from './components'
import './index.less'

export default defineComponent({
  setup() {
    return () => <div class="my-view">我的</div>
  }
})
