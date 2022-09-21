function capitalize(str: string): string {
  const word = str.split("");
  word[0] = word[0].toUpperCase();
  return word.join("");
}

function allUpperCase(str: string): string {
  return str.toUpperCase();
}

function capitalizeWords(sentence: string): string {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) words[i] = capitalize(words[i]);
  return words.join(" ");
}

function removeExtraSpaces(sentence: string): string {
  return sentence.trim();
}

function kebabCase(sentence: string): string {
  const cleanSentence = removeExtraSpaces(sentence);
  const words = cleanSentence.split(" ");
  const kebab: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase().split("");
    const cleanWord: string[] = [];
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      const letterCode = letter.charCodeAt(j);
      const isLetter = letterCode > 96 && letterCode < 123;
      const isNumber = letterCode > 47 && letterCode < 58;
      if (isLetter || isNumber) cleanWord.push(letter);
    }
    kebab.push(cleanWord.join(""));
  }
  return kebab.join("-");
}

function snakeCase(sentence: string): string {
  const cleanSentence = removeExtraSpaces(sentence);
  const words = cleanSentence.split(" ");
  const snake: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase().split("");
    const cleanWord: string[] = [];
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      const letterCode = letter.charCodeAt(j);
      const isLetter = letterCode > 96 && letterCode < 123;
      const isNumber = letterCode > 47 && letterCode < 58;
      if (isLetter || isNumber) cleanWord.push(letter);
    }
    snake.push(cleanWord.join(""));
  }
  return snake.join("_");
}

function camelCase(sentence: string): string {
  const words = sentence.split(" ");
  words[0] = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) words[i] = capitalize(words[i]);
  return words.join("");
}

function shift(sentence: string, offset: number): string {
  const section = sentence.slice(0, offset ? offset : 1);
  const sectionOffset = sentence.slice(offset ? offset : 1, sentence.length);
  return sectionOffset.concat(section);
}

function makeHashTag(sentence: string): string[] {
  const words = sentence.split(" ");
  const sortedWords = words.sort((a, b) => {
    return b.length - a.length;
  });
  const longestWords = sortedWords.slice(0, 3);
  for (let i = 0; i < longestWords.length; i++)
    longestWords[i] = "#" + longestWords[i];
  return longestWords;
}

function isEmpty(sentence: string): boolean {
  const characters = sentence.trim().split("");
  for (let i = 0; i < characters.length; i++)
    if (characters[i] != " ") return false;
  return true;
}

module.exports.capitalize = capitalize;
module.exports.allUpperCase = allUpperCase;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebabCase = kebabCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
