import { ConfigProviderProps } from 'vant'

export function useConfig(): ConfigProviderProps {
  const themeVars = {
    buttonPrimaryBorderColor: '#07c160',
    buttonPrimaryBackgroundColor: '#07c160'
  }

  return {
    tag: 'div',
    themeVars,
    iconPrefix: 'van-icon'
  }
}
