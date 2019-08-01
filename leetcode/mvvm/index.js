const a ={
    b:1
}
function b () {
    console.log("a 的值发生改变")
}
bindData();
a.b = 2 ;
console.log(a.b)
function bindData() {  

    Object.keys(a).map(key =>{
        let v= a[key]
        Object.defineProperty(a,key,{
            get () {
                console.log('你正在读取a 里面的值')
                return v
            },
            set (newA){
                v= newA;
                b();
            }
        })
    })
    const oldVal = a.b;
    const newVal = a[b];
}