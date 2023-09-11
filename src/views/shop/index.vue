<template>
  <div class="page">商铺</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { CONST_ROUTES } from '@/constants'

export default defineComponent({
  name: CONST_ROUTES.SHOP.name
})
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  min-height: 100vh;
  padding-bottom: 60px;
  box-sizing: border-box;
}
</style>
