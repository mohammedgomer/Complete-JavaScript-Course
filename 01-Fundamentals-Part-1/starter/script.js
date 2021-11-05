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
// let jonas&matilda = 'JM';
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

/*
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
*/

/////////////////////// let, const & var - three ways to declare variables in JS ///////////////////////

/*
// let and const were introduced in ES6, they are modern JS
// Whereas the var keyword, is the old way of declaring variables.

//  We use the let keyword to declare variables that can change later
let age = 30;
age = 31; // Reassinging a value to a variable or mutate the age variable, it was 30, now it is 31

// We use the const keyword to declare variables that are not supposed to change in the future
const birthYear = 1991;
// This will not execute as we are unable to reassign const values - immutable variable
birthYear = 1990;
// We also cannot declare empty const variables
const job;

// Should I use let or const? - Best practice suggests to use const by default and let ONLY when you are really sure the variable needs to change at some point in the future.
// Reason this is best practice is because the less mutations in your programs the better, as this will lead to less bugs.

// Third way of declaring JS variables is var, although this should alweays be avoided.
// It should be learned only for legacy reasons and to have an idea.
var job = 'programmer';
job = 'teacher';

// Terrible idea, always properly declare variables!
lastName = 'Omer';
console.log(lastName);
*/

/////////////////////// Basic Operators ///////////////////////
/*
// Operators basically allows us to transform values or combine multiple values and do all types of work with values
// There are many types of operators: mathematical operators, comparison operators & assignment operators

// Mathematic/Arithmetic Operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
// We can log multiple values by adding a comma
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
// Concatenation of Strings, better way of doing this by template strings
console.log(firstName + ' ' + lastName);

// Assignment Operators, i.e the equal sign
// Theres two operators on this line the equal sign and the addition sign
let x = 10 + 5; // 15
console.log(x);

// Assignment Operators
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison Operators
// We use comparison operators to produce boolean values
// If ageJonas IS greater than ageSarah, then the result of this expression will be true
// We are basically asing is the age of jonas greater than the age of sarah, the console will then essentially return true
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18); // Checking to see if Sarah is of age

const isFullAge = age >= 18; // This variable will hold the boolean value

console.log(now - 1991 > now - 2018); // This is the same as ageJonas > ageSarah
*/

/////////////////////// Operator Precedence ///////////////////////


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

// Why are the two subtraction expressions executed before the ">" operator?
// Meaning why did JS not execute this expression as 46 > now 

// Both calculations are done before the comparison 
// Usually all the math operators are executed before the comparison operators
// This explains why the example below works 
console.log(now - 1991 > now - 2018);

// We can define two variables at the same time 
let x, y;
// Subtraction has higher precedence than equals, 
// that's why subtraction will get executed first
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
















