module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@ttou/postcss-px-to-viewport')({
      viewportWidth: 375
    })
  ]
}
