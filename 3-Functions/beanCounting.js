const countBs = (str) =>{
    let count = countChar(str, 'B')
    return count
}

const countChar = (str, char) =>{
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == char) count++
    }
    return count
}

console.log(countBs("BOB"))

console.log(countChar("kakkerlak",'k'))