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
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)

    return {
      symbolId
    }
  },
  render() {
    return (
      <svg aria-hidden="true">
        <use xlinkHref={this.symbolId} />
      </svg>
    )
  }
})
