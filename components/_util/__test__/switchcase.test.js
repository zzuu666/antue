import { switchcase, switchcaseF } from '../switchcase.js'

describe('Util Switchcase', () => {
  const rateMap = (rate) => switchcase({
    '1': 'Bad',
    '2': 'Normal',
    '3': 'Good'
  })('No Info')(rate)

  const rateFunctionMap = (rate) => switchcaseF({
    bad () {
      return 1
    },
    normal () {
      return 2
    },
    good () {
      return 3
    }
  })('No Info')(rate)

  it('should return the correct value', () => {
    expect(rateMap('1')).toBe('Bad')
  })

  it('should return the default value', () => {
    expect(rateMap('5')).toBe('No Info')
  })

  it('should execute the correct function', () => {
    expect(rateFunctionMap('bad')).toBe(1)
  })

  it('should execute the correct function', () => {
    expect(rateFunctionMap('what')).toBe('No Info')
  })
})
