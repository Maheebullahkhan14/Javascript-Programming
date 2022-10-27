// FIzzbuzz
// If number is divided by 3 "Fizz"
// If Number is Divided by 5 "Buzz"
// If Number is Divided by Both 3 and 5 then FIzzbuzz

var Fizz = (n) =>{
    for (var i =0 ;i <= n ; i++){
        if ( i % 3 ===0 && i% 5 ===0){
            console.log("FizzBuzz");
        }
        else if (i % 3===0 ){
            console.log("Fizz");
        }
        else if (i % 5 === 0){
            console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
}
Fizz(15)