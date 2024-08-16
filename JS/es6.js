/**
 * closure: function that contains an encapsulated reference to it's surrounding 'lexical envirnment'
 */
function outer() { // block scope, here "wrapper class"
    let a = 1;

    function inner() {
        console.log(a);
    }
    inner();
} // to here
// outer();

function closureWithReturn(x, y) {
    return (a) => {
        console.log(`${x} and ${y} and ${a}`)
    }
}
// closureWithReturn(1, 2)(2);

/**
 * Arrow functions
 * allow us to write shorter fuctional syntax
 * 
 * if you only have 1 param () are optional
 * if you have no param, () are mandatory
 * if you have 2 or more params, you need ()
 * 
 * valid
 * a => a*2
 * a => a
 * (a,b) => a*b
 * () => "hello"
 * () => {}
 */

const myFunction = () => {
    console.log("hello");
}
// myFunction();

function closureEx() {
    return (name, age) => {
        if (name == age) {
            console.log("same")
        } else {
            console.log("different")
        }
        console.log(name, age);
    }
}
// closureEx()("1", 1)

//lots of different events JS
// setTimeout, setInterval
var url = "localhost";
function download(url) {
    console.log("Downloading...")
    //Async
    setTimeout(() => {
        console.log("Downloaded 25%...")
    }, 1000);
    setTimeout(() => {
        console.log("Downloaded 50%...")
    }, 2000);
    setTimeout(() => {
        console.log("Downloaded 75%...")
    }, 3000);
    setTimeout(() => {
        console.log("Downloaded 99%...")
    }, 6000);
    setTimeout(() => {
        console.log("Finished!")
    }, 6001);
}
// download(url);

let interval = setInterval(() => {
    console.log("going");
}, 1000)
clearInterval(interval);

// callback function
function sayhello(str, callback) {
    console.log(str)
    if(str) {
        callback();
    }
}
// sayhello("Hello", () => {
//     console.log("callback");
// })

// features of ES6
// spread and rest operator
const myName = "Brandon Vanek";
// console.log([...myName]) // spread operator

function addNumbers(a, b, c, d, e) {
    return a + b + c + d + e;
}
const numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1]
// console.log(addNumbers(...numbers)) // the spread operator takes 
                                    // the first 5 items from the array and makes them the parameters

function add(...nums) { // rest operator to gather any number params
    for (let num of nums) { // in returns index, of returns elems
        console.log(num);
    }
}
// add(numbers);

// function example(a, b, ...restOfParams) {

// }

// Array/Object deconstruction
// added in ES6

const person = {
    firstName: "Brandon",
    lastName: "Vanek",
    age: 82,
    email: "bvanek@skillstorm.com",
    favColor: "Tyrian Purple or Cadet Blue", 
    undefined: 1,
    null: "cheese",
    NaN: -0,
    getName: () => {
        return `${person.firstName} ${person.lastName}`;
    }
}

const {firstName, lastName, email, favColor} = person // object deconstruction
// console.log(firstName, lastName, email, favColor)

// array deconstruction
const nums = [1, 2, 3, 4, 5, 6, 7];
[num1, num2, ...restOfNums] = nums;
console.log(num1);
console.log(num2);
console.log(restOfNums);