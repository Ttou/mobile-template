import { ConfigProvider } from 'vant'
import { defineComponent } from 'vue'

import { Page, Tabbar } from './components'
import { useConfig } from './hooks'

export default defineComponent({
  name: 'App',
  setup() {
    const config = useConfig()

    return {
      config
    }
  },
  render() {
    return (
      <ConfigProvider {...this.config}>
        <Page />
        <Tabbar />
      </ConfigProvider>
    )
  }
})
