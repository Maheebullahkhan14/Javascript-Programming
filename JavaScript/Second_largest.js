// Second Largest value in an array
// steps:1) Find Largest value in an array
//       2) Find index of Largest value
//       3) delete index from Array using splice method
//       4) Apply Same lofic to find largest values

let a = [10 , 45 , 98 ,23 ,77]

const largest = (a) =>{
    firstlargest = Math.max(...a)
    index = a.indexOf(firstlargest)
    a.splice(index,1)
    secondlargest = Math.max(...a)
    return secondlargest
}
console.log(largest(a))

// My Approach
// var a = [10 , 25 , 45 , 12,77 , 53]

// function seclargest(a){
//     var max1 = a[0]
//     for (var i= 0; i < a.length ; i++){
//         if( max1 < a[i]){
//             max1 = a[i]
//             index = a.indexOf(max1)
//             a.splice(index,1)
//             snd_lar = Math.max(...a)
//         }

//     }return snd_lar
// }
// console.log(seclargest(a))