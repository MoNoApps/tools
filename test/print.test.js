const { equal } = require('assert')
const { print } = require('../app')

describe('Print', () => {
  const schema = ['Name', 'Signal']

  it('should print strings', () => {
    const expected = '[Device]  Name: 127.0.0.1,  Signal: OFF'
    const ouput = print('Device', schema, '127.0.0.1', 'OFF')
    equal(ouput, expected)
  })

  it('should print undefined', () => {
    const expected = '[Device]  Name: 127.0.0.1,  Signal: undefined'
    const ouput = print('Device', schema, '127.0.0.1', undefined)
    equal(ouput, expected)
  })

  it('should print zero', () => {
    const expected = '[Device]  Name: 127.0.0.1,  Signal: 0'
    const ouput = print('Device', schema, '127.0.0.1', 0)
    equal(ouput, expected)
  })

  it('should print negative', () => {
    const expected = '[Device]  Name: 127.0.0.1,  Signal: -1'
    const ouput = print('Device', schema, '127.0.0.1', -1)
    equal(ouput, expected)
  })

  it('should avoid print on missing schema', () => {
    const ouput = print('Device', [], '127.0.0.1', -1)
    equal(ouput, '')
  })

  it('should avoid print on mismatch', () => {
    const ouput = print('Device', schema)
    equal(ouput, '')
  })

  it('should avoid print on mismatch', () => {
    const ouput = print('Device', schema, '::')
    equal(ouput, '')
  })

  it('should print defaults', () => {
    const ouput = print()
    equal(ouput, '')
  })

  it('should print log on dev', () => {
    process.env.ENV = 'development'
    const expected = '[Device]  Name: 127.0.0.1,  Signal: OFF'
    const ouput = print('Device', schema, '127.0.0.1', 'OFF')
    equal(ouput, expected)
  })
})
