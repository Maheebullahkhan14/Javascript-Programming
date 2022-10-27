const willThanosKillMe = (name,kill,safe) =>{if (name.length%2==0){
    kill()
}else{safe()}
}

willThanosKillMe('khanmaheeb',()=>console.log('Kill') ,()=> console.log('safe') )