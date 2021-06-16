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
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)

    return {
      symbolId
    }
  },
  render() {
    return (
      <svg
        aria-hidden="true"
        on={{
          click: () => this.$emit('click')
        }}
      >
        <use xlinkHref={this.symbolId} />
      </svg>
    )
  }
})
