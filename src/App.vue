<template>
  <ConfigProvider v-bind="config">
    <Page />
    <Tabbar />
  </ConfigProvider>
</template>

<script lang="ts">
import { ConfigProvider } from 'vant'
import { defineComponent } from 'vue'

import { Page, Tabbar } from './components'
import { useUpdate, useVantConfig } from './hooks'

export default defineComponent({
  name: 'App',
  components: {
    Page,
    Tabbar,
    ConfigProvider
  },
  setup() {
    const config = useVantConfig()

    useUpdate()

    return {
      config
    }
  }
})
</script>
