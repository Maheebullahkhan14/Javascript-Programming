let a = [12 , 0 , 16 , 78 ,-9]

function minimum1(a){
    var min1 = a[0]
    for (i = 0; i<a.length ; i++){
        if(min1 > a[i]){
            min1 = a[i]
        }
    }return min1
}
console.log(minimum1(a))