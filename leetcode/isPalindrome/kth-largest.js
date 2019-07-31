// 在一个无序数组中，找出第k 大的数字
//  1.排序
//  2. [k]
// [1,4,9,2,6,10]
var findKthLarget = function(nums,k){
    return nums.sort((a,b)=>b-a)[k-1]
}

console.log(findKthLarget([1,4,9,2,6,10]))
