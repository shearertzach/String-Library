function capitalize(str) {
  const word = str.split('')
  word[0] = word[0].toUpperCase()
  return word.join('')
}