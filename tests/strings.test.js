const strings = require('../dist/index')

test('should be capitalized', () => {
  const capitalizedWord = strings.capitalize('tesTthisStrIng')
  expect(capitalizedWord).toBe('TesTthisStrIng')
})

test('should be all uppercase', () => {
  const uppercasedWord = strings.allUpperCase('this sTrIng will be tested')
  expect(uppercasedWord).toBe('THIS STRING WILL BE TESTED')
})

test('should be all capitalized', () => {
  const uppercasedSentence = strings.capitalizeWords('this sTrIng will be tested')
  expect(uppercasedSentence).toBe('This STrIng Will Be Tested')
})

test('should be spaceless', () => {
  const correctlySpacedSentence = strings.removeExtraSpaces('This    string    will      be    tested.   ')
  expect(correctlySpacedSentence).toBe('This string will be tested.')
})

test('should be kebab cased', () => {
  const kebabSentence = strings.kebabCase('This    string    will      be    tested.   ')
  expect(kebabSentence).toBe('this-string-will-be-tested')
})

test('should be snake cased', () => {
  const snakeSentence = strings.snakeCase('This    string    will      be    tested.   ')
  expect(snakeSentence).toBe('this_string_will_be_tested')
})

test('should be shifted to end', () => {
  const shiftedString = strings.shift('this string is shifted')
  expect(shiftedString).toBe('his string is shiftedt')
})

test('should be shifted to end plus 3', () => {
  const shiftedString = strings.shift('this string is shifted', 3)
  expect(shiftedString).toBe('s string is shiftedthi')
})

test('should be hashtagged', () => {
  const hashtaggedStrings = strings.makeHashTag('This string will be tested')
  expect(hashtaggedStrings).toContain('#string')
  expect(hashtaggedStrings).toContain('#tested')
  expect(hashtaggedStrings).toContain('#This')
})

test('should not be empty', () => {
  const emptyString = strings.isEmpty(`
  
  fasd
  
  `)
  expect(emptyString).toBe(false)
})

test('should be empty', () => {
  const emptyString = strings.isEmpty(`
  
  
  `)
  expect(emptyString).toBe(true)
})