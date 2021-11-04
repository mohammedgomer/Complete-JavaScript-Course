/*
let js = 'Amazing';
console.log(5 + 5);

/////////////////////// Values and Variables ///////////////////////

// Values are a piece of data, values are the most fundamental unit of information we have in programing
//  In this example Jonas and 23 are both values
console.log('Jonas');
console.log(23);

//  We can store values into varibales so that we can use them over and over again
// We are declaring a first name variable in our computers memory and assinging a value of Jonas to it
// Think of variables as real life boxes with labels on them - we assign the variable name (label) to describe whats in it, later we find it by using that label we assigned
let firstName = 'Jonas';
conse.log(firstName);

// Illegal variable names - because it starts with a number, has a symbol or is a reserved keyword
// let 3years = 3;
// let jonas& matilda = 'JM';
// let new = 27;
let name = 'Jonas';

const PI = 3.1415;

// Much more descriptive & appropriate variable names
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

// Bad practice of variable names
let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);

// Assignment //
let country = 'United Kingdom';
let continent = 'Europe';
let population = 747636026;

console.log(country);
console.log(continent);
console.log(population);
*/

/////////////////////// Data Types ///////////////////////

// It's the value that holds the data type 
let javascriptIsFun = true;

// Printing the boolean value 
console.log(javascriptIsFun);


// typeof is an operator that we can use to show the type of the value 
// The result of using this operator will be a new value which is a string with the type of value - true

// Boolean
console.log(typeof true);
// Boolean
console.log(typeof javascriptIsFun);
// Number
console.log(typeof 23);
// String
console.log(typeof 'Jonas');

// Dynamic typing in action,
//  We have changed our javasciptIsFun variable's value from a boolean to a String 
javascriptIsFun = 'YES!';

// typeof operator will now display javascriptIsFun as a string type
console.log(typeof javascriptIsFun);

// Undefined value - empty variable 
let year;
// The value of the variable will be undefined
console.log(year);
// The type of variable will also be undefined 
console.log(typeof year);

// We can reassign the undefined year value
year = 1991;
// Type will now be a number - Another example of dynamic typing 
console.log(typeof year);

// Null is another data type and it also similar to undefined
console.log(typeof null);








