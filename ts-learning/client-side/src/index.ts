// 布尔类型
// let bool:boolean = false;


let bool:boolean
// bool = 123


//  数值类型
let num:number = 123;
// num = 'abc'
num  = 0b111011;
num = 0o173;
num = 0x7b;

// 字符串类型
let str:string
str = 'abc'
str = `数值${num}`

// 数组类型
// [1,2,3,4]
// 写法一
let arr1:number []
arr1 =[5];
let arr2:Array<number>
let arr3:(string | number|boolean)[]
arr3 = [1,'a']

// 元组类型
let tuple:[string,number,boolean]
tuple = ['a',1,false]


// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN = 4,
    USER
}
console.log(Roles.USER)

// if (roles === Roles.SUPER_ADMIN) {

// }

// any 类型
let value:any
value = 'abc';
value = 123;
value = false;

const arr4:any[] = [1,'a'];

// void 类型
const consoleText = (text:string):void =>{
    console.log(text)
}
// console.log(123)
consoleText('1gugh')

let v:void;
v = undefined;
v = null;


// null undefined
let u:undefined
u = undefined
// u =123
num = undefined;
num = null;
// never 类型
// const errorFunc = (message:string):never => {
//     throw new Error(message)
// }
// errorFunc('abc')
// const infiniteFunc = ():never =>{
//     while(true){}
// }

let neverVarable = (()=>{
    while(true) {}
})()


// object
let obj = {
    name:'wang'
}
let obj2 =obj;
console.log(obj)
function getObject(obj3:object) :void {
    console.log(obj3)
}
getObject(obj2)

// 类型断言
const getLength = (target:string |number):number => {
    if ((<string>target).length || (target as string).length ===0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}
getLength(66666)



interface AccountNew {
    account_id: string,
    account_name: string,
    tel: number,
    gender:boolean
}

function consoleAccount (account: AccountNew):void {
    console.log(account.account_id,account.account_name,account.tel,account.gender)
}

let wang = {
    account_id : 'wang101',
    account_name : '王',
    tel : 18355623073,
    gender:true
};
consoleAccount(wang);


interface IntIdentify<T> {
    <T>(arg:T):T
}


function identify<T>(arg:T): T {
    return arg
}
let myIdentify :IntIdentify<number> = identify




class GenericNumber<T> {
    zeroValue: T;
    add: (x:T,y:T) => T;
}


let myGenericNumber = new GenericNumber<number>();
myGenericNumber.add = (x,y) => x + y;

let stringNumberic = new GenericNumber<string>();
stringNumberic.zeroValue = '';
stringNumberic.add = (x,y) => x + y;
console.log(stringNumberic.add(stringNumberic.zeroValue,'test'))



interface Lengthwise {
    length:number;

}


function loggingIdentify< T extends Lengthwise> (arg:T):T {
    console.log(arg.length);
    return arg;
}


loggingIdentify({length:10,value:3})



function getProperty<T,K>(obj:T,key:K):K {
    return obj[key]
}


let x = {a:1,b:2,c:3,d:4};
getProperty(x,'a')

function create <T>(c: {new():T}):T {
    return new c()
}



class BeerKeeper {
    hasMask:boolean;
}

class zoomKeeper {
    nametag:string
}

class Animal {
    numLegs:number
}

class Bee extends Animal {
    keeper:zoomKeeper;
}

class Lion extends Animal {
    keeper:zoomKeeper;
}

function createInstance <A extends Animal>(c: {new() : A}):A {
    return new c()
}   


createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;


