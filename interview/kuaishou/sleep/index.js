// 1000s
// sleep(30000);
// console.log('hello world');
// 实现一个功能 + 发散理解 

// const sleep  = time =>{
//     return new Promise((resolve,reject)=>   setTimeout(resolve,time))
     
    
// }
// sleep(3000).then(()=>{
//     console.log('4456448')
// })
// function *sleepGenerator(time){
//  yield new Promise((resolve,rerject)=>{
//      setTimeout(resolve ,time)
//  } );
//  console.log('aaaa')
// }
// sleepGenerator(1000).next().value.then(()=>{
//     console.log('1511')
// })
// console.log(sleepGenerator().next())


// function sleep(time){
// return new Promise(resolve=>setTimeout(resolve,time));
// }
// async function output(){
//     let out = await sleep(1000);
//     console.log(1);
//     return out
// }
// output();
function sleep (callback,time){
    if(typeof callback !== 'function')
setTimeout(callback,time)
}
sleep(function (){
console.log('331321')
},1000)
