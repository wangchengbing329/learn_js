// 1 value 
// 1 后面跟着的 value 2 跟着1
// 3 值是3 跟着2 
// 将数字的每一位变成一个ListNode的实例
// 既不是字符窜也不是数值
// 而是线性表数据结构
function ListNode(val){
this.val = val;
// 指针 
this.next = null;

} 
let number = 1234567890;
let n1 = new ListNode(1);
console.log(n1)
let n2 = new ListNode(2);

n1.next = n2;
let n3 = new ListNode(3);

n2.next = n3;
let n4 = new ListNode(4);

n3.next = n4;
// 遍历链表 ，travel一下
let node = n1
while(node){
    // node = n1.next;
    console.log(node.val)
    node = node.next

}


