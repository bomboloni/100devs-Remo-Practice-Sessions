function convertToCase(word) {
return [...word].filter(x => x === x.toUpperCase()).length > (word.length / 2) ? word.toUpperCase() : word.toLowerCase()
}

console.log(convertToCase("coDe"), "should be lower")
console.log(convertToCase("cODe"), "should be lower")
console.log(convertToCase("CODe"), "should be upper")

// this will run in replit now
