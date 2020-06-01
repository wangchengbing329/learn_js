// function ReverseList(pHead){
//     var newHead, temp;
//     if(!pHead){
//         return null;
//     }
//     if(pHead.next === null){
//         return pHead;
//     } else {
//         newHead = ReverseList(pHead.next);
//     }
//     temp = pHead.next;
//     temp.next = pHead;
//     pHead.next = null;
//     temp = null;
//     return newHead;
// }
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// let a1 = new ListNode(1);
// let a2 = new ListNode(2);
// let a3 = new ListNode(3);
// let a4 = new ListNode(4);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
// console.log(ReverseList(a1))

// function printMatrix(matrix){
//     if(!matrix || !matrix.length) return null;
//     var result = [];
//     var rows = matrix.length, cols = matrix[0].length;
//     var len = rows * cols;
//     var i = 0, j = 0;
//     var circle = 0;
//     while(1){
//         while(j < cols - circle){
//             result.push(matrix[i][j]);
//             console.log(j + 'j')
//             j++;
//         }
//         if(result.length === len) break;
//         j--, i++;
//         while(i < rows - circle){
//             result.push(matrix[i][j])
//             console.log(i + 'i')

//             i++;
//         }
//         if(result.length === len) break;
//         i--, j--;
//         while(j >= circle){
//             result.push(matrix[i][j]);
//             j--;
//         }
//         if(result.length === len) break;
//         j++, i--;
//         circle++;
//         while(i >= circle){
//             result.push(matrix[i][j])
//             i--;
//         }
//         if(result.length === len) break;
//         j++, i++;
//     }
//     return result;
// }
// printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
// console.log(printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))
var removeDuplicates = function(nums) {
    nums = Array.from(new Set(nums))
    return nums
    };
    console.log(removeDuplicates([1,1,2]))