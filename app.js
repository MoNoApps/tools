const { log } = require('util')
const HEX = '0123456789abcdef'
const BASE = '0'
const SEPARATOR = process.env.SEPARATOR || '  '

function hexId(size = 64) {
  return BASE.repeat(size).replace(/0/g, () =>
    HEX[Math.floor(Math.random() * (HEX.length))])
}

function print(type = ' ', schema = [], ...params) {
  if (!schema.length) return ''
  if (!params.length) return ''
  if (schema.length !== params.length) return ''

  const metadata = schema.map((field, index) => `${field}: ${params[index]}`)
  const line = `[${type}]${SEPARATOR}${metadata.join(`,${SEPARATOR}`)}`

  if (process.env.ENV != 'test') { log(line) }
  return line
}

module.exports = {
  hexId,
  print,
}
