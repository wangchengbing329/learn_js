// const findSort = str=>str.split(' ').map(w=>w.length).sort((a,b)=>a-b)[0];
function findSort(str){
    return Math.min.apply(null,str.split(' ')
    .map(w =>w.length));
}



console.log(findSort('bitcoin take over the world maybe who knows perhaps'));