// Sum of all element in an array
let arr = [2 , 4 ,6]

let newarr = arr.reduce((accu,curelem) => {
    return accu+=curelem
})
console.log(newarr)