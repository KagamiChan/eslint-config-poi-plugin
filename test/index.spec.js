const assert = require('assert')
const Ajv = require('ajv')
const schema = require('eslint/conf/config-schema')
const chalk = require('chalk')
const { inspect } = require('util')

const config = require('../index')

describe('rules should be validated', () => {
  let ajv
  let validate
  beforeEach(() => {
    ajv = new Ajv()
    validate = ajv.compile(schema)
  })


  it('validate with ajv', () => {
    const result = validate(config)
    if (!result) {
      validate.errors.forEach(err =>
        // eslint-disable-next-line no-console
        console.log(...['keyword', 'dataPath', 'schemaPath', 'params', 'message'].map(field => `${chalk.bgRed(field)} ${inspect(err[field])}`)))
    }
    assert.equal(true, result)
  })
})
