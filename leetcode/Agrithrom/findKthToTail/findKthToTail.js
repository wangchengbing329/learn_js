/**
 * ? 输入一个链表，输出该链表中倒数第k个结点。
 * 
 */
function ListNode(x) {
    this.val = val;
    this.next = null;
}
function FindKthToTail(head, k){
    if(!head || k <= 0){
        return null;
    }
    var i = head, j = head;
    /**
     * 确定倒数K是否超过总长度，
     * 让j先走倒数的步数然后i再走剩余的步数即可得到倒数K
     */
    while(--k){
        j = j.next;
        if(!j){
            return null;
        }
    }
    while(j.next){
        i = i.next;
        j = j.next;
    }
    j = null;
    return i;
}