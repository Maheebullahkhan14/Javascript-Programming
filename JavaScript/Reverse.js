const reverseString=(str1) =>{
    var list1 = str1.split('')
    var reverselis = list1.reverse();
    var strReverse = reverselis.join("")

    return strReverse;
}
console.log(reverseString('butter'))