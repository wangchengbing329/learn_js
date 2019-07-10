export default function (len = 32){
    const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const maxPos = $chars.length
    let str = ''

    // const index = (Math.random() * ($chars.length))
    for(let i=0;i<len;i++){
        // const a = $chars[index]
        // let b = + 'a' 
        str +=$chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return str
}