<template>
  <div class="page">
    <div class="content">
      <h3>其他页面</h3>
      <van-button type="primary" @click="handleBack">返回</van-button>
    </div>
    <van-back-top />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'OtherView',
  setup() {
    const router = useRouter()

    function handleBack() {
      router.back()
    }

    return {
      handleBack
    }
  }
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

  .content {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    height: 150vh;
  }
}
</style>
