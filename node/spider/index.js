const https = require ('https')
const cheerio = require('cheerio');
const fs =require('fs')
const path = require('path')
const url = 'https://movie.douban.com/top250'
const imageDir = './math/'
const moviesDir = './doubanMoviesData/';
function doSpider(start){
    https.get(url +`?start=${start}`,(res)=>{
    // 源源不断的收到数据
     let html ='';
    res.on('data',(chunk)=>{
       html += chunk;
    });
    // 数据接收完毕
    res.on('end',()=>{
        // console.log(html)
        const $ = cheerio.load(html);
    //    li.item
    let movies = [];
        $('.item').each(function(){
            // this 限制第一个参数的选择区域 li
            // 默认是全局 第一个
            const picUrl = $('.pic img',this).attr('src');
            // console.log(picUrl),this
            const title = $('.info .title',this).text()
            const star =$('.star .rating_num',this).text()
            const link = $('.hd a',this).attr('href')

            const movie ={
                title,
                star,
                link,
                picUrl
            }
            movies.push(movie)
            downloadImage(picUrl);

        })
        saveLocalData(start /25,movies);

    })
})
}

 function saveLocalData(pageNum,movies){
    //  object = new Object
fs.writeFile(moviesDir + `data${pageNum}.json`,JSON.stringify(movies),(err)=>{
if (!err){
    console.log('数据保存成功')
}
})
 }
function downloadImage(picUrl){
https.get(picUrl,(res)=>{
    res.setEncoding('binary');
    let data = ''
    res.on('data',(chunk)=>{
        data += chunk
    })
    res.on('end',()=>{
        const filename = path.basename(picUrl)
fs.writeFile(imageDir + filename,data,'binary',(err)=>{
if(!err){
    console.log(filename,'保存成功');
}
})
    })
})
}
const total =250;
let start = 0
while (start<total){
    doSpider(start);
    start +=25;
}