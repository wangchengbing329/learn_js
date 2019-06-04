// function words(e){
// (/\！/)
// e.split(0,/\!/)
// 
const words = (str,pattern=/[^a-zA-Z-]+/)=>str.split(pattern)
console.log(words('I love Javascript!!'))
    