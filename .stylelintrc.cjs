const { defineStylelintConfig } = require('@ttou/define-config')

module.exports = defineStylelintConfig({
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'block-no-empty': null,
    'property-no-unknown': [true, { ignoreProperties: ['/composes/'] }],
    'function-no-unknown': [true, { ignoreFunctions: ['/constant/'] }],
    'declaration-block-no-redundant-longhand-properties': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep', 'input-placeholder'] }
    ]
  }
})
