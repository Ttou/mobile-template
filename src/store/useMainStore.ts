import { defineStore } from 'pinia'
import { ref } from 'vue'

import store from '.'

export const useMainStore = defineStore('main', () => {
  const count = ref(0)

  /**
   * 加法
   */
  function increment() {
    count.value++
  }

  return {
    count,
    increment
  }
})

export function useMainStoreHook() {
  return useMainStore(store)
}
