// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// split str into arr
// loop through arr with map
// check for uppercase letter
// conditionally check if uppercase letter is equal to that letter
// if so, add a space + letter
 // otherwise return letter
 // join arr back to string


const breakCamelCase = str =>{
 return str.split("").map(letter => letter ===letter.toUpperCase()? " " +  letter : letter).join("");
}


console.log(breakCamelCase("camelCasing"))
console.log(breakCamelCase("identifier"))
console.log(breakCamelCase(""))

// IndifferentGhost

// `.at()` in most cases does the same as bracket notation for arrays, where it does well is including negative values `arr.at(-1)` is the same as `arr[arr.length -1]`.

