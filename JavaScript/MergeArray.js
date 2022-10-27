function merge(arr1 ,arr2){
    for(var i =0 ;i<arr2.length ;i++){
        arr1.push(arr2[i])
    }return arr1
}
arr1 =[1 , 2 , 3]
arr2 = [5 ,7 ,8]

console.log(merge(arr1,arr2))