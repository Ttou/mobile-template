import { ConfigProviderProps } from 'vant'

export function useConfig(): ConfigProviderProps {
  const themeVars = {
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
