var Palindrome = function(x){
    let rev = ''
    let xstr = x.toString()

    for(i of xstr){
        rev= i +rev
    
    }console.log(rev)
}


Palindrome(123)