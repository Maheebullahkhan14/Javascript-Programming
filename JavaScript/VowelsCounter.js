// let str1 = 'Hello i Am khan'
// let vo_arr =[]
// let count = 0
// let small = str1.toLowerCase()

// let vowels = 'aeiou'
// for(let i of vowels){
//     vo_arr.push(i)
//     if(small.includes(i)){
//         count++
//     }
// }console.log(count)



// console.log(vo_arr)

function vowelCount(str){
    let small = str.toLowerCase()
    let vowels = 'aeiou'
    let arr =[]
    let counter = 0

    for(let i of vowels){
        arr.push(i)
        if(small.includes(i)){
            counter ++
        }
    }console.log(counter)
}
var str = 'AEIOU'
vowelCount(str)