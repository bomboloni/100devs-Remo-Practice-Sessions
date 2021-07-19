// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//split and get a new sorted
//split and get a new set 
//join and get new set

const longest = (s1, s2) => {
  let a = [...new Set(s1.split(''))]
  let b = [...new Set(s2.split(''))]

 return [...new Set(a.concat(b))].sort().join('')
}

console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))
console.log(longest("xyaabbbchsdhjcbhsdhcshcccdefww","xxxxyyyyabklmashbasasnxopq"))


