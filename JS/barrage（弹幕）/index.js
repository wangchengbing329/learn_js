let data  = [
    {
     value:'周杰伦这首歌好听' ,time:5,color:'red',speed:1 ,fontSize:22
    },
    {
        value:'周杰伦' ,time:10,color:'green',speed:1 ,fontSize:30
       },
       {
        value:'这首歌好听' ,time:12,
        // color:'white',默认是黑色的弹幕
        speed:1 ,fontSize:10
       },
       
]


// 获取到所有dom元素
let doc = document;
let canvas = doc.getElementById('canvas')
let video = doc.getElementById('video')
let $txt=doc.getElementById('text')
let $btn=doc.getElementById('btn')
let $color=doc.getElementById('color')
let $range=doc.getElementById('range')

class CanvasBrarrage{
    constructor(canvas,video,opts = {}){
        if(!canvas||!video){
            return;
        }
        console.log(this)
    // 挂载到this上
    this.video = video;//前面的video是属性，后面的才是对象
    this.canvas = canvas;
    this.canvas.width = video.width;
    this.canvas.height = video.height;
    this.ctx = canvas.getContext('2d')
    // 设置一下默认值如果没有传入就使用该值
let defOpts ={
    color:'#e91e63',
    speed:1.5,
    opcity:0.5,
    fontSize:20,
    data:[]
}
// 合并对象全部挂载到this实例上
Object.assign(this,defOpts,opts)
// 添加一个开关变量，添加属性来判断播放状态，默认true是暂停
this.isPaused = true
// 得到所有的弹幕消息
this.barrages = this.data .map(item => new Barrage(item,this))   
//渲染
this.render() 
 }
//  function rander(){}类似于下面这个es6写法
 render(){
     this.clear()
    //  渲染弹幕
    this.renderBarrage()
    // 如果没有暂停的话就继续渲染
    if(this.isPaused === false ){
        // 通过raf渲染动画，递归进行渲染
        requestAnimationFrame(this.render.bind(this))
    }

 }
 clear(){
    //  清除整个画布
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
 }
 renderBarrage(){
    //  根据该时间来和弹幕要展示的的时间做比较，判断是否展示弹幕
    let time = this.video.currentTime
    // 遍历一下所有弹幕，每一个弹幕barrage都是Barrage的实例
    this.barrages.forEach(barrage =>{
        // 只有当视频播放的时间大于等于当前弹幕的展示时间才做处理
        if (!barrage.flag && time >=barrage.time){
// 判断对当前弹幕是否已经初始化过
                if(!barrage.isInit){
                    barrage.init()
                    barrage.isInit = true
                }
                // 弹幕需要从右往左渲染，所以X坐标减去当前弹幕的speed即可
                barrage.x-=barrage.speed
                barrage.render()
                // 如果弹幕的X轴周坐标小于自身的宽度，表示渲染案结束
                if(barrage.x<-barrage.width){
                        barrage.flag = true
                }
        }
    })
 }
}

// 创建一个barrage用来实例化每一个弹幕元素
class Barrage{
    constructor(obj,ctx){
        this.value = obj.value//弹幕 的内容
        this.time = obj.time//弹幕的时间
// 把obj和ctx挂载到this上
        this.obj = obj
        this.context = ctx


    }
    // 初始化弹幕
    init(){
        // 如果数据没有涉及到下面4中参数，就直接去默认值
        this.color = this.obj.color||this.context.color

        this.speed = this.obj.speed||this.context.speed

        this.opcity = this.obj.opcity||this.context.opcity
        this.fontSize= this.obj.fontSize||this.context.fontSize

        // 为了计算，每个弹幕的宽度，我们来创建一个元素p，然后计算文字的宽度
        let p = doc.createElement('p')
    p.style.fontSize= this.fontSize+'px'
    p.innerHTML = this.value
    doc.body.appendChild(p)
    this.width = p.clientWidth
    doc.body.removeChild(p)

    // 设置弹幕出现的位置
    this.x = this.context.canvas.width
    this.y = this.context.canvas.height * Math.random()
    // 超出范围的处理
    if(this.y<this.fontSize){
        this.y = this.fontSize

    }else if(this.y>this.context.canvas.height - this.fontSize){
        this.y = this.context.canvas.height - this.fontSize
    }

    
    }
    // 渲染每一条弹幕
    render(){
        // 设置画布文字的字号和字体
        this.context.ctx.font = `${this.fontSize}px Arial`
        // 设置文本颜色
        this.context.ctx.fillStyle = this.color
        // 绘制文字
        this.context.ctx.fillText(this.value,this.x,this.y)
    }
}
// 创建canvasBarrage的实例
let canvasBrarrage = new CanvasBrarrage(canvas,video,{data})
// 当视频点击播放按钮的时候，设置video的play事件来调用canvasBarrage里面的render
video.addEventListener('play',() =>{canvasBrarrage.isPaused = false
canvasBrarrage.render();//触发渲染
})