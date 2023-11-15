<template>
  <h2 class="welcome">{{ msg }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { welcomeProps } from './Welcome'

export default defineComponent({
  name: 'Welcome',
  props: welcomeProps()
})
</script>

<style scoped>
.welcome {
  font-size: 36px;
  color: #8f8f94;
}
</style>
