const sumofnum=(n,sum=0)=>{
    for(let i=1;i<=n;i++){
        sum=sum+i
    }return sum
}
let n=prompt("enter the number:")
console.log(sumofnum(n))