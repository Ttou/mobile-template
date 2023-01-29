<template>
  <div class="page">
    <h2>{{ title }}</h2>
    <div class="section">
      <h3>Store</h3>
      <p>{{ count }}</p>
      <Button type="primary" @click="handleClick">点击</Button>
    </div>
    <div class="section">
      <h3>弹出层</h3>
      <Button type="primary" @click="handleShow">点击</Button>
    </div>
    <div class="section">
      <h3>自定义图标</h3>
      <Space>
        <Icon icon="custom:coffee" />
        <Icon icon="custom:chips" />
        <Icon icon="custom:ice-cream" />
        <Icon icon="custom:coke" />
        <Icon icon="custom:hamburg" />
      </Space>
    </div>
    <Popup
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
    </Popup>
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { Button, Popup, Space } from 'vant'
import { defineComponent } from 'vue'

import { CONST_ROUTES } from '@/constants'

import { useCount, useInit, usePopup } from './hooks'

export default defineComponent({
  name: CONST_ROUTES.INDEX.name,
  components: {
    Icon,
    Button,
    Popup,
    Space
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

<style lang="scss" scoped>
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
