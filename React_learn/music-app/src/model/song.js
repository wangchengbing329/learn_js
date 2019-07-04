class Song {
    constructor(id,mId,name,img,duration,url,singer){
        this.id = id;
        this.mId = mId;
        this.name = name;
        this.img = img;
        this.singer = singer;
        this.url = url;
        this.duration = duration;
    }
}
export function createSong(data){
    return new Song(
        data.songid,
        data.songmid,
        data.songname,
        `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.songmid}.jpg?max_age=2592000`,
        data.interval,
        '',data.singer.map(sin=>sin.name).join('/')
    )
}