# stylelint-config-wildbit
Wildbit-specific config for stylelint

## How to use

In the project you want to use styleling do the following

1. `npm install -D stylelint wildbit/stylelint-config-wildbit`
1. Add following code to your `package.json`:

```json
"stylelint": {
  "extends": "stylelint-config-wildbit"
}
```

Additionally, put `"stylelint": "stylelint ./**/*.scss"` to the `scripts` section of `package.json`. Now you can lint your CSS files with stylelint by running `npm run stylelint`.

## Adding a pre-commit hook

Linting makes more sense when running before committing the code.

To add a pre-commit task:

1. `npm install -D pre-commit lint-staged`
2. Add `"stylelint-staged": "stylelint-staged"` to `scripts` section of `package.json`
3. Add `"pre-commit": [ "stylelint-staged" ]` to `package.json`



