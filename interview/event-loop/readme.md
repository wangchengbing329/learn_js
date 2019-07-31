event loop 事件队列
异步问题
JS 单线程
setTimeout async promise

async task 进入event 队列 等待执行
宏任务  微任务  队列 
将回调函数加入事件队列中 task queue 执行栈 


macrotask  setTimeout
setInterval setImmediate
I/O UI rendering  依次执行一次 

 microtask  Promise
 process.nextTick 优先 一次执行完 

微任务 优先于 宏任务

C E  D A B
1. macrotasks ['A','B'] 
2. microtasks ['D']