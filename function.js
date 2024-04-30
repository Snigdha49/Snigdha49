const reverse =(num) => {
    let rev = "";
    while(num!=0){
        let rem = num%10;
        num=parseInt(num/10);
        rem.toString();
        rev+=rem

    }
    console.log("the number is "+ rev)
}
reverse(12)


