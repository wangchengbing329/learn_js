## script 
1. 下载2.执行
1. async 
    1. html parse（解析）/ 下载    是并行的 
     2. 下载完就执行 顺序无法控制
2. defer
     1. html parse/ 下载    并行
     2. 整个文档加载完成之后 按照script 在文档中出现的顺序执行
3. 没有属性
1. html parse 和js 下载 执行都是互斥的


## crossorigin
用于 可以引入跨域资源的标签：img link script
crossorign 代表要协商跨域
后端没设置 Access-control-* 就会出错
