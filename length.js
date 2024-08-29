
function lengthOfSubstr(input){
    let lengthsOfSubstrings = []
    for(let outerIndex = 0; outerIndex< input.length; outerIndex++){
        let substr = input.charAt(outerIndex)

        for(let innerIndex = outerIndex + 1; innerIndex < input.length; innerIndex++ ){
            if(substr.includes(input.charAt(innerIndex))){
                break
            }else{
                substr = substr + input.charAt(innerIndex)
                
            }
        }
        console.log(substr);
        lengthsOfSubstrings.push(substr.length)
        
    }
    return Math.max(...lengthsOfSubstrings)
}
console.log( lengthOfSubstr("character") );
