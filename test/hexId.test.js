const { equal } = require('assert')
const { hexId } = require('../app')

describe('hexId', () => {
  it('should build random hash with 16x', () => {
    const hash = hexId(16)
    const groups = hash.match(/[0-9a-f]{16}/)

    equal(groups[0], hash)
  })

  it('should build random hash with 32x', () => {
    const hash = hexId(32)
    const groups = hash.match(/[0-9a-f]{32}/)

    equal(groups[0], hash)
  })

  it('should build random hash with 64x', () => {
    const hash = hexId()
    const groups = hash.match(/[0-9a-f]{64}/)

    equal(groups[0], hash)
  })

  it('should build random hash with 128x', () => {
    const hash = hexId(128)
    const groups = hash.match(/[0-9a-f]{128}/)

    equal(groups[0], hash)
  })

  it('should build random hash with 254x', () => {
    const hash = hexId(254)
    const groups = hash.match(/[0-9a-f]{254}/)

    equal(groups[0], hash)
  })

  it('should build random hash with 512x', () => {
    const hash = hexId(512)
    const groups = hash.match(/[0-9a-f]{512}/)

    equal(groups[0], hash)
  })

  it('should build random hash with 1024x', () => {
    const hash = hexId(1024)
    const groups = hash.match(/[0-9a-f]{1024}/)

    equal(groups[0], hash)
  })
})
