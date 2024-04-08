let n=prompt("enter the number:")
let flag=0;
if(i==0||i==1)
flag=1;
for(let i=2;i<=n/2;i++){
    if(n%2==0){
        flag=1;
        break;}
    }if(flag==0){
        console.log("this is a prime number")
    }else{
        console.log("this is not a prime number:")
    }
