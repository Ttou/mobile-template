import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)

    return () => (
      <svg
        aria-hidden="true"
        on={{
          click: () => emit('click')
        }}
      >
        <use xlinkHref={symbolId.value} />
      </svg>
    )
  }
})
