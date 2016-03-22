module.exports = {
  syntax: 'scss',
  plugins: [
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    // Our custom BEM linter rules
    // Modified version of from https://github.com/postcss/postcss-bem-linter/blob/master/lib/preset-patterns.js#L39
    'selector-bem-pattern': {
      componentSelectors: function bemSelector(block) {
        var WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
        var element = '(?:_' + WORD + ')?';
        var modifier = '(?:--' + WORD + '){0,2}';
        var attribute = '(?:\\[.+\\])?';
        return new RegExp('^(\\.' + block + '|\\&)' + element + modifier + attribute + '$');
      }
    },

    'string-quotes': 'double',
    'color-no-invalid-hex': true,
    'declaration-block-properties-order': [
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
