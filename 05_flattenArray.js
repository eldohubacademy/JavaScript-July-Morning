// Write a function flattenArray(arr) that takes a nested array arr and returns a flattened array containing all the elements in the nested arrays.


const myArray = [1,2,3,[32,43,34], 90, [323,[43,34],3,2], [32,23]] // input

const flattenedArry =  [1,2,3,32,43,34,90,323,43,34,3,2,32,23] // expected output



// loop through my array - access each element
// create a new empty array -- flattened array - result/final 
// if an element is not an array, add it to the flattened/final array
// else if it is an array, llop through it, adding its elements to the resulting array
// when  done return the final array

function flattenArray(inputArray){
    let finalArray = []
    for(let index=0;index<inputArray.length; index++){
        // check if element at inputArray[index] === array
        console.log(inputArray[index]);
        
        if(typeof inputArray[index] == "object" ){
            finalArray.push( ...flattenArray(inputArray[index])  )
        }else{
            finalArray.push(inputArray[index])
        }
    }
    return finalArray
}
flattenArray(myArray)

