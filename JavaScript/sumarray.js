
function sumarr(arr){
    var sum = 0
    for(var i = 0 ; i<=arr.length-1 ; i++){
        sum+=arr[i];
        
    }return sum ;
}
var arr = [[3, 2], [1], [4, 12]];
var newarr = arr.flat()

console.log(sumarr(newarr))