const a = [10,2,4,2,5,10]

function findduplicates(a){
    let counts = {}

    for (let i =0; i<a.length ; i++){
        if(counts[a[i]]){
            counts[a[i]] += 1
        }else{
            counts[a[i]] = 1
        }
    }
    for (let j in counts){
        if (counts[j] >=2){
            console.log(j + ':' + counts[j])
        }
    }
    console.log(counts)

}
findduplicates(a)   