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

/*
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
*/

/////////////////////// CODING CHALLENGE #1 ///////////////////////

/*
const marksMass = 78;
const marksHeight = 1.69;

const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / marksHeight ** 2
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

const marksHigherBMI = (marksBMI > johnsBMI);

console.log(marksBMI, johnsBMI, marksHigherBMI);
*/


/////////////////////// String & Template Literals ///////////////////////

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);

// Multi-line String
console.log('String with \n\
multiple \n\
lines');

// Easier way with template strings
console.log(`String
multiple
lines`);
*/

/////////////////////// Taking Decisions: if / else Statements
//////////////

/*
const age = 15;

if (age >= 18) {
  // Whenever the isOldEnough value is true,
  // the code in this block will then be executed
  // if its false, then its not going to be executed
  console.log('Sarah can start learning to drive 🚘');
} else {
  // The else block will be executed if the condition is false
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/////////////////////// Challenge #2 ///////////////////////

/*
const marksMass = 78;
const marksHeight = 1.69;

const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / marksHeight ** 2
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})`);
}
else {
  console.log(`Johns's BMI (${johnsBMI}) is higher than Marks's BMI (${marksBMI})`);
}
*/

/////////////////////// Type Conversion and Coercion ///////////////////////

/*
Types are one of the fundamentals aspects in programming
Converting between types is something we do in every programming language
I.e - String to a number, a number into a boolean
*/
/*
// Type conversion - when we manually convert from one type to another, explicitly
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // First one is a number, second one is a string
// The original value of inputYear is still a string, using the number function simply gives to us a converted version
console.log(Number(inputYear) + 18); // This will concatenate the value and not actually become an expression

console.log(Number('Jonas')); // Will return NaN - NaN means an invalid number

// We can do the same when converting numbers into strings
console.log(String(23), 23);

// Type coercion - when JS converts types behind the scenes for us, implicitly
// The plus operator here triggers a coercion to strings
console.log('I am ' + 23 + ' years old');
// JS converted the strings to numbers, if we used a plus it would convert to strings - 23103
console.log('23' - '10' - 3);
console.log('23' * '2'); // This will output 46 and not 232, JS will convert the strings to numbers

let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n); // 10
*/

/////////////////////// Truthy and Falsy Values ///////////////////////

/* Falsy values - Values that are not exactly false but will become
false when we try convert them into boolean.
In JS there are only 5 falsy values:
0, '', undefined, NaN & ofc false itself is already false.
*/

/*
// Converting values to boolean
// The conversion to boolean is always implicit, not explicit
// Type coercion that JS does behind the scenes
console.log(Boolean(0)); // Falsy value
console.log(Boolean(undefined)); // Falsy value
console.log(Boolean('Jonas')); // Any string that is not an empty string is a truthy value
console.log(Boolean({})); // Truthy value
console.log(Boolean('')); // Falsy value

const money = 0;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log('You should get a job!');
}

// Height is undefined
let height;
if (height) {
  console.log('YAY! Height is defined');
}
// This block will get executed as height is undefined & undefined is a falsy value
else {
  console.log('Height is UNDEFINED');
}
*/

/////////////////////// Equality Operators: == vs. === ///////////////////////

/*
// If we want to check if two values are equal we use equality operators

const age = 18;

// Checking if the age is exactly 18
// Just like the comparison operators this operator will return true or false. True will be if both sides are exactly the same
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

// Strict Equality Operator - ===
// Called Strict Equality Operator because it does not perform type coercion. Only returns true when both values are exactly the same.

// Loose Equality Operator - ==
// This actually does type coercion

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// // Will get a log, as 23 string will get converted to a number
// if (favourite == 23) {
//   console.log('Cool! 23 is an amazing number!');
// }

// Will not get a log
if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
}
else if (favourite === 9) {
  console.log('9 is also a cool number');
}
else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');
*/

/////////////////////// Boolean Logic ///////////////////////

/*
// Boolean logic is a branch of computer science which uses true and false values to solve complex logical problems, in roder to do that it uses several logical operators to combine true or false values.

// AND, OR & NOT Operators
// AND - return true ONLY if A AND B are true
// OR - Will be true if JUST ONE of the variables (A OR B) is true
// NOT - Inverts true/false value, if A is false it will become true, if A is true it will become false
*/

/////////////////////// Logical Operators ///////////////////////

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

/////////////////////// Coding Challenge #3 ///////////////////////

/*
const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 123) / 3;
console.log(dolphinsAvg, koalasAvg)

if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 & koalasAvg >= 100) {
  console.log('DRAW!')
}
else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log('DOLPHINS WIN! 🏆')
}
else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log('KOALAS WIN! 🏆');
}
else {
  console.log('NO TEAM WINS THE TROPHY 🏆!')
}
*/

/////////////////////// The Switch Statement ///////////////////////

// A switch statement is an alternative way of writing a complicated else if statement
// It is used when all we want to do is compare one value to multiple different options
/*
const day = 'Monday';

// Switch Statement
switch (day) {
  case 'Monday': // day === 'Monday' <- If this is true, the code below will be executed
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'Tuesday':
    console.log('Prepare theory videos');
    break;
  // Running the same code for two different values
  case 'Wednesday':
  case 'Thursday':
    console.log('Write code examples');
    break;
  case 'Friday':
    console.log('Record videos');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day');
}

// If Statement
if (day === 'Monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
  console.log('Write code examples');
} else if (day === 'Friday') {
  console.log('Record videos');
} else if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day');
}
*/

/////////////////////// Statements & Expressions ///////////////////////

// 3 + 4 <- An expression because it produces a value 
// 1991 <- An expression because it also produces a value in JS 
// true && false && !false <- An expression because it will produce a boolean value 

// A statement is a bigger piece of code that is executed, which does not produce a value on itself
// Statements are like full sentences that translate our actions - the actions we want the program to perform

// This statment does not produce a value, all it does is declares this variable called str
/*
if (23 > 10) {
  const str = '23 is bigger'; // <- This string is itself is an expression
  // The const str = '23 is bigger'; is a statement, although the '23 is bigger' is an expression as it produces a value
  // When something ends in a semi-colon, that means its a statement, it's like a complete sentence.
}
*/

/////////////////////// The Conditional (Ternary) Operator ///////////////////////

// Another way of writing conditionals - Already seen two, if and switch
// Allows us to write something similar to an if else statement but all in one line 

const age = 23;
// If condition is true the first console.log will get printed 
// Else the second console.log will get executed 
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

age >= 18 ? 'wine 🍷' : 'water 💧';

































