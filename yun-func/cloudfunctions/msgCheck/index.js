// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')
 let appid  = '	wx037e7afbf24c6604'
let secret = '89c85b7b9dd1ff95bf44700d6be4f5dc'
let msgCheckUrl = "https://api.weixin.qq.com/wxa/msg_sec_check?access_token=";
let tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid= +appid + $serect +serect"
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx037e7afbf24c6604&secret=89c85b7b9dd1ff95bf44700d6be4f5dc
// 云函数入口函数
exports.main = async (event, context) => {
  // 令牌许可
let tokenResponse = await got (tokenUrl);
console.log(tokenResponse)
let token =JSON.parse(takenResponse.body).access_token
let checkResponse = await got(msgCheckUrl + token,{
  body :JSON.stringify({
    content:event.text
  })
})
console.log(checkResponse)
return checkResponse.body
// return event.a + event.b
// return '没问题';
}
