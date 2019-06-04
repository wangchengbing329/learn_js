// ali 14.6 2.6
// meituan 16 4
// 51 信用卡 17 5 
// S 5 
// A 3
// B 2
// C 1
// D
// level key 计算函数？
let stratigies = {
   'S':function(salary){
       return salary * 5;

   },
   'A':function(salary){
    return salary * 3;
    
},
'B':function(salary){
    return salary * 2;
    
},
'C':function(salary){
    return salary * 1;
    
}

}
function calculate(level,salary){
    return stratigies[level](salary);
// switch(level)
// {
//     case s: salary =salary * 5;
//     break;
//     case a:   salary =salary * 3;
//     break;
//     case b:  salary =salary *2;
//     break; 

//     case c:   salary =salary *1;
//     break;
//     default:break;
// }

 }

// console.log(calculate('level',10000))