const inputfrom = 5

var fact = 1;

if(inputfrom < 0){
    console.log('Plz give positive number')
}else{
    for(let i = 1 ; i <= inputfrom ; i++){
        fact = fact * i
    }
    console.log(fact)
}

// Function 
// const prompt = require("prompt-sync")()
// const inputfrom = prompt('Enter the number')
// var fact = 1
// function factorial(infrom){
//     if (inputfrom <0 ){
//         console.log('plz give the positive number')
//     }else{
//         for(let i = 1 ; i<= inputfrom; i++){
//             fact = fact * i
//         }
//     }console.log(fact)
// }

// factorial(inputfrom)