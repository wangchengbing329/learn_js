- 数字太大，相加，
会溢出
 字符串 大数字

 相加的算法 最后一位相加 
 carry + 加的结果 放入数组，
 反序，
   - 用数据结构处理 
   如果不用字符串表达，有没有表达方案？
   链表 linkedlist 
   推荐算法
   - 链表 
   有点像数组。可以存一堆的数据
   数组是连续空间 
   链表是不连续的，更优 通过指针联系起来 ，
   每个节点 ，linkedNode => linkedList
   {val:,next:null}
   1. 初始化链表 new LInkedNode();
   val next
   2.  遍历链表 
   while(node){
       node = node.next;

   }
   3. 数组转化成链表 
    - 第一次循环val  .length次数
    - 第二次给 next .length-1

    - 大数相加 可以选择字符串 但链表更自然
     最后返回的也是相应的数据结构
     算法每位相加， 存储，进位


