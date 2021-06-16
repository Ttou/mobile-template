import { defineComponent, ref, Transition, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import { useStyle } from '@/hooks'

const { TransitionName } = useStyle()

export default defineComponent({
  setup() {
    const transitionName = ref(TransitionName.slideRight)

    const route = useRoute()

    watch(
      () => route.meta,
      (val, oldVal) => {
        const curIndex = val.index as number
        const prevIndex = (oldVal.index || 0) as number

        if (curIndex > prevIndex) {
          transitionName.value = TransitionName.slideLeft
        } else {
          transitionName.value = TransitionName.slideLeft
        }
      }
    )

    return {
      transitionName
    }
  },
  render() {
    return (
      <RouterView
        v-slots={{
          default: ({ Component, route }) => (
            <Transition name={this.transitionName}>
              <Component key={route.fullPath} />
            </Transition>
          )
        }}
      />
    )
  }
})
