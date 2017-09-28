import { generateCamelName } from '../utils.js'

describe('Script Utils Util', () => {
  it('input normal name return CamelName', () => {
    const name = generateCamelName('foo', 'bar')
    expect(name).toBe('fooBar')
  })
  it('input fisrt word with Capital', () => {
    const name = generateCamelName('Foo', 'bar')
    expect(name).toBe('fooBar')
  })
  it('input work with hyphen', () => {
    const name = generateCamelName('Foo-zoo', 'bar-too', 'zar')
    expect(name).toBe('fooZooBarTooZar')
  })
})
