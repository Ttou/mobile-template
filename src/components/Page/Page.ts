import { defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'Page',
  setup() {
    return {}
  },
  render() {
    return h(RouterView, null, {
      default: ({ Component, route }) => {
        if (!Component) return
        return h(Component, { key: route.fullPath })
      }
    })
  }
})
