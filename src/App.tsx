import { ConfigProvider } from 'vant'
import { defineComponent } from 'vue'

import { Page, Tabbar } from './components'
import { useUpdate, useVantConfig } from './hooks'

export default defineComponent({
  name: 'App',
  setup() {
    const config = useVantConfig()

    useUpdate()

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
