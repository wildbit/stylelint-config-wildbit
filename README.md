# stylelint-config-wildbit
Wildbit-specific config for [Stylelint](https://stylelint.io).

## How to use

Adding Stylelint to the project:

1. `npm install -D stylelint wildbit/stylelint-config-wildbit`
2. Add following code to your `package.json`:

```json
"stylelint": {
  "extends": "stylelint-config-wildbit"
},
"scripts": {
  "lint:css": "stylelint --syntax scss ./**/*.scss",
  "fix:css": "stylelint --fix ./**/*.scss",
}
```

Now you can lint your CSS by running `npm run lint:css` and fix with `npm run fix:css`.

## Adding a pre-commit hook

Linting makes more sense when running before committing the code.

To add a pre-commit task:

1. `npm install -D pre-commit lint-staged`
2. Add `"stylelint-staged": "stylelint-staged"` to `scripts` section of `package.json`
3. Add `"pre-commit": [ "stylelint-staged" ]` to `package.json`
