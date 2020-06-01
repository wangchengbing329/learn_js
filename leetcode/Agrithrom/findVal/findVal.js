/**
 * ? 在一个二位数组中，每一行都按照从左到右递增，每一列都是自上而下递增，完成一个函数，输入目标值和数组，看看是否有该值
 */
function findVal(target,arr) {
    let len = arr.length-1,i,j;
    for (i=len,j=0;i>=0 && j < arr[i].length;) {
        if (target == arr[i][j]) {
            return true;
        } else if (target > arr[i][j]) {
            j ++;
            continue;
        } else if (target < arr[i][j]) {
            i--;
            continue;
        }
    }
    return false;
}