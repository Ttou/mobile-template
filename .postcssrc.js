const { definePostcssConfig } = require('@ttou/define-config')
const autoprefixer = require('autoprefixer')
const pxToVw = require('@ttou/postcss-px-to-viewport')

module.exports = definePostcssConfig({
  plugins: [
    autoprefixer(),
    pxToVw({
      viewportWidth: 375
    })
  ]
})
