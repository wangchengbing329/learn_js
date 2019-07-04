import jsonp from "./jsonp";

 export const URL = {
    // 推荐轮播
    carousel: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    //最新专辑
    newalbum:'https://u.y.qq.com/cgi-bin/musicu.fcg',
    /*专辑信息*/
  albumInfo: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg",
  }
  
  export const PARAM = {
    format: "jsonp",
    inCharset:"utf-8",
    outCharset: "utf-8",
    notice: 0
  }
 export  const OPTION = {
    param: 'jsonpCallback',
    prefix: 'callback'
  }
  export function getAlbuminfo(mId){
return jsonp(

  URL.albumInfo,{
    ...PARAM,
    albummid: mId,
		g_tk: 5381,
		loginUin: 0,
		hostUin: 0,
		platform: 'yqq.json',
		needNewCode: 0
  },
  OPTION
)

  }
 export const CODE_SUCCESS = 0;