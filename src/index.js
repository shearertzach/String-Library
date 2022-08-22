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

function removeExtraSpace(sentence) {
  const words = sentence.split(' ')
  const newSentence = []
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') newSentence.push(words[i])
  }
  return newSentence.join(' ')
}