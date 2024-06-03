let num=3;
let pro =new Promise((resolve,reject)=>{
    if(num%2==0){
        resolve("promise resolved")
    }
    else{
        reject("promise reject")
    }
})
pro.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})