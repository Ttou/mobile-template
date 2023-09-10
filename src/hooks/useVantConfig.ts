import type { ConfigProviderProps, ConfigProviderThemeVars } from 'vant'

export function useVantConfig(): ConfigProviderProps {
  const themeVars: ConfigProviderThemeVars = {
    buttonPrimaryBackground: '#07c160',
    buttonPrimaryBorderColor: '#07c160'
  }

  return {
    tag: 'div',
    theme: 'light',
    themeVars,
    iconPrefix: 'van-icon'
  }
}
