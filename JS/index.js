// NOT JAVA
// Both Object Oriented and Functional programming

// scripting language
// console.log("Hello World!")

function sayHello(name, age) {
    console.log(`Hello ${name}, you are ${age} year(s) old!`); //template literal
    console.log("Hello " + name + ", you are " + age + " year(s) old!"); // basic
}

// sayHello("Brandon", 99);

// Variables
// var, global scoped - only use these for GLOBAL VARIABLES, if at all
function scopeShenanigans(){
    var me = "Brandon";
    console.log(me);
}
me = "you";
// scopeShenanigans();

// let, block scoped - function variables, mutable
function letFunction() {
    let example = "this is a let variable";
    console.log(example);
}
// letFunction();

// const, block scoped ALWAYS THE ORIGINAL VALUE, immutable
const pi = 3.14;
// pi = 3; // not allowed
// console.log(pi);


function impossible(person) {
    if (person == undefined) {
        console.log("This if statement will only evaluate true if the person is null/undefined");
    }
    if (person) {
        console.log("This will not run if the value is undefined or null as well as '', 0, -0")
    }
}

// impossible(-0);


function varFunction() {
    // variable hoisting
    // var x;
    // All variable declarations are moved to the top of their scope
    console.log(x);
    if (2 == 2) {
        var x = 'x';
        console.log(x);
    }
}
// varFunction();

function letFunction2() {
    // console.log(x); // still hoisted but not accessible
    if (2==2) {
        let x = 'x'; // block scoped
        console.log(x);
    }
}
// letFunction2();

/**
 * primatives (data types), int, decimals, char
 * numbers
 * string
 * booleans
 * null
 * undefined
 * BigInt
 * Symbol
 */
let num = BigInt(1);
let name1 = "Brandon Vanek"
let name2 = Symbol("Brandon Vanek") // makes a unique value out of whatever is placed in it
// console.log(name1 == name2);

/**
 * Booleans
 * Truthy and Falsy
 * you don't just have ==, you also have ===
 * == - type coercion, try to see if the values are same
 * === - strict equality, value AND type are taking into account
 */
// console.log(1 == '1')

function tripleEquals(x=1, y=1) {
    if (typeof x != typeof y) {
        return false;
    }
    return x == y;
}
// console.log(tripleEquals())

/**
 * Operators
 * ! - not
 * == - equality
 * === - strict equality
 * != - not equal
 * !== - not strictly equal
 * || - logical OR
 * && - logical AND
 * | - bitwise OR
 * & - bitwise AND
 */

/**
 * Truthy and Falsy values
 * 
 * Falsy values are not a boolean false, but will be treated as though they were
 * 
 * Truthy values are literally everything else
 * 
 * Falsy:
 * false
 * 0
 * -0
 * 0n
 * null
 * undefined
 * NaN
 * ''
 * 
 * Truthy
 * '0'
 * true
 * EVERYTHING ELSE
 * []
 * {}
 * 42 
 * Karl
 * Bob
 * This was built in 10 days --- reminder
 */
let boolean = Boolean(-0); // false

let res = 0; // stuff coming in from API, example
if (res) { // you are checking for a bunch of falsy values all at once
    // not falsy
} else {
    // falsy
}

/**
 * JavaScript Object Notation (JSON)
 * Objects in js are basically just a hash map (key value pairs)
 * dictionary, itself is immutable but the values inside are
 */
var keyName = "example"; 
const person = {
    firstName: "Brandon",
    lastName: "Vanek",
    age: 82,
    email: "bvanek@skillstorm.com",
    favColor: "Tyrian Purple or Cadet Blue", 
    [keyName]: "The key is a variable",
    undefined: 1,
    null: "cheese",
    NaN: -0,
    getName: () => {
        return `${person.firstName} ${person.lastName}`;
    }
}
person.firstName = "Martha"; // sets
// console.log(person.getName()); // gets
person['date of birth'] = '08/16/24'
// console.log(person['date of birth'])

for (let props in person) {
    // console.log(props) // all the keys
    // console.log(person[props])// all the values
}

// console.log(Object.values(person)) // easy way
// console.log(Object.entries(person)[0][0]) // key AND values in a 2D array

Object.defineProperty(person, 'firstName', {writable: false}) // read only
Object.defineProperty(person, 'firstName', {enumerable: false}) // doesnt show up in list (visibility)

// arrays
const myArray = [1, "2", false, {name: "Brandon"}, [1, "1"]]

/**
 * pop - remove AND return an element
 * push - add something to the end of the array
 * shift - remove the first element of the array
 * unshift - add something to the beginning of the array
 * slice - copy the array
 * splice - by default, removes the middle element, but you can specify exactly which you'd like to remove
 */
const copyOfArray = myArray.slice(); // this creates a DEEP copy of the array

// console.log(copyOfArray.pop()); // last item
// console.log(copyOfArray.shift())
// console.log(copyOfArray)
// console.log(copyOfArray.splice(1, 1))
// console.log(copyOfArray)

function remove(index) {
    const removedValues = this.splice(index, 1); // removes 1 value at the index
    return removedValues;
}
Array.prototype.remove = remove;
console.log(copyOfArray.remove(1))