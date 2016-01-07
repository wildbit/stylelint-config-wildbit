import config from '../'
import stylelint from 'stylelint'
import test from 'tape'
import glob from 'glob'
import fs from 'fs'


test('basic properties of config', t => {
  t.ok(isObject(config.rules), 'rules is object')
  t.end()
})

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function lint(css, cb) {
  stylelint.lint({
    code: css,
    config: config
  })
  .then(cb)
  .catch(function (err) {
    console.error(err.stack)
  })
}

function check(data, type) {
  const { errored, results } = data
  const { warnings } = results[0]
  if (type === 'pass') {
    return passCheck(errored)
  }
  return failCheck(errored, warnings)
}

function passCheck(errored) {
  test('not expected warnings', t => {
    t.notOk(errored, 'not errored')
    t.end()
  })
}

function failCheck(errored, warnings) {
  test('expected warnings', t => {
    t.ok(errored, 'errored')
    t.end()
  })
}

['pass', 'fail'].forEach(type => {
  const files = glob.sync(`**/*-${type}.scss`)
  files.forEach(file => {
    const css = fs.readFileSync(file, 'utf-8')
    lint(css, data => check(data, type))
  })
})

