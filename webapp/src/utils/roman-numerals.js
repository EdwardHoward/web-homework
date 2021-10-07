const letters = [
  { letter: 'M', value: 1000 },
  { letter: 'CM', value: 900 },
  { letter: 'D', value: 500 },
  { letter: 'C', value: 100 },
  { letter: 'XC', value: 90 },
  { letter: 'L', value: 50 },
  { letter: 'X', value: 10 },
  { letter: 'IX', value: 9 },
  { letter: 'V', value: 5 },
  { letter: 'I', value: 1 }
]

export function toRomanNumeral (num) {
  let roman = ''

  for (let letterIndex in letters) {
    const letter = letters[letterIndex]
    const count = Math.floor(num / letter.value)

    if (count === 4) {
      roman += letter.letter + letters[letterIndex - 1].letter
    } else {
      for (let i = 0; i < count; i++) {
        roman += letter.letter
      }
    }

    num -= count * letter.value
  }

  return roman
}
