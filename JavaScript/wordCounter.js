function wordcounter(sentence){
    return sentence.split(' ').length;

}

const words = wordcounter('I am Frontend Developer')
console.log(words)