<template>
  <div class="page">
    <Welcome :msg="title" />
    <div class="section">
      <h3>Store</h3>
      <p>{{ count }}</p>
      <van-button type="primary" @click="handleClick">点击</van-button>
    </div>
    <div class="section">
      <h3>弹出层</h3>
      <van-button type="primary" @click="handleShow">点击</van-button>
    </div>
    <div class="section">
      <h3>自定义图标</h3>
      <van-space>
        <Icon icon="custom:coffee" />
        <Icon icon="custom:chips" />
        <Icon icon="custom:ice-cream" />
        <Icon icon="custom:coke" />
        <Icon icon="custom:hamburg" />
      </van-space>
    </div>
    <van-popup
      ref="popupRef"
      v-model:show="show"
      class="popup"
      position="center"
      closeable
      @open="handleOpen"
    >
      <template #default>
        <div class="popup__content">哈哈</div>
      </template>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'

import { Welcome } from '@/components'
import { CONST_ROUTES } from '@/constants'

import { useCount, useInit, usePopup } from './hooks'

export default defineComponent({
  name: CONST_ROUTES.INDEX.name,
  components: {
    Icon,
    Welcome
  },
  setup() {
    const countHook = useCount()
    const initHook = useInit()
    const popupHook = usePopup()

    return {
      ...countHook,
      ...initHook,
      ...popupHook
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

  .section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .popup {
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 200px;
      font-size: 18px;
    }
  }
}
</style>
