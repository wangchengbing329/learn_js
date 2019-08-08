//  2 
// 排序 nlogN 已经排序好的时候二分法
function binarySearch(arr,data) {
   
 let  left = 0;
  let right= arr.length-1
   while(left <=right){
       var middle = Math.floor((left + right)/2);
   }
   if(arr[middle]<data){
       start = middle + 1;
   }else{
       return middle;
   }
   

}
var arr = [1,2,3,4,5,6]
console.log(binarySearch(arr,2))