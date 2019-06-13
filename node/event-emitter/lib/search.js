const req = require('./request')
module.exports = (keyWords) =>{
    keyWords = encodeURIComponent(keyWords)
    const url = 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=' + keyWords
    return  req(url);
}