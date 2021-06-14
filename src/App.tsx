import { defineComponent } from 'vue'
import { Page, Tabbar } from './components'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <Page />
        <Tabbar />
      </>
    )
  }
})
