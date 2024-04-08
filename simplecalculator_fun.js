const sum=(a,b)=>{
    return a+b
}
const sub=(a,b)=>{
    return a-b
}
const mult=(a,b)=>{
    return a*b
}
const div=(a,b)=>{
    return a/b
}
let a=parseInt(prompt("enter the first number:"))
let b=parseInt(prompt("enter the second number:"))
console.log("the sum of a and b is:"+sum(a,b))
console.log("the sub of a and b is:"+sub(a,b))
console.log("the mult of a and b is:"+mult(a,b))
console.log("the div of a and b is:"+div(a,b))