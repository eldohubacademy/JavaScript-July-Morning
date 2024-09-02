// Write a function that counts the number of vowels in a given string.
const testString = "Write A function that counts the number of vowels in a given string"
const vowels = ["a","e","i","o","u"]
// loop through the testString characters
// check if each character is found/included in the vowels array
// if present , increase counter(a variable holding the number of vowels found)
// return the final count after the loop-- number of all vowels in the test string
function countVowels(str){
    let numberOfVowels = 0
    let charactersArray = str.split("")
    charactersArray.forEach(  function checkIfVowel(letter){
            if( vowels.includes(letter.toLowercase()) ){
                numberOfVowels++
            }
    } )
    // console.log("you string has " + numberOfVowels + " vowels" );
    
     return numberOfVowels
}
countVowels(testString)


let result = countVowels("albert")
console.log(result);


