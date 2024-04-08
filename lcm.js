let a=prompt("enter the number:")
let b=prompt("enter the number:"),i,c,lcm
for(i=1;i<=a && i<=b;i++){
    if(a%i==0 && b%i==0){
        c=i
    }
}
lcm=(a*b)/c
console.log("the lcm "+a+" and "+b+" is ",lcm)
