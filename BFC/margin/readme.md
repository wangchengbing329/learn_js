##BFC的概念
Block formatting context(块级格式化上下文)
#BFC的渲染规则
1. BFC在页面上是一个独立额容器，最显著的效果是建立一个隔绝的空间，外面的元素不会影响里面的元素，反之里面的元素也不会影响外面的元素
2. BFC的区域不会与浮动元素的box重叠
3. 垂直方向的外边距会发生折叠（包括父子元素，和兄弟元素）水平方向的外边距不存在边距折叠
#BFC的创建条件
overflow的值不为visble都可以是容器变为BFC容器
float的值不为none
行内块级inline-block
表格单元display：table-cell
绝对定位（absolute,fixed）


