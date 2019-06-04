const superagent = require('superagent');
const cheerio =require('cheerio');
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const nodemialer = require('nodemailer')
const local = 'jiangxi/qingshanhu-district'
const weatherUrl = `https://tianqi.moji.com/weather/china/${local}`;
const getWeatherTips = function (){
    return new Promise ((resolve,reject)=>{
        superagent.get(weatherUrl)
        .end((err,res)=>{
            if(err){
                reject(err)
            }
            const $ = cheerio.load(res.text);
            const $weatherTips = $('.wea_tips');
            // 查找 XX 元素下面的节点 
            const weatherTip = $weatherTips.find('em').text();
            let threeDaysData = [];
            $('.forecast .days').each((index,dayNode)=>{
                const $singleDay = $(dayNode).find('li');
                const day = $singleDay.eq(0).text().trim();
                const weatherText = $singleDay.eq(1).text().trim();
                const temperature = $singleDay.eq(2).text().trim();
                threeDaysData.push({
                    day,weatherText,temperature
                })
            })
            resolve({weatherTip,threeDaysData});
        })
    })
}
const getOneData = function(){
    return new Promise((resolve,reject)=>{
        superagent.get('http://wufazhuce.com/')
        .end((err,res)=>{
            if (err) {
                reject(err);
              }
              let $ = cheerio.load(res.text);
              let selectItem = $("#carousel-one .carousel-inner .item");
              let todayOne = selectItem[0];
              let todayOneData = {
                type: $(todayOne)
                  .find(".fp-one-imagen-footer")
                  .text()
                  .replace(/\s/g, ''),
                text: $(todayOne)
                  .find(".fp-one-cita")
                  .text()
                  .replace(/\s/g, '')
              };
              resolve(todayOneData)
        
        })
    })
}
// getWeatherTips().then(tip=>{
//     console.log(tip)
// })
//聚合数据 
function getSpiderData(){
    const htmlData = {};
    Promise.all ([getWeatherTips(),getOneData()])
    .then(spiderArr=>{
        // spiderArr 数组 由 promise resolve 出来的数据组成
        const [weatherData,oneData] =spiderArr;
        htmlData['weatherTip'] = weatherData.weatherTip;

        console.log(weatherData,oneData);
        sendEmail(htmlData);
    })
}
function sendEmail(htmlData){
const template = ejs.compile(
fs.readFileSync(path.resolve(__dirname,'email.ejs'),'utf8')
)
const html = template(htmlData);
// 发送邮件
 let transporter = nodemialer.createTransport({
     service:'qq',
     port:465,//邮件协议 smtp 端口
     secureConnection:true,
     auth:{
         user:'319264106@qq.com',
         pass:'dggqlqwtdqjjcaii'
     }
 })
 transporter.sendMail({
     from:'皮卡丘<319264106@qq.com>',
     to:'1263488791@qq.com',
     subject:'邮件',
     html:html
 },
 (err,info)=>{
     if(err){
         console.log('err',err)
         return false;
     }
     console.log('info',info)
 })
}
getSpiderData();