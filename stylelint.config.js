/**
 * @type {import('stylelint').Configuration}
 */
module.exports = {
  root: true,
  extends: ['stylelint-config-prettier', 'stylelint-config-standard'],
  rules: {
    'unit-case': null,
    'no-descending-specificity': null,
    'value-list-comma-newline-after': null,
    'declaration-colon-newline-after': null,
    'selector-pseudo-element-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null
  }
}
