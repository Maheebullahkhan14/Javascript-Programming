// Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. Try to solve with and without reduce function.

function odd(arr1){
    var sum =0
    for(var i=0 ; i<arr1.length ; i++){
        if (arr1[i] % 2 === 1){
            sum += arr1[i]
        }
        
    }return sum
}
var arr1 = [ 1 , 3 ,2 , 5]
console.log(odd(arr1))