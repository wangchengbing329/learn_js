function TreeNode(val){
this.val = val;
this.left = this.right = null;

}
 var a1 = new TreeNode(3);
 var a2 = new TreeNode(9);
 var a3 = new TreeNode(20);
 var a4 = new TreeNode(15);
 var a5 = new TreeNode(7);
 a1.left = a2;
 a1.right = a3;
 a3.left = a4;
 a3.right = a5;

//  102 层序遍历
// 从根节点开始，一层一层来分层遍历，7 结束，
// [[3],[9,20],[15,7]]
//     3
//   9    20  
//     15    7
// 按层来 每个节点把自己的子节点情况告诉 算法就OK
// items [] 子节点也可能有他的子节点 
// 队列 Queue
function levelOrderTrasal (root){
if(!root) return []
const items = [];
// tree node left right
const queue = [root,null];//队列，等待被了解情况的节点 出队，
// shift push（）
let levelNodes = [];//每一层的节点
while(queue.length>0){
    const t = queue.shift();
    // root
    if(t){
        levelNodes.push(t.val)
        if(t.left){
            queue.push(t.left)
        }
        if(t.right){
            queue.push(t.right)
        }else{
            //层次分隔符
            items.push(levelNodes);
            levelNodes = [];
            // null 是上一层 在队列的节点是？
            // 下一层的节点，绝对没有下下层的节点
            // 按层来遍历
            if(queue.length>0){
                queue.push(null);
            }
        }
    }
}
return items;
}
 console.log(levelOrderTrasal(a1))
//  queue [root,null]  [null]
// levelNodes []
// items []