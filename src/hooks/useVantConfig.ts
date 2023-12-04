import type { ConfigProviderProps } from 'vant'

export function useVantConfig(): ConfigProviderProps {
  return {
    tag: 'div',
    theme: 'light',
    themeVarsScope: 'global',
    iconPrefix: 'van-icon'
  }
}
