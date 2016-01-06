module.exports = {
  syntax: 'scss',
  plugins: [
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    // BEM linter rules
    'selector-bem-pattern': [2, {
      componentSelectors: function(componentName) {
        return new RegExp('\\.ns-' + componentName + '(?:-[a-zA-Z]+)?');
      }
    }],

    'string-quotes': 'double',
    'color-no-invalid-hex': true,
    'rule-properties-order': [
      'content',
      'display',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'clear',
      'float',
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'border',
      'padding',
      'vertical-align',
      'overflow',
      'clip',
      'visibility',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-attachment',
      'background-position',
      'background-clip',
      'background-origin',
      'background-size',
      'color',
      'opacity',
      'box-shadow',
      'font',
      'font-style',
      'font-weight',
      'font-size',
      'font-family',
      'line-height',
      'text-indent',
      'text-align',
      'text-decoration',
      'text-transform',
      'text-shadow',
      'letter-spacing',
      'word-spacing',
      'white-space',
      'list-style',
      'caption-side',
      'table-layout',
      'empty-cells',
      'cursor',
      'outline',
      'pointer-events',
      'animation'
    ]
  }
}
