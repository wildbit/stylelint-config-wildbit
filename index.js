module.exports = {
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

    // Color
    'color-hex-case': 'upper',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,

    // Font family
    'font-family-name-quotes': 'single-where-recommended',

    // Function
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'single',
    'function-whitespace-after': 'always',

    // Number
    'number-leading-zero': null,
    'number-no-trailing-zeros': true,
    'number-zero-length-no-unit': true,

    // String
    'string-no-newline': true,
    'string-quotes': 'single',

    // Time
    'time-no-imperceptible': true,

    // Value
    'value-no-vendor-prefix': [true, {'severity': 'warning'}],

    // Value list
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',

    // Property
    'property-no-vendor-prefix': [true, {'severity': 'warning'}],

    // Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': null,
    'declaration-colon-space-before': 'never',
    'declaration-no-important': [true, {'severity': 'warning'}],

    // Declaration block
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-properties-order': [
      [
        // Generated content
        'content',

        // Flexbox child
        'order',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'flex',
        'align-self',

        // Flexbox parent
        'display',
        'flex-direction',
        'flex-wrap',
        'flex-flow',
        'justify-content',
        'align-items',
        'align-content',

        // Visual formatting
        'position',            // if set to 'absolute' or 'fixed' -> do not define 'float' and 'display'
        'top',
        'right',
        'bottom',
        'left',
        'z-index',             // applies only if 'position' is not 'static'
        'clear',
        'float',               // if not set to 'none' -> do not define 'block'

        // Box model
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

        // Visual effects
        'overflow',
        'clip',
        'visibility',

        // Colors and backgrounds
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

        // Fonts
        'font',
        'font-style',
        'font-weight',
        'font-size',
        'font-family',
        'line-height',

        // Text
        'text-indent',
        'text-align',
        'text-decoration',
        'text-transform',
        'text-shadow',
        'letter-spacing',
        'word-spacing',
        'white-space',
        'list-style',

        // Tables
        'caption-side',
        'table-layout',
        'empty-cells',

        // UI
        'cursor',
        'outline',
        'pointer-events',

        // Animation
        'animation',
      ],
      {'severity': 'warning'}
    ],

    // Block
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': null,
    'block-no-single-line': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    // Selector
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-no-id': true,
    'selector-no-universal': true,
    'selector-no-vendor-prefix': [true, {'severity': 'warning'}],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',

    // Selector list
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',

    // Media feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-vendor-prefix': [true, {'severity': 'warning'}],
    'media-feature-no-missing-punctuation': true,
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-parentheses-space-inside': 'never',

    // Comment
    'comment-whitespace-inside': 'always',

    // General / Sheet
    'max-empty-lines': 3,
    'max-nesting-depth': [3, {'severity': 'warning'}],
    'no-descending-specificity': null,
    'no-eol-whitespace': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-eof-newline': true,
    'no-unknown-animations': true
  }
}
