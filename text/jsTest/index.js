const o = {
    a:1,
    b:2,
    c:3
}
// let study,learn;

/**
 * todo with 
 */
// with (o) {
//      study = a;
//      learn = b;
// }
// console.log(study,learn)

let a = [1,2,3,4,5]

/**
 * todo do-while
 */

// do {
//     a.splice(0,1);
//     console.log(a)
// } while ( a.length > 1)


// console.log(a);

/**
 * todo label
 * 
 */
// let num = 0;
//  state: for (let item of a) {
//      if (item > 4) {
//         break state;
//      }
//      num++;
//  }
// console.log(num);

for (let key in o) {
    console.log(key)
}
console.log(o.constructor)