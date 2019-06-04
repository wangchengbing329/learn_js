var LRUCache =function(capacity){
    this.capacity = capacity//容量
    this.obj = {

    }//负责存放数据
    // 最近最少使用？
    // 开头[0] ，结尾 .length-1
    // unshift pop () obj 存取 数组来存重要性
    this.arr = []
}
LRUCache.prototype.get = function(key){
    let val  =this.obj[key];
    if (val >0){
        // 最近最少使用
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
        return val;
    }else{
        return -1;
    }
}
LRUCache.prototype.set = function(key,val){
    // 之前已经存在
    if(this.obj[key]){
        this.obj[key] = value;//更新
        var index = this.arr.indexOf();
        this.arr.splice(index,1);
        this.arr.unshift(key)
        return;
    }
// 空间不够了怎么办？
if(this.capacity === this.arr.length){
    //满了
    var  k = this.arr.pop();
    this.obj[k] = undefined;

}
    // 1,1 
this.obj[key] = val;//存好了
this.arr.unshift(key);//最近经常使用
}
var cache = new LRUCache(2)
cache.set(1,1)
cache.set(2,2)
console.log(cache.get(1));
cache.set(3,3)
console.log(cache.get(2))
cache.set(4,4)
console.log(cache.get(1))
console.log(cache.get(3))
console.log(cache.get(4))

