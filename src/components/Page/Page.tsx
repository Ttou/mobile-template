import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

import { useUpdate } from '@/hooks'

export default defineComponent({
  name: 'Page',
  setup() {
    useUpdate()

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
