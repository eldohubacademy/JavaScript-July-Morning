// Variables provide a way to store data as your application is running e.g. the current logged in user, cart items, states e.t.c

// In js, we define/create variables using const, let or var keywords with a variable name, an assignment operator and the value to be stored.

// Examples

const user1 = "Joseph";
let user2 = "Albert";
// const and let are block scoped --- they are only accesible within a block{} of code
// const is used for contstant/non-changing variables
// let is used for variables whose values change as the program runs
var email = "albert@eldohub.co.ke";

// changing values

console.log(user2);

user2 = "Victor";

console.log(user2);

console.log(user1);
// user1 = "Sharon"; // Error -- you cannot change a value of a constant variable
console.log(user1);

// browser alerts - - input-output
const response = confirm("Are you ready for this???");

console.log(response); // a boolead -- true or false

const age = prompt("What is your age?");
console.log(age);
// forms are the stardard way of getting user input
