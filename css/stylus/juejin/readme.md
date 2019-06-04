## css 预编语言
写的stylus.styl 在浏览器运行的是.css
前端工作流在发生改变
界面开发工作被重新定义了，从小米加步枪变生产线
stylus main.styl -o main.css
编译 -o 输出，
stylus 提供了css不具备的变量定义，模块化，函数，快捷  新的语法
-w watch 监听文件修改同时编译stylus -w main.styl -o main.css
1. 变量
2. 减少输入{

}
3. 函数
4. 嵌套
 .book-bought 购买模块
  .label
    img
    flex是css在移动时代最爽的时代，最适合手机端
    子元素们对齐方向，水平主轴 justify-content
    纵轴 align-items center
    传统方案是img+兄弟节点 vertical-align： middle
    flex的考点 自适应，多设备跨终端响应会考到
    1 flex：1 比例划分，如果只给一个元素设置，占据其他元素之外的所有

    2父元素与多个子元素之间的关系
    水平对齐方式 justify-content
    垂直对齐方式可aligin-items
    3剩余空间 flex-grow：1 来分配空间
    &引用上一级的层次类名，同时可以缩进
    省去重复上一级的选择



