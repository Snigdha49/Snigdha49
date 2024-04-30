let a = parseInt(prompt("Enter the Number"));
 if(a%3==0 && a%7==0){
   console.log("THE NUMBER IS DIVISIBLE BY BOTH")
 }
 else if(a%3==0){
   console.log("The number is divisible by 3")
 }
 else if(a%7==0){
   console.log("The number is divisible by 7")
 }
 else{
   console.log("The number is not divisible by any")
 }