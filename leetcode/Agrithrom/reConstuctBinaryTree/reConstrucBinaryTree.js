/**
 * ! 通过先序遍历和后续遍历重建二叉树并返回。
 * ? 输入某二叉树的先序遍历和后序遍历结果，重建该二叉树。假设输入的前序遍历和中序遍历不含重复的值
 * ? 例：先序遍历结果[1,2,4,7,3,5,6,8] 后序遍历结果[4,7,2,1,5,3,8,6]
 */
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * 
 * @param {*} pre 先序遍历 VLR 第一个为根节点
 * @param {*} vin 中序遍历 LVR　左子节点和右子节点分布在根节点两侧
 */
function reConstructBinaryTree(pre,vin) {
    if (pre.length == 0 || vin.length == 0) {
        return null;
    }
    // 先找出根节点在中序遍历中的下标。
    let index = vin.indexOf(pre[0]);
    // 先切除根节点左侧所有的节点
    let left = vin.slice(0,index)
    let right = vin.slice(index+1)
    let node = new TreeNode(vin[index]);
    // 先序遍历去除根节点后，index即为先序遍历的中间线，也为左序和右序的切割线。
    node.left = reConstructBinaryTree(pre.slice(1,index+1),left)
    node.right = reConstructBinaryTree(pre.slice(index + 1),right)
    return node
}
console.log(reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]))