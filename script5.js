// /Create a function that returns the capitilization of a name. No Arrays, No REGEX!
// //leon ~> Leon
// //bob ~> Bob
// //John ~> John

// first letter upper or lower, remaining all lower

//slice str after 1st letter

// change the first letter to uppercase if it's not already

//concat the two strings together and return that

// const capFirst = (str) => {
//   let first = str.slice(0,1).toUpperCase()
//   let rest = str.slice(1)
//   return first+rest
// }

// const capFirst = (str) => {
//   let first = str.charAt(0).toUpperCase()
//   let rest = str.slice(1)
//   return first.concat(rest)
// }

//const capFirst = (str) => str[0].toUpperCase()+str.slice(1)

const capFirst = (str) => str[0].toUpperCase().concat(str.slice(1))

console.log(capFirst('leon'),'Leon')
console.log(capFirst('bob'),'Bob')
console.log(capFirst('John'),'John')
