import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'Page',
  setup() {
    return {}
  },
  render() {
    return (
      <RouterView
        v-slots={{
          default: ({ Component, route }) => {
            if (!Component) return

            return <Component key={route.fullPath} />
          }
        }}
      />
    )
  }
})
