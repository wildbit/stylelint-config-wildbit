#!/bin/sh

files=$(git diff --exit-code --cached --name-only --diff-filter=ACM -- '*.scss')
$(exit $?) || echo $files | ./node_modules/.bin/stylelint $files
