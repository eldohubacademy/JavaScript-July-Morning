// Higher Order Functions -- Functions that take other functions as arguments and/or return a function

// The function passed into another function as an argument is refered to as a callback function


function testOne(j){
    console.log(j);
    
    console.log("Running test one function");
}

function testTwo(name,  cbFunc ){
    // long processss ... atfter 
    console.log("running test two function");   
    console.log(name.toUpperCase());
    // done with long process
     cbFunc(name) // hello
}


testTwo("albert", function doSomething(){ console.log("Hello World")} )

testTwo("joseph", testOne)

// map, reduce, forEach, sort, --- hof
let myColors = ["red","green","blue", "brown"]

myColors.forEach( function paintingScreen(color,index){
    console.log("Painting Screen With Color "+ color + " which at index number "+ index);    
} )

myColors.forEach(testOne)

// map array function/method - run a provided callback function on each element of the given array, and return a new array with new elements 


function convertToUpperCase(currentColor){
    return "+254 "+currentColor
}

let resultingMap = myColors.map(convertToUpperCase)

console.log(resultingMap);

function amazing(){
    return {
        name: "albert",
        age: 50
    }
}


console.log( amazing().name  );
