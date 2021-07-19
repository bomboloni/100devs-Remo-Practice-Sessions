// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']

// Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
// Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
// Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);

// function arrayChecker(array1, array2){
//   const newArr = array2.map(el => array1.filter(l => l === el).length)
//  return newArr
// }

// console.log(arrayChecker(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']))
// console.log(arrayChecker(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']))
// console.log(arrayChecker(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']))

// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

// const sum = arr => arr.sort((a,b) => a-b).slice(1, -1).reduce((a,b) => a+b)


// console.log(sum([ 6, 2, 1, 8, 10 ]))
// console.log(sum([ 1, 1, 11, 2, 3 ]))



function isSame(array1, array2){
  return array2.map(el => array1.filter(el2 => el === el2).length)
}

console.log(isSame(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
console.log(isSame(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
console.log(isSame(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);


// this was from something else
// function str => ({str === str.split('').reverse().join('') ? True : False})