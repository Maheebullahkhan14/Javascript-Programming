// You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the wo

function para(low,high){
    var output =[];

    for (var i = low ;i<=high ; i++){
        output.push(i);
    
    if(i%3===0){
        output.push('Div3'); }
        
    }return output;
}
console.log(para(2,12));