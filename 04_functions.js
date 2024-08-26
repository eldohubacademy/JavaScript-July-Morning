// a fucntion is a re-usable block of code {}

// functions are defined using the function keywork or using an arrow symbol , then to use the code ,  we call/invoke the function

function getSquare(x){
    console.log("Getting square start");
    let result = x*x
    console.log( result );  
    console.log("Getting square done");
    // html p
}

getSquare(32) // calling the func
getSquare(3)
getSquare(11)

function getSurfaceAreaCuboid(l,w,h){
    let front = (l*h)*2
    let top = (l*w)*2
    let side = (h*w)*2
    let totalSurface = front + top + side
    console.log("Surface area is " + totalSurface + " cm square");
    return totalSurface
    console.log("last statement");
}

let res1 = getSurfaceAreaCuboid(10,5,7)
let res2 = getSurfaceAreaCuboid(14,50,17)
let res3 = getSurfaceAreaCuboid(110,50,77)

//  to store/use the outcome of a function call, the function can have a return statement
console.log(res1);
console.log(res2);

// write a function that returns the area of a square given the length and the width

// Write a JavaScript function that takes the radius of a circle as input/argument and returns its area.

// 7 ===== 3.142*7*7 == 154 
function getAreaCircle(r){
    const PI = 3.142
    let area = PI*r*r
    return area
}
let res5 = getAreaCircle(7)
let res6 = getAreaCircle(456)
console.log(res5);
console.log(res6);
