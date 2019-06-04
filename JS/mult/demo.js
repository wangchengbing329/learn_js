// 太多全局变量，cache只为mult服务，
// 空间的污染
// 函数里面的变量运行后会消失


const mult =(function(){
    const cache={};
    return function(...args){
       
let key = Array.prototype.join.call(args,',')
if (key in cache){
    return cache[key]
}
let a = 1;
for(let i =0,l =args.lengeh;i<l;i++){
    a = a*args[i]
}
cache[key] = a;
return a;
    }
}) ()
    

console.log(mult(1,2,3))