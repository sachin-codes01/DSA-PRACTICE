//// Find frequency of each character

let str = 'What can I help with'
let count = {}
for(let i=0;i<str.length;i++){
    if(count[str[i]]){
        count[str[i]]++
    }else{
        count[str[i]] = 1
    }
}
for(let key in count){
    if(key === ' '){
        console.log('space','appears',count[key],'times')
    }else{
        console.log(key,'appears',count[key],'times')
    }
}

