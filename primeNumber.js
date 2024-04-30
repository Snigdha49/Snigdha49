prime = (num) =>{
    num = parseInt(prompt("Enter a Number"));
    let count = 0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("The number is prime");
    }
    else{
        console.log("the number is composite")
    }
}
prime(1)