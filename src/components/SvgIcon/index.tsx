import { computed, defineComponent } from 'vue'
import { string } from 'vue-types'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: string().def('icon'),
    name: string().isRequired
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
