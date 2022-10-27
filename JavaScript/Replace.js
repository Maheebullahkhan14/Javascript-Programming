function replace(arr,n,k){
    for(let i =0 ;i<arr.length ; i++){
        if (arr[i] == n){
            arr[i] = k
        }
    }return arr
}
arr = [ 1 , 2 , 4 , 5]

console.log(replace(arr,5,3))