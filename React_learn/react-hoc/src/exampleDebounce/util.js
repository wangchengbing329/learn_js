


/**防抖
 * func wait 
 * 
 * 
 *  */

export function debounce(func ,wait){
    var result,timeout;
    
return function(){
    //this
    // 参数
    var context = this;
    var args = arguments;
    clearTimeout(timeout)
timeout= setTimeout(()=>{
 result = func.apply(this,args)
},wait);
return result;
}
}
// 可用于装饰的防抖
export function decDebounce(wait){
return function(target,key,descriptor){
var callBack = descriptor.value;
var fn =debounce(callBack,wait)
descriptor.value = fn;
}
}
export function decArrowDebounce(wait){
    return function(target,key,descriptor){
        var callBack = descriptor.initializer && descriptor.initializer();
        var fn  = debounce(callBack,wait);
        // 属性 ->方法
        // get 方法 -> 属性
        // decriptor.value 
        // return {

        // }
        // 改变原来的 || 返回一个新的
        return {
            configurable:true,
            get:function(){
                return fn ;
            }
        }
    }
}
// 高阶组件 hoc 装饰整个组件
// class 
// 修饰类的
export function decDisplsyName(displayname){
    return function (target ){
        target.displayName = displayname;

    }
}