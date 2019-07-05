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
    


