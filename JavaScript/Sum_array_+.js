// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
function Sumarrayplus(arr1){
    var newarr = []
    for(var i =0;i<= arr1.length-1 ;i++){
        newarr.push(arr1[i]+1);

    }return newarr

}
arr1 = [1 , 3 , 6 , 8]
console.log(Sumarrayplus(arr1));




