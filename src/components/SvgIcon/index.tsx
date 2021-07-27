import { computed, defineComponent } from 'vue'

import { PropTypes } from '@/utils'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: PropTypes.string.def('icon'),
    name: PropTypes.string.isRequired
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
