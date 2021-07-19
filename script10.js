// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//str - only letters and spaces
//return string

//
//str to array based on spaces (split)
//map each word in the array to
// //let s= 'Sandra'  S[index] == S[index].toUpperCase() 

const reversify = str => {
  return str.split(' ').map(word => {
    word.split('')word.map(ltr => ltr === ltr.toUpperCase() ? ltr.toLowerCase() : ltr.toUpperCase())
  })
}

console.log(reversify("Example Input"))
