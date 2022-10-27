function triangleType(a,b,c){
    if(((a <180 &&  a> 0) || (b<180 && b>0) ||(c<180 && c>0)) && (a+b+c === 180)){
        if(a === b && b===c & c === a){
            return 'Equilateral'
        }
        else if((a === b && b!=c && c!=a ) || (a != b && b===c && c!=a ) || (a != b && b!=c && c===a )){
            return 'Isoceles'
        }
        else{
            return 'Scalene'
        }
    }
    return 'Not a Triangle'
}

const Triangle = triangleType(60,60,60)
console.log(Triangle)