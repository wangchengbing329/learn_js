## 挂载阶段
第一次渲染 
Mount(挂载)
componentWillMount
componentDidMount
##更新阶段


shouldeComponentUpdate
true 更新
false 不更新
componentWillUnmount
清理 
定时器
全局的事件绑定


## red  blue(主题)  context 15.x.x版本
<!-- parent state -->
{
    theme:'red'
}
层层传递下去
父组件->子->孙
1. 父 组件 通过getChildContext 返回提供的context 内容
2. 父组件 .childrenContextTypes 定义提供的context 类型
3. 子组件 获取 .contextTypes 定义接受的类型
this.context 获取
问题：
跨层级传送的时候，加入中间某一组件 shouldComponentUpdate
return false 了之后 导致后代不会更新 context 的数据不能同步。
##context 16.x.x版本
1. 构造Provider Consumer
2. 父组件<Provider value={}/>提供数据
3. 后代组件<Consumer>{()=>{}}</Consumer>获取数据

state = {
    theme:'purple',
    toggle:this.handleToggletheme
}
静态属性 无法获取 实例的this