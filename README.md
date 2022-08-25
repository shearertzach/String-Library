# String-Library

| Function            | Description                                                                                                                                                                                     | Parameters         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| capitalize()        | makes the first character of a given string uppercase.                                                                                                                                          | (str)              |
| allUpperCase()      | makes all characters uppercase.                                                                                                                                                                 | (str)              |
| capitalizeWords()   | makes the first character of each word uppercase. Imagine that each word is separated by a space.                                                                                               | (sentence)         |
| removeExtraSpaces() | Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space. | (sentence)         |
| kebabCase()         | Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.                                                                                               | (sentence)         |
| snakeCase()         | Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.                                                                                             | (sentence)         |
| camelCase()         | Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.                                                               | (sentence)         |
| shift()             | This method will take the first character of a string and move to the end of a string                                                                                                           | (sentence, offset) |
| makeHashTag()       | Converts three longest word in a sentence to hashtags.                                                                                                                                          | (sentence)         |
| isEmpty()           | Returns `true` if the given string is empty or contains only whitespace.                                                                                                                        | (sentence)         |

## Usage

To install the package you can use the following command within a Javascript project.

```npm install @zach-shearer/string-library```

You can them integrate it into your app using

```const strings = require('@zach-shearer/string-library')```

or

```import strings from '@zach-shearer/string-library'```


## Example

```capitalizeWords('this is an example string') // This Is An Example String```
