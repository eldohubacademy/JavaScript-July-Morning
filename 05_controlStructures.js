// control structures - - sequence, conditional, loop/iteration

if(70<20){
    console.log("Conditional statement");
    console.log("Conditional statement");
    console.log("Conditional statement");
    console.log("Conditional statement");
}else{
    console.log("it was false");
    console.log("it was false"); 
}
// grading system
let mark = 20
if(mark<40){
    console.log("Grade E");
}else if(mark<60){
    console.log("Grade C");
}else if(mark<80){
    console.log("Grade B");  
}else{
    console.log("Grade A");    
}
// rewrite this grading system using the switch statement

// loop/iterate -- while, do while, for loop

let num = 20
while(num<50){
    console.log("Hello, we are at number "+ num);
    // num++   // icncrementor 
    num = num+4 
}
console.log("hello programmer");
// rewrite this loop using a for loop

for(let count=22; count<78; count=count+6){
    console.log("Looping at" + count); 
}
// rm -rf .t


let name = "hfudhfdu"


switch(name) {
    case "victor":
        console.log("Hi Vic")
        break;
    case "albert": 
        console.log("hi Alb")
        break;
    default: 
        console.log("hi doe")
        break;

}

// Write a function that counts prime numbers between a given range of numbers 
// getPrime(23,90) -- 29, 31, (23,15)

function getPrime(startVal, lastValue){
    if(typeof startVal != "number" || typeof lastValue != "number" ||    lastValue<=startVal){
        console.log("invalid range"); // error checking
        return 0
    }
    for( let number = startVal+1; number<lastValue; number++ ){
            // console.log("Testing number : " + number);
            let isPrime = true
            for(let divisor=2; divisor<number; divisor++){
                if(number%divisor == 0){
                    // console.log(number + "is not a prime number");  
                    isPrime = false                  
                }
            }
            if(isPrime){
                console.log(number + "is a prime number"); 
            }else{
                // console.log(number + "is a prime number"); 
            }
    }
}
getPrime(23,90)
// getPrime("twenty three",90)
// getPrime(20253,90090)
// Write a function that determines if a given word or number is a palindrome. dad 242 
// Write a function that calculates the factorial of a given number.
//  Write a function that counts the number of vowels in a given string.
// Write a function that finds the greatest common divisor of two numbers.

