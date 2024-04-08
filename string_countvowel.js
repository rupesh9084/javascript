let n=prompt("enter the string:")
let count=n.match(/[aeiou]/gi).length
console.log("the total vowel is:" +count)