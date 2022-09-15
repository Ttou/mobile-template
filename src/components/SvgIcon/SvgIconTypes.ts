export const svgIconProps = () => ({
  prefix: { type: String, default: 'icon' },
  name: { type: String, required: true },
  color: { type: String, default: '#333' }
})

export type SvgIconProps = ComponentProps<typeof svgIconProps>

export default svgIconProps
