// Create a CamelCase Method where all words must have their first letter capitalized without spaces.

// For instance:

// "hello case" => "HelloCase"
// "camel case word" => "CamelCaseWord"

// Create a CamelCase Method where all words must have their first letter capitalized without spaces. // For instance: // "hello case" => "HelloCase" // "camel case word" => "CamelCaseWord"

// Always Truthy.
// Always lower case change first to upper
// Always have space

// Same string exept withe letter upcase with no spaces
// removeing spaces

// "hello case" => "HelloCase"
// "camel case word" => "CamelCaseWord"


// take in set of words
// const camelCase = str => {
//   return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
// }

const camelCase = str =>
  str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('')

// we grab each word and change the first letter into uppercase
// we are going to join each word back into a string without any spaces.
// console.log(camelCase("hello case"))
console.log(camelCase("hello case"), "HelloCase")
console.log(camelCase("camel case word"), "CamelCaseWord")

// str.split(' ').map(word => word[0].toUpperCase())
//  +str.join('')