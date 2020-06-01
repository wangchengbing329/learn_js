// 会溢出 用的字符串，链表 
function LinkedNode(val){
this.val =val;
this.next = null;
}

 /**
 * 
 * @param {LinkedList} l1 
 * @param {LinkedList} l2 
 */
var addTwoNumbers = function (l1,l2){
let a= [],
b = [],
newL1 = l1,//引用赋值
newL2 = l2;
// 到着来 链表是单向的，做不到
// array reverse();
while(newL1){
    a.push(newL1.val);
    newL1 = newL1.next;

}
while(newL2){
    b.push(newL2.val)
    newL2 = newL2.next;
}
a.reverse();
b.reverse();
console.log(a,b)
let ans = [];//两位相加的结果
let carry = 0;//是否进位
while(a.length ||b.length){
    c= a.length?a.shift():0;
    let d =b.length?b.shift():0;
    let sum = c+d +carry;
    ans.push(sum%10);
    if(sum>=10){
        carry = 1;
    }else{
        carry = 0;
    }
   

}  carry &&(ans.push(carry));//&&省去了if 如果有进位
    ans.reverse();//反过来
//    return ans.join('');
// 返回的应该也是一个节点，只要头结点就可以
let ret = [];
for (let i =0,len = ans.length;i<len;i++){
ret[i] = new LinkedNode(ans[i]);//值部分
}
for(let i =0,len = ans.length;i<len-1;i++){
    ret[i].next = ret[i+1]//指针
}
console.log(ret)
 return ret[0]

}
// 链表的初始化 
let a1 = new LinkedNode(1),
a2 =new LinkedNode(2),
// a2 =new LinkedNode(2),
a3 =new LinkedNode(3);
a1.next = a2;
a2.next = a3;

let b1 = new LinkedNode(4),
b2 =new LinkedNode(5),
// b2 =new LinkedNode(2),
b3 =new LinkedNode(6);
b1.next = b2;
b2.next = b3;
// let node = a1;hh
// while(node){
//     console.log(node.val)
// node = node.next
// }

let ret = addTwoNumbers(a1,b1)
while(ret){
    console.log(ret.val)
    ret = ret.next
}


