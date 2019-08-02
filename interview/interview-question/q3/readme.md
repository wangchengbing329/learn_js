# q1 js 全局执行为我们创建了两个东西
全局对象       和        this 关键字
  new 的实现原理 ：
  1. 创建一个空对象，构造函数中的this指向这个空对象 
  2. 这个新对象被执行[原型]连接
  3. 执行这个构造函数，属性和方法添加到this引用的对象中
  4. 如果构造函数中没有返回其他对象，那么就返回这个this，也就是创建的新对象，否则返回构造函数中返回的对象
                     function _new(){
        let target = {}
        let [constructor,...args] = [...arguments] 
        // 执行原型连接
        // 所有类型都有隐式原型 __proto__ 而只有函数才会有prototype(显示原型)
        target.__proto__ = constructor.prototype
        let result  = constructor.apply(target,args)//执行构造函数，函数的属性或者方法添加到创建的空对象上
        if(result && (typeof(result) ==='object'||typeof(result) ==='function')){
            return result
        }else {
            return target
        }
    }



## q4  闭包的优缺点
闭包的原理：  有权限访问到其他函数的的作用域的函数 


1. 闭包会阻止作用域被js垃圾回收
2. 创建私有变量
3. 创造块级作用域 




## q5 数组去重  
Set indexOf includes map reduce  

## q16 类的创建与继承
    


## q17 click 在ios 手机上有300 ms 延迟，原因及解决方法
1. <meta >  
    <meta name="viewport" content="width=device-width, initial-scale=no" >
    2. FastClick, 其原理是检测到touchend 事件后立刻发出模拟click事件，并把浏览器300ms 之后真实发出的事件阻断


## q18 cookie  localStorage sessionStorage
cookie: 数据始终在同源的http 请求中携带（即使不需要）即cookie 在浏览器和服务器之间来回传递，而sessionStoreage 和 localStorage 不会自动把数据发给服务器，仅在本地存储。cookie 还有路径（path）的概念，可以限制cookie 只属于某个路径下，存储大小只有4K 左右


sessionStorage：仅在当前浏览器窗口关闭前有效，不能长久保存，


localStorage: 在所有的同源窗口都是共享的，cookie 在所有同源窗口中也是共享的，localStorage的大小在5M左右




