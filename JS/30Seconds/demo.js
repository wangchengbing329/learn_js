// [1,2,3,4]  求出他的平均值
// let a = [1,2,3,4]
// for(i=0;i<a.length;i++){
    
// }
const average = (...nums)=> nums.reduce((accc,val)=>acc+val,0)/nums.length//rest 收起
console.log(average(...[1,2,3,4]))//spread
