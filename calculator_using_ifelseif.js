let a=prompt("enter the number:")
let b=prompt("enter the number:"),result
let operator=prompt("enter the operator:")
a=Number.parseInt(a)
b=Number.parseInt(b)
if(operator=='+'){
    result=a+b
}
else if(operator=='-'){
    result=a-b
}
else if(operator=='*'){
    result=a*b
}
else if(operator=='/'){
    result=a/b
}
else if(operator=='%'){
    result=a%b
}
else{
    console.log("invalid choice try again:")
}
console.log(result)
