let a=[10,20,30,40,50]
let b=a.map((value,index,array)=>{
    console.log(value,index,array)
    return value*value
})
console.log(b)