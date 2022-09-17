interface _Icon {
  new (): {
    $props: import('@iconify/vue/dist/iconify').IconProps
  }
}

declare module '@iconify/vue' {
  export const Icon: _Icon

  export { addCollection } from '@iconify/vue/dist/iconify'
}
