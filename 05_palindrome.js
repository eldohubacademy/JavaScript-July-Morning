// Write a function that determines if a given word or number is a palindrome. dad 242
// a palindrome is a value that reads the same from both the front and the back . e.g. dad, 454, 999
// dog == god  -- 
function checkIfPalindrome(value){
    let reversedValue = ""
    if(typeof value == "string"){
        // reverse the string
        for(let index = value.length-1; index>=0; index-- ){
            reversedValue += value.charAt(index)
        }
        if(value == reversedValue){
            return true
        }else{
            return false
        }
    }else{
        // reverse number
        return checkIfPalindrome(value.toString()) // recursion -- 
    }
}
console.log(checkIfPalindrome("albert") );
console.log(checkIfPalindrome("dad") );
console.log(checkIfPalindrome(454) ); // true
console.log(checkIfPalindrome(455) ); // false
// god    albert-6
  
    
console.log("***************");


const paliCheck = (val)=> val == val.toString().split("").reverse().join("")


console.log(  paliCheck("goog"));
console.log( paliCheck(5647));
console.log( paliCheck(565) );



 