function generateHashtag(str){
    // if(str.length>140||str.length === 0){
    //     return false;
    // }
    // str = "#" + str;
    // return str;
    return (str.length > 140  || str.length === '')? false :'#' + str.split('').map(capitalize).join(' ');
}
function capitalize(w){
    console.log(w);
    return w.charAt(0).toUpperCase() + w.slice(1);
}
console.log(generateHashtag('How are you'));
console.log(generateHashtag(''));
console.log(generateHashtag('How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are yoHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youuHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you'));



