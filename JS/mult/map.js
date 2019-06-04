//  对象 林 gaodeMap 
 const googleMap = {
    show(){
        console.log('开始渲染goole地图')
    }
}
const baiduMap = {
    // 为互换做准备
    show(){
        console.log('开始渲染百度地图')
    }
}
const gaodeMap = {
    // 为互换做准备
    show(){
        console.log('开始渲染高德地图')
    }
}
const sosoMap = {
    // 为互换做准备
    
}

const renderMap = (map) =>{
    // map检测
    if(map.show && map.show instanceof Funnction){
        map.show();
    }
    // if(map.show && typeof map.show === 'function'){
    //       map.show();
    // }
    
    
    // 分支太多 
    // if(type === 'baidu')  
    // baiduMap.show();
    // else if(type === 'google')
    // googleMap.show();
    // else if(type === 'gaode')
    // gaodeMap.show();
    //  map.show();

}
renderMap(baiduMap);
renderMap(sosoMap);
