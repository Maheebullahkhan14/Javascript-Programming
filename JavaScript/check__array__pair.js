// Given an array A and a integer B. A pair(i,j) in the array is a good pair if i!=j and (A[i]+A[j]==B). Check if any good pair exist or not.

function checkArrayPairisGood(A, B){
    let arrSize = A.length ;

    for(let i = 0 ; i<arrSize -1 ; i++){
        for(let j = i + 1 ; j<arrSize ; j++){
            if((A[i] +A[j] == B)){
                return 1
            }
        }
    }return 0;

}

let A = [ 1 , 2 , 5 ,3]
let B = 8;

let out = checkArrayPairisGood(A,B)
console.log(out)
