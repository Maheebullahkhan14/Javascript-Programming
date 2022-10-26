function arrayTest (array , Test){
    for(let i of array){
        if(!Test(i)){
            return false
        }
    }return true
}


console.log(arrayTest([1,2,5], n => { n < 10}))
console.log(arrayTest([5,7,12],n => {n < 10}))