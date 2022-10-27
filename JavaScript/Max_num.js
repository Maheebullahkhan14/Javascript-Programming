let a = [10 ,24 ,56,1 , 99,13]

function maximum1(a){
    var max1 = a[0]

    for(i=0 ; i< a.length ; i++){
        if(max1 < a[i]){
            max1 = a[i]

        }
    }return max1

}
console.log(maximum1(a))