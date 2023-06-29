<template>
  <van-config-provider v-bind="config">
    <Page />
    <Tabbar />
  </van-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Page, Tabbar } from './components'
import { useUpdate, useVantConfig } from './hooks'

export default defineComponent({
  name: 'App',
  components: {
    Page,
    Tabbar
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
