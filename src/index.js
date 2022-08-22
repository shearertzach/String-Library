function capitalize(str) {
  const word = str.split('')
  word[0] = word[0].toUpperCase()
  return word.join('')
}

function allUpperCase(str) {
  return str.toUpperCase()
}

function capitalizeWords(sentence) {
  const words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) words[i] = capitalize(words[i])
  return words.join(' ')
}