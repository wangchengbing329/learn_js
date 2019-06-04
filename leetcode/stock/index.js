//最大收益 交互
var maxProfit = function (price){
var i,
len = price.length,
low,//低点
high,//高点 
cur,
max = 0;
if(length ===0){
    return 0
}
low = price[0];
high= low;
for(i=1;i<len;i++){
    cur = price[i];
//    某一天 要买，low值
// 要卖 high 
    if(cur>high){
high =cur;
    }else if(cur<low){
   low =cur;
   high = cur;//先买再卖
    }
    if(high-low>max){
        max = high -low;
    }
}
    return max;

}
console.log(maxProfit([7,1,5,3,6,4]))