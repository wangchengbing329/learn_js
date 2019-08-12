function b (){
new Animal.call(this)
console.log(Animal.call(this))
}
class Animal {
    constructor(){
        a:1
    }
}
b()