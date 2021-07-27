import { defineComponent } from 'vue'

import { Page, Tabbar } from './components'

export default defineComponent({
  name: 'App',
  render() {
    return (
      <>
        <Page />
        <Tabbar />
      </>
    )
  }
})
