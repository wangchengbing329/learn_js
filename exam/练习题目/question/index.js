// var a= {
//     '2':1,
//     'b':2,
//     length:2,
//     push:Array.prototype.push
// }
// a.push(2)
// console.log(a[1])


// function sleep(t){
//     let now = Date.now()
//     let over = now + t;
//     while( Date.now() <over);
        
//         console.log(2)
         
    
//    return
// }
// sleep(1000)
// function sleep (t) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,t)
//     })
// }
// sleep(1000).then(()=>{
//     console.log(3)
// })

function sleep(t){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t)
    })
}
async function test(){
    await sleep(1000)
    console.log(6)
    return 
}
test()


function * sleep (t){
 yield new Promise((resolve,reject)=>{
        setTimeout(resolve,t)
    })
}
sleep(1000).next().value.then(()=>{
    console.log(2)
})