import { computed, defineComponent } from 'vue'

import svgIconIcons from './SvgIconTypes'

export { svgIconIcons }

export default defineComponent({
  name: 'SvgIcon',
  props: svgIconIcons(),
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
