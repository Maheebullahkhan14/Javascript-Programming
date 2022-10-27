function minDate(date1 ,date2){
    let date1trans = new Date(date1);
    let date2trans = new Date(date2);

    if(date1trans > date2trans){
        return date2trans

    }else{
        return date1trans
    }
}
const MinDate = minDate('02/05/2022' , '18/05/2022')
console.log(MinDate.toString())