function minChange(str){

  if(str.split('').filter( x => x.toUpperCase === x).length > str.length/2){
    return str.toUpperCase()
  }
  
  else {return str.toLowerCase()}
}
console.log( minChange("coDe"))