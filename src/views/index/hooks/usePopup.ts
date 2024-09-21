import { reactive, shallowRef, toRefs } from 'vue'

export function usePopup() {
  const state = reactive({
    show: false,
    popupRef: shallowRef<ComponentRef>()
  })

  function handleShow() {
    state.show = true
  }

  function handleOpen() {
    console.log('open popup')
  }

  return {
    ...toRefs(state),
    handleShow,
    handleOpen
  }
}
