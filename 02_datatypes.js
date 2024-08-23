// Strings, Numbers, Boolean, Null, Undefined   --- Primitive/simple datatypes
// Objects, Arrays, Functions -- Non-primitives/Complex data types

// Strings -- characters enclosed in quotes""   '' 

const currentColor = "Brown"
const admin = "albert@admin.com"
const something = 'fjbfd743845$%##$# fshbfhsf'
const date = "05082024"
console.log(date);

// Numbers --- including decimals
const age = 36
const rate = 2.506

// Boolean -- true or false
const darkModeOn = true
const isLoggedIn = false

// Null - a place holder value used in absence of a default value
const average = null

// Undefined - Javascript's value assigned to a defined variable that was not assigned a value
let newUser
let total 
 // typefof operator can be used to check a variable or value's data type
 console.log(typeof date); //string
 console.log(typeof darkModeOn); // boolean
 console.log(typeof total); //undefined
 


// Object - a collection of data in a format like a real world object-  - it has properties and functions/methods/actions 
// objects are made up of comma-separated key-value pairs enclose in curly brackets{} -- object literals
let television = {
    brand: "LG",
    sixInInches: 63,
    isColored: true,
    sold: false,
    price: null,
    owner: "eldohub",
    technicalSpecs: {
        pixels: "15000*1200",
        resolution: "20X",
        SN: 325327
    }
}
const laptop = {
    brand: "Hp probook",
    price: 30000,
    seller: "jumia",
    availableColors: ["red","blue"]
}
console.log(television)
// accessing value in an object we use the dot notation
console.log( television.price );
console.log( laptop.price );
console.log(television.technicalSpecs.pixels);


// Array -- is a zero-indexed list of items/data/elements 
const students = ["albert", "kevin", "vincent", "victor"]

const staff = [ {name: "Awino", age: 70}, {name: "ntabo", age: 82}, "Cherop", 800, ["web", "data"], true, null ]

// to access data/elements of an array we use bracket notation with the indexes of the elements starting with 0 for the first element.
console.log( students[0] );
console.log(staff[0].age); // fisrt staff member age 

// second staff member name
console.log(staff[1].name);

// log "data" from staff array

console.log( staff[4][1] ); //data


// Function -- a reusable block{} of code

function nameOfFunction(){
    // code to execute/run when function is invoked/called
    console.log("Function called!!");
    console.log("Runiing!!!!");
}

function scream(){
    console.log("uuuuiiiiiiiiiiiiiii!!");
    console.log("aaoo.");
        
}

scream()
scream()
scream()
scream()
scream()
scream()
scream()


// our discount rate is 30% 
function calculateDiscount(initial, rate){
    // inital is an argument for this function
    console.log( (rate/100)*initial );
}
calculateDiscount(900, 15) // 300
calculateDiscount(1000, 20) // 
calculateDiscount(636, 11) // 

console.log("albert" / 100);
