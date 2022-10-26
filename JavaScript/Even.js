let a = [15 , 45 , 22 ,46 , 78]

var even = []
var odd = []
for(i = 0 ; i < a.length; i++){
    if (a[i] % 2 === 0){
        even.push(a[i])
    }else{
        odd.push(a[i])
    }
}console.log(even)
console.log(odd)