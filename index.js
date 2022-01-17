module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    // @ rule
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // Color
    'color-hex-case': 'upper', // 'lower' in standard
    'color-named': 'never',

    // Font family
    'font-family-name-quotes': 'always-where-recommended',

    // Function
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-name-case': 'lower',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    // Number
    'number-leading-zero': null, // 'always' in standard

    // String
    'string-quotes': 'single',

    // Value
    'value-keyword-case': null, // 'lower' in standard
    'value-no-vendor-prefix': [true, {'severity': 'warning'}],
    'length-zero-no-unit': [true, {'severity': 'warning'}],

    // Property
    'property-no-vendor-prefix': [true, {'severity': 'warning'}],

    // Declaration
    'declaration-colon-space-after': null, // 'always-single-line' in standard
    'declaration-colon-newline-after': null, // 'always-multi-line' in standard

    // Declaration block
    'declaration-block-no-redundant-longhand-properties': [true, {'severity': 'warning'}],
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-empty-line-before': null, // 'always' in standard

    // Block
    'block-closing-brace-space-after': 'always-single-line',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-no-empty': null, // true in recommended

    // Selector
    'selector-class-pattern': null,
    'selector-max-universal': 0,
    'selector-no-vendor-prefix': [true, {'severity': 'warning'}],
    'selector-attribute-quotes': 'always',

    // Selector list
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',

    // Media feature
    'media-feature-name-no-vendor-prefix': [true, {'severity': 'warning'}],

    // Comment
    'comment-empty-line-before': null, // 'always' in standard

    // General / Sheet
    indentation: null, // 2 in standard
    'max-empty-lines': 3, // 1 in standard
    'max-line-length': null,
    'rule-empty-line-before': null, // true in standard
    'no-duplicate-selectors': [true, {'severity': 'warning'}], // true in recommended
    'no-descending-specificity': null, // true in recommended
    'no-unknown-animations': true,


    // Plugin stylelint-scss
    // ---------------------

    'scss/no-global-function-names': null,

    // @each
    'scss/at-each-key-value-single-line': true,

    // @else
    'scss/at-else-if-parentheses-space-before': 'always',

    // @function
    'scss/at-function-parentheses-space-before': 'always',

    // @import
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],

    // $ variable
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': null,

    // Selector
    'scss/selector-no-redundant-nesting-selector': true,


    // Plugin stylelint-order
    // ----------------------

    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-order': [
      [
        // Generated content
        'content',

        // Grid child
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        'grid-area',

        // Flexbox child
        'order',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',

        // Grid & Flexbox child alignment
        'place-self',
        'align-self',
        'justify-self',

        // Display
        'display',

        // Grid parent
        'grid',
        'grid-template',
        'grid-template-rows',
        'grid-template-columns',
        'grid-template-areas',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'gap',
        'row-gap',
        'column-gap',
        'grid-gap', // Old version of 'gap'
        'grid-row-gap',
        'grid-column-gap',

        // Flexbox parent
        'flex-flow',
        'flex-direction',
        'flex-wrap',

        // Grid & Flexbox alignment
        'place-items',
        'align-items',
        'justify-items',
        'place-content',
        'align-content',
        'justify-content',

        // Visual formatting
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'clear',
        'float',

        // Box model
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-radius',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'border-top',
        'border-top-width',
        'border-top-style',
        'border-top-color',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-right',
        'border-right-width',
        'border-right-style',
        'border-right-color',
        'border-bottom',
        'border-bottom-width',
        'border-bottom-style',
        'border-bottom-color',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-left',
        'border-left-width',
        'border-left-style',
        'border-left-color',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'vertical-align',

        // Visual effects
        'overflow',
        'overflow-x',
        'overflow-y',
        'overflow-wrap',
        'overflow-scrolling',
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
        'font-smoothing',
        'src',
        'line-height',

        // Text
        'text-indent',
        'text-align',
        'text-decoration',
        'text-transform',
        'text-shadow',
        'text-overflow',
        'text-size-adjust',
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

        // Transforms
        'transform',
        'transform-origin',

        // Transitions
        'transition',
        'transition-property',
        'transition-duration',
        'transition-timing-function',
        'transition-delay',

        // Animations
        'animation',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',
        'animation-play-state',
      ],
      {'severity': 'warning'}
    ],
  }
}

// font-family-no-missing-generic-family-keyword - recommended
// no-duplicate-at-import-rules - recommended
// keyframes-name-pattern
// no-empty-first-line
// alpha-value-notation
// color-function-notation
// hue-degree-notation
