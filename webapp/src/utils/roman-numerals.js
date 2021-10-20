const letters = [
  { letter: 'M', value: 1000 },
  { letter: 'CM', value: 900 },
  { letter: 'D', value: 500 },
  { letter: 'CD', value: 400 },
  { letter: 'C', value: 100 },
  { letter: 'XC', value: 90 },
  { letter: 'L', value: 50 },
  { letter: 'XL', value: 40 },
  { letter: 'X', value: 10 },
  { letter: 'IX', value: 9 },
  { letter: 'V', value: 5 },
  { letter: 'IV', value: 4 },
  { letter: 'I', value: 1 }
]

export function toRomanNumeral (num) {
  let roman = ''

  for (let letterIndex in letters) {
    const letter = letters[letterIndex]

    // How many times value goes into num
    const count = Math.floor(num / letter.value)

    // Add letter for each value
    for (let i = 0; i < count; i++) {
      roman += letter.letter
    }

    num -= count * letter.value
  }

  return roman
}
