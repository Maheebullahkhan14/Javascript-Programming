function revarray(arr){
    let newArr =new Array

    for(i=arr.length-1 ; i>= 0 ; i--){
        newArr.push(arr[i])
    }return newArr
}
var arr =[ 10,45,20,23,56]

console.log(revarray(arr))