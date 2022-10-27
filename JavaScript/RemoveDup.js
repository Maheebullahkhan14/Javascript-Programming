// Object Way
// let a =[ 45 ,12,56,12,45]

// obj ={}

// for (let i of a){
//     obj[i] = true
// }

// let b = Object.keys(obj)
// console.log(b)

// Brute Force
let a = [10,5,12,15,12]
let b = []

for (let i=0;i<a.length;i++){
    if (b.indexOf(a[i])===-1){
        b.push(a[i])
    }
}
console.log(b)