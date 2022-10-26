function charcount(str){
    let dict = {}
    for(let i of str ){
        if(i in dict){
            dict[i] +=1
        }else{
            dict[i] = 1
        }
    }return dict
}

const str = 'Hello I Count me'

console.log(charcount(str))