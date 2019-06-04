// object
// json object 难以完成这个任务tion
// 玩家类es5没有class关键字 大写首字母的函数 构造函数
//函数可以用来构建类
function Player(name){
    // js函数跟其他语言不一样，函数一定会存在一个this，指针，总会指向点什么
    // 常在，答应 函数是js里的一等对象，JS里面除了基本数据类型之外都是对象，函数是可以被执行的对象 this是一个空对象要给属性 new构造一个新对象
   // this只想实例化后的对象
    this.name=name;
    this.enemy=null;

    console.log(this);
}
Player.prototype.win=function(){
    console.log(this.name+"win");
}
Player.prototype.lose=function(){
    console.log(this.name+"lose");
}
//Player();
//将类实例化  类是一个抽象的概念，对象可以new出来//
// 孕育爱情 如下蛋
var player1=new Player("皮蛋");
console.log(player1.name+"上线了");
var player2=new Player("小乖");
console.log(player2.name+"上线了");
player1.enemy=player2;
player2.enemy=player1;
//成为对手的过程 来一把
//游戏的过程
player1.win();
player2.lose();
// console.log(player1.name);
//
// console.log(player2.name);