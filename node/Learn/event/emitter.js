const event = require('events');
 const Emitter = new event.EventEmitter()


/**按数组默认顺序执行会一个一个来
 * 
 */

// const event = require('events');
// const Emitter = new event.EventEmitter();
// Emitter.on('connection',function() {
//     console.log('已连接');

// });
// 一秒后启用监听器
//     setTimeout(function () {
//         Emitter.emit('connection')
//     },1000)


/**
 * 把事件监听放到前面来，改变数组里面的顺序
 * 
 */
// const event = require('events');
// const Emitter = new event.EventEmitter();
// Emitter.on('connection',function() {
//     console.log('我是啊');

// });
// Emitter.prependListener('connection',()=>{
//     console.log('我是b')
// })
/**只改变一次顺序 */
// Emitter.prependOnceListener('connection',()=>{
//     console.log('我是b')
// })

// 一秒后启用监听器
    // setTimeout(function () {
    //     Emitter.emit('connection')
    // },1000)




    /**
     * 多个参数，先.on注册事件监听器，然后.emit 来调用事件监听器，emit里的参数是on里面的回调函数的参数
     */
// const event = require('events')
// const emitter = new event.EventEmitter();
// function arg1(v1,v2) {
// console.log('hello world' + v1 + v2);
// }
// function arg2(v3,v4) {
//     console.log('world hello ' + v3 + v4)
// }
// emitter.on('connection',arg1)
// emitter.on('connection',arg2)
// emitter.emit('connection','我','是')


/**
 * 监听事件监听器次数
 */
// const event = require('events')
// const Emitter = new event.EventEmitter();
// let n = 0;
// /* Emitter.on('connection',()=>{
//     ++n
//     console.log('已经运行第' + n +'次')
// }); */
// Emitter.on('connection',()=>{
//     ++n
//     console.log('已经运行第' + n +'次')
// });

// 移除监听器
/* Emitter.removeListener('connection',()=>{
    console.log('我已经消失了')
}) */
// Emitter.off('connection',()=>{
//     console.log('我已经消失了')
// })
// Emitter.emit('connection')
// Emitter.emit('connection')
// Emitter.emit('connection')
// Emitter.emit('connection')
// Emitter.emit('connection')
// Emitter.emit('connection')


/**
 * off 是removeListenner 的别名
 * removeAllListeners(listenerName)移除所有监听器。
 * Emitter.setMaxListeners(n) n=>0 表示不限制infinity
 */




 /***事件监听器数量 */
// function cb1() {
//     console.log('1')

// }
// function cb2(){
//     console.log('2')
// }


//  Emitter.on('connection',cb1);
//  Emitter.on('connection',cb2);
//  let num = Emitter.listenerCount('connection');
//  console.log(num)


/**
 * 调用error监听器，如果没有的话会抛出错误。打印堆栈跟踪、并退出node.js 进程
 */
// Emitter.emit('error')

// 所以需要注册一个error监听器
Emitter.on('error',()=>{
    console.error('错误信息')
})
Emitter.emit('error')


 




