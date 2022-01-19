const { definePostcssConfig } = require('@ttou/define-config')

module.exports = definePostcssConfig({
  plugins: [
    require('autoprefixer'),
    require('@ttou/postcss-px-to-viewport')({
      viewportWidth: 375
    })
  ]
})
