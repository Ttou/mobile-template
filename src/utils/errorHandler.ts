import type { ComponentPublicInstance } from 'vue'

export function errorHandler(
  err: unknown,
  instance: Nullable<ComponentPublicInstance>,
  info: string
) {
  console.log({
    err,
    instance,
    info
  })
}
