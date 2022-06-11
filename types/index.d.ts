declare type Nullable<T> = T | null

declare type ElementRef = Nullable<HTMLElement>

declare type ComponentRef = Nullable<Record<string, any>>

declare type ComponentProps<T> = Partial<
  import('vue').ExtractPropTypes<ReturnType<T>>
>
