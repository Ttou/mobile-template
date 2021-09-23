import { style } from '@vanilla-extract/css'

export const view = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  minHeight: '100vh',
  paddingBottom: '60px',
  boxSizing: 'border-box'
})
