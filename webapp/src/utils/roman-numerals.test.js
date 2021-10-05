import { toRomanNumeral } from './roman-numerals'

describe('Roman Numeral Util', () => {
  it('should convert 1 to I', () => {
    expect(toRomanNumeral(1)).toBe('I')
  })

  it('should convert 5 to V', () => {
    expect(toRomanNumeral(5)).toBe('V')
  })

  it('should convert 10 to X', () => {
    expect(toRomanNumeral(10)).toBe('X')
  })

  it('should convert 50 to L', () => {
    expect(toRomanNumeral(50)).toBe('L')
  })

  it('should convert 100 to C', () => {
    expect(toRomanNumeral(100)).toBe('C')
  })

  it('should convert 500 to D', () => {
    expect(toRomanNumeral(500)).toBe('D')
  })

  it('should convert 1000 to M', () => {
    expect(toRomanNumeral(1000)).toBe('M')
  })

  it('should convert 4 to IV', () => {
    expect(toRomanNumeral(4)).toBe('IV')
  })

  it('should convert 40 to IV', () => {
    expect(toRomanNumeral(40)).toBe('XL')
  })

  it('should convert 400 to CD', () => {
    expect(toRomanNumeral(400)).toBe('CD')
  })

  it('should convert 9 to IX', () => {
    expect(toRomanNumeral(9)).toBe('IX');
  })

  it('should convert 90 to XC', () => {
    expect(toRomanNumeral(90)).toBe('XC');
  })

  it('should convert 900 to CM', () => {
    expect(toRomanNumeral(900)).toBe('CM');
  })

  it('should convert 1404 to MCDIV', () => {
    expect(toRomanNumeral(1404)).toBe('MCDIV')
  })

  it('should convert 224 to CCXLIV', () => {
    expect(toRomanNumeral(244)).toBe('CCXLIV')
  })
})
