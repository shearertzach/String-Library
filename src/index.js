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

function removeExtraSpaces(sentence) {
  const words = sentence.split(' ')
  const newSentence = []
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') newSentence.push(words[i])
  }
  return newSentence.join(' ')
}

function kebabCase(sentence) {
  const cleanSentence = removeExtraSpaces(sentence)
  const words = cleanSentence.split(' ')
  const kebab = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase().split('')
    const cleanWord = []
    for (let j = 0; j < word.length; j++) {
      const letter = word[j]
      const letterCode = letter.charCodeAt()
      const isLetter = (letterCode > 96) && (letterCode < 123)
      const isNumber = (letterCode > 47) && (letterCode < 58)
      if (isLetter || isNumber) cleanWord.push(letter)
    }
    kebab.push(cleanWord.join(''))
  }
  return kebab.join('-')
}