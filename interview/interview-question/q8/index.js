function Person (name){
    this.name = name 
}
let p = new Person('wn')
// p.__proto__ =Person.prototype
// Person.__proto__ =Function.prototype
// Function.__proto__ = object

var foo = {},
F = function () {

}
Object.prototype.a = 'valA';
Function.prototype.b = 'valB'
console.log(foo.a) //valA
console.log(foo.b) //undefined
console.log(F.a)//valA
console.log(F.b)//valB

// 

function Person(name){
    this.name = name 
    // return {}   #1
    // return 2626#2
}
let p = new Person('wn')
// console.log(p)     /{}  #1
// console.log(p) wn  #2


// ------构造函数不需要返回值，使用new 来创建时，如果 return 的时候不是对象类型的话，会忽略返回值，
// 如果是对象，return 该对象，（return null也会忽略）

function Person(name){
    this.name = name
}
function Student (){

}
Student.prototype = Person.prototype
Student.prototype.constructor = Student
let p =new Student()
console.log( p instanceof Person )


for (let i = 0;i<10;i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}

//  let 每次循环会生成一个封闭的块级作用域和settimeout绑定，var每次循环会覆盖掉上有一次的作用域



//  for in 迭代 和 for of 有什么区别

// Array.prototype.method = function () {
//     console.log('wn')
// }
var myArr = [1,2,3,4,6,5,7]
// myArr.name = 'wn'
for(let index of myArr){
    console.log(index)
    // 1234556467
}

for (let index in myArr){
    console.log(index)
    // 0123456
    console.log(myArr[index])
    // 1234567
}

// for in 
//  index 是索引 索引为字符串型数字不能进行几何运算  #1
//  for in 遍历的顺序有可能不是按照实际数组的内部价顺序 #2
// 使用 for in 会遍历数组的所有的可枚举属性，包括原型 #3
//  for in 更适合遍历对象

// for of 
// for in 遍历的数组的索引（键名），而 for of 遍历的是数组的元素
// /for of 遍历的只是数组的元素，而不包括数组的原型属性和索引
  
let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
function outputArr (arr){
    var res = []
    for(var i =0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res = res.concat(outputArr(arr[i]))
        }else{
            res.push(arr[i])
        }
    }

}

function outputArr(arr){
    return arr.reduce(function (pre,item) {
        return pre.concat(Arr.isArray(item) ?outputArr(item):item)
    },[])
}
console.log(outputArr(gArr))

// let oArr = [1,2,3,4,5,6,7,3,2,8]    需要的结果