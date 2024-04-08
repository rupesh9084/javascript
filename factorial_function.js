const fact=(x,fact=1)=>{
    for(let i=1;i<=n;i++){
        fact=fact*i
    }return fact
}
let n=prompt("enter the number:")
console.log(fact(n))