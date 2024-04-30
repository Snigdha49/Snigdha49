vowels = (vow) =>{
    let count = 0;
    let vowels = 'aeiou'
    vow = vow.toLowerCase()
    for(let i =0;i<vow.length;i++){
        if(vowels.indexOf(vow[i])>-1){
            count++
        };
}
console.log(count);
}

vowels("hello heyy")